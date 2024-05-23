import React from "react";
import styles from "../../Styles/styles";
import sony from "../../Assets/sony.png";
import dell from "../../Assets/dell.png";
import lg from "../../Assets/lg.png";
import micro from "../../Assets/micro.png";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl `}
    >
      <div className="flex justify-between  w-full">
        <div className="flex items-start">
          <img height="130px" width="130px" src={sony} alt="" />
        </div>
        <div className="flex items-start">
          <img height="100px" width="100px" src={dell} alt="" />
        </div>
        <div className="flex items-start">
          <img height="105px" width="105px" src={lg} alt="" />
        </div>
        <div className="flex items-start">
          <img height="125px" width="125px" src={micro} alt="" />
        </div>
        <div className="flex items-start">
          <img height="125px" width="125px" src={micro} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
