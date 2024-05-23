const express = require("express");
const path = require("path");
const router = express.Router();
const { upload } = require("../multer");
const Shop = require("../Model/Shop");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../Utils/sendMail");
const ErrorHandler = require("../Utils/ErrorHandler");

const catchAsyncErrors = require("../Middleware/catchAsyncErrors");
const sendToken = require("../Utils/jwtToken");
const { isAuthenticated } = require("../Middleware/auth");

router.post("/create-shop", upload.single("file"), async (req, res, next) => {
  try {
    const { email, name, password, address, phoneNumber, zipCode } = req.body;

    const sellerEmail = await Shop.findOne({ email });

    if (sellerEmail) {
      const fileName = req.file.filename;
      const filePath = `uploads/${fileName}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Error deleting File" });
        }
      });
      return next(new ErrorHandler("User already exists", 400));
    }

    const filename = req.file.filename;
    const fileUrl = path.join(filename);
    console.log(filename, fileUrl);
    const seller = {
      name: name,
      email: email,
      password: password,
      avatar: {
        public_id: fileUrl,
        url: fileUrl,
      },
      address: address,
      phoneNumber: phoneNumber,
      zipCode: zipCode,
    };

    const activationToken = createActivationToken(seller);
    const activationUrl = `http://localhost:5173/seller/activation/${activationToken}`;
    try {
      await sendMail({
        email: seller.email,
        subject: "Activate your Shop",
        message: `Hello ${seller.name} Please Click on the link to activate your shop account: ${activationUrl}`,
      });
      res.status(201).json({
        success: true,
        message: `Please check your email :- ${seller.email} to activate your Shop Account`,
      });
    } catch (err) {
      return next(new ErrorHandler(err.message, 500));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

//function to create activation token
const createActivationToken = (seller) => {
  return jwt.sign(seller, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

router.post(
  "/shop/activation",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { activation_token } = req.body;
      const newSeller = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );

      if (!newSeller) {
        return next(new ErrorHandler("Invalid Token", 400));
      }

      const { name, email, password, avatar, zipCode, address, phoneNumber } =
        newSeller;

      let seller = await Shop.findOne({ email });

      if (seller) {
        return next(new ErrorHandler("user already exists", 400));
      }

      seller = await Shop.create({
        name,
        email,
        password,
        avatar,
        address,
        phoneNumber,
        zipCode,
      });
      sendToken(seller, 201, res);
    } catch (err) {
      return next(new ErrorHandler(err.message, 500));
    }
  })
);
module.exports = router;
