import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../Styles/styles";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);

  const navigate = useNavigate();

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleMessageSubmit = () => {
    navigate("/inbox?conversation=50fjkfjvkfjvfj");
  };

  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5 ">
            <div className=" w-full flex 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img
                  src={data.image_Url[select].url}
                  alt=""
                  className="w-[50%] "
                />
                <div className="w-full flex ">
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      alt=""
                      src={data?.image_Url[0].url}
                      className="h-[200px]"
                      onClick={() => setSelect(0)}
                    />
                  </div>
                  <div
                    className={`${
                      select === 1 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      alt=""
                      src={data?.image_Url[1].url}
                      className="h-[200px]"
                      onClick={() => setSelect(1)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p> {data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discount_price} $
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? data.price + "$" : null}
                  </h3>
                </div>

                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                        onClick={() => setClick(!click)}
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        title="Add to wishlist"
                        onClick={() => setClick(!click)}
                      />
                    )}
                  </div>
                </div>
                <div className={`${styles.button} mt-6  flex items-center`}>
                  <span className="text-white flex items-center">
                    Add to Cart <AiOutlineShoppingCart />
                  </span>
                </div>

                <div className="flex items-center pt-8 ">
                  <img
                    src={data.shop.shop_avatar.url}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full mr-2"
                  />
                  <div className="pr-8">
                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                    <h5 className="pb-3 text-[15px]">
                      ({data.shop.ratings}) ratings
                    </h5>
                  </div>
                  <div
                    className={`${styles.button} bg-[#cac81b]`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-white flex items-center">
                      Send Message <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductsDetailsInfo data={data} />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
};

const ProductsDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active == 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active == 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(3)}
          >
            Seller Details
          </h5>
          {active == 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active == 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsa
            assumenda sit iste iusto quas molestias aut odit et beatae iure
            impedit esse, consequatur, minus a velit laboriosam nostrum
            inventore
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            dolorem libero voluptate hic, nesciunt voluptates laboriosam? Quos
            mollitia nisi aperiam animi modi eaque, tempora doloremque, eius
            debitis illo odio repellat.
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
            recusandae laborum quam veniam inventore quia, debitis neque nostrum
            quos iusto voluptatibus itaque veritatis doloremque illo assumenda
            delectus sit doloribus aliquid?
          </p>
        </>
      ) : null}
      {active == 2 ? (
        <div className="w-full justify-center min-h-[40vh] flex items-center">
          <p>No reviews !</p>
        </div>
      ) : null}
      {active == 3 && (
        <div className="w-full block 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
            <div className="flex items-center">
              <img
                src={data.shop.shop_avatar.url}
                alt=""
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="pl-3">
                <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                <h5 className="pb-2 text-[15px]">
                  {data.shop.ratings} Ratings
                </h5>
              </div>
            </div>
            <p className="pt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              earum ipsa provident, voluptates, a obcaecati quo deleniti quis
              repellat ab cupiditate magni optio cum nulla. Consequuntur esse
              quae reiciendis dolorem.
            </p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                joined on: <span className="font-[500]">29 March,2024</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products: <span className="font-[500]">1,000</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Reviews: <span className="font-[500]">400</span>
              </h5>
              <Link to="/">
                <div
                  className={`${styles.button} !rounded-[4px] h-[30.5px] mt-3`}
                >
                  <h4 className="text-white">Visit Shop</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
