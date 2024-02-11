import React from "react";
import styles from "../../Styles/styles";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";

const NavBar = ({ active }) => {
  return (
    <div className={`${styles.normalFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div className="flex">
            <Link
              to={i.url}
              className={`${
                active === index + 1 ? "text-[#d6249b]" : "text-[#fff]"
              } font-[500] px-6 cursor-pointer`}
            >
              {" "}
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default NavBar;
