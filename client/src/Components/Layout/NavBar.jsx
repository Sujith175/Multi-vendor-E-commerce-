import React from "react";
import styles from "../../Styles/styles";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";

const NavBar = ({ active }) => {
  return (
    <>
      <div className={`block 800px:${styles.normalFlex}`}>
        {navItems &&
          navItems.map((i, index) => (
            <div className="flex">
              <Link
                to={i.url}
                className={`${
                  active === index + 1
                    ? "text-[#a9a92b]"
                    : "text-[#000] 800px:text-[#fff]"
                } font-[500] px-6 cursor-pointer !pb-8 !pt-8`}
              >
                {i.title}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default NavBar;
