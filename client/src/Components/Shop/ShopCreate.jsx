import React, { useState } from "react";
import styles from "../../Styles/styles.js";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server.js";
import { RxAvatar } from "react-icons/rx";

const ShopCreate = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [shopName, setShopName] = useState("");
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState();
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const newForm = new FormData();
    newForm.append("file", avatar);
    newForm.append("name", shopName);
    newForm.append("email", email);
    newForm.append("password", password);
    newForm.append("zipCode", zipCode);
    newForm.append("address", address);
    newForm.append("phoneNumber", phone);

    console.log(newForm);

    axios
      .post(`${server}/seller/create-shop`, newForm, config)
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setPassword("");
        setAvatar();
        setAddress("");
        setPhone();
        setZipCode();
        console.log("success");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error(err.response.data.message);
      });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register as a Seller
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[35rem]">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Shop Name
              </label>
              <div className="mt-1">
                <input
                  className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm
                   placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="name"
                  name="name"
                  autoComplete="email"
                  required
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  placeholder="Shop Name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm
                   placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm
                   placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="phone-number"
                  name="phone"
                  autoComplete="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <div className="mt-1">
                <input
                  className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm
                   placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="text"
                  name="Address"
                  autoComplete="Address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                ZipCode
              </label>
              <div className="mt-1">
                <input
                  className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm
                   placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="number"
                  name="zipcode"
                  autoComplete="zipcode"
                  required
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="Zip Code"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm
                   placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Profile Picture
              </label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      alt="avatar"
                      src={URL.createObjectURL(avatar)}
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Upload a File</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
            <div className={`${styles.normalFlex} justify-between`}>
              <div className={`${styles.normalFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember Me
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border 
                border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
            <div className={`${styles.normalFlex} w-full`}>
              <h4>Already Have an Account?</h4>
              <Link to="/login" className="text-blue-600 pl-2">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShopCreate;
