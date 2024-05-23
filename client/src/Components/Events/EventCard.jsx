import React from "react";
import styles from "../../Styles/styles";
import CountDown from "./CountDown.jsx";

const EventCard = ({ active }) => {
  return (
    <div
      className={`w-full bg-white rounded-lg  ${
        active ? "unset" : "mb-12"
      } lg:flex p-2 mb-12`}
    >
      <div className="w-full lg:w-[50%] m-auto">
        <img
          src="https://m.media-amazon.com/images/I/71657TiFeHL._SX522_.jpg"
          alt=""
        />
      </div>
      <div className="w-full lg:w-[50%] m-auto flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>IPhone 14 Pro</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-bold text-[20px] pr-3 color-[#333] font-Roboto">
              ₹58000
            </h5>
            <h5 className="font-[500] text-[18px] text-[#d55b45] line-through">
              ₹60000
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            120 Sold
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
