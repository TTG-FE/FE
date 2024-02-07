import React from "react";
import phoneArrowLeftIcon from "../assets/phone_Arrow_right.svg";
import { Link } from "react-router-dom";

const MobileHeader = ({ title }) => {
  return (
    <header className="pt-7 px-6 pb-5 border-b-2 flex md:hidden">
      <button>
        <Link to={"/"}>
          <img src={phoneArrowLeftIcon} alt="" />
        </Link>
      </button>

      <h1 className="w-full text-center font-semibold text-base ml-[-23px]">{title}</h1>
    </header>
  );
};

export default MobileHeader;
