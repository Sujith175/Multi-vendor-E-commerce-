import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../Styles/styles";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
const Cart = ({ setOpenCart }) => {
  const cartData = [
    {
      name: "Mac Air 256 gb ssd and 8bg ram",
      description: "test",
      price: 70000,
    },
    {
      name: "Mac Air 256 gb ssd and 8bg ram",
      description: "test",
      price: 24000,
    },
    {
      name: "Mac Air 256 gb ssd and 8bg ram",
      description: "test",
      price: 11000,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-[#fff] flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5 ">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
          {/* items length */}
          <div className={`${styles.normalFlex} p-4`}>
            <IoBagHandleOutline size={25} />
            <h5 className="pl-2 text-[20px] font-500 ">3 Items</h5>
          </div>
          {/* cart single items */}
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>
        <div className="px-5 mb-3">
          {/* checkout button */}
          <Link to="/checkout">
            <div
              className={`h-[45px] flex items-center justify-center w-[100%] bg-[#E44343] rounded-[5px] `}
            >
              <h1 className="text-[white] text-[18px] font-[600]">
                CheckOut Now USD $11111
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className="border-b p-4">
      <div className="w-full items-center flex">
        <div>
          <div
            className={`bg-[#e44343] border border-[#ee443473] rounded-full w-[25px] h-[25px] ${styles.normalFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px] ">{value}</span>
          <div
            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiOutlineMinus size={18} color="#7d879c" />
          </div>
        </div>
        <img
          alt=""
          className="w-[50px] h-[50px] ml-2"
          src="https://m.media-amazon.com/images/I/81PtF30TLUL._AC_UY1100_.jpg"
        />
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            $ {data.price} * {value}
          </h4>
          <h4 className="font-[400] text-[17px] pt-[3px] text-[#b81c1c] font-[Roboto]">
            US${totalPrice}
          </h4>
        </div>
        <RxCross1 className="cursor-pointer" />
      </div>
    </div>
  );
};
export default Cart;
