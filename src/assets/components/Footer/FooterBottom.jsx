import React from "react";


const FooterBottom = () => {
  return (
    <div className="w-full group">
      <div className="max-w-container mx-auto border-t-[1px] p-6 pl-1 pr-1">
        <p className="text-titleFont font-normal flex justify-around text-lightText duration-200 text-xs">
          © MYBRANDS - ALL RIGHTS RESERVED
          <a href="https://reactbd.com/" target="_blank" rel="noreferrer">
            <span className="ml-1 group-hover:text-primeColor pr-10">
            Privacy & Cookies
            </span>
            <span className="ml-1 group-hover:text-primeColor">
            General terms & conditions
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;