import { useState } from "react";
import FooterListTitle from "./FooterListTitle";


const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };
  return (
    <div className="w-full py-10 text-xs">
      <div className="max-w-container text-xs mx-auto grid grid-cols-1 md:grid-cols-6   ">
        <div className="pl-8">
          <FooterListTitle title="COMPANY" />
          <ul className="flex flex-col text-xs">
            <li className="text-gray-600 text-sm hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              About us
            </li>
          </ul>
        </div>
        <div className="pl-1">
          <FooterListTitle title="CUSTOMERS" />
          <ul className="flex flex-col gap-2 text-xs text-gray-600">
            <li className="font-titleFont text-sm hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Payment & Delivery
            </li>
            <li className="font-titleFont text-sm hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Return policy
            </li>
            <li className="font-titleFont text-sm hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Help & Faq
            </li>
          </ul>
        </div>
        <div className="pl-1">
          <FooterListTitle title="SHOP" />
          <ul className="flex flex-col gap-2 text-xs text-gray-600">
            <li className="font-titleFont text-sm hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Shop Women
            </li>
            <li className="font-titleFont text-sm hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Shop Men
            </li>
            <li className="font-titleFont text-sm hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Shop Kids
            </li>
            <li className="font-titleFont text-sm hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Sale
            </li>
          </ul>
        </div>
        <div className="pl-1">
          <FooterListTitle title="MY ACCOUNT" />
          <ul className="flex flex-col gap-2 text-xs text-gray-600">
            <li className="font-titleFont text-sm hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Register
            </li>
            <li className="font-titleFont text-sm hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              My Orders
            </li>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col w-full px-4 pl-1 ">
          <div className="flex text-zinc-800 hover:text-black hover:underline decoration-[1px] underline-offset-1 cursor-pointer duration-300 ">
            <img src="	https://mybrands.az/img/letter_black_icon.svg" className="pb-5 pr-2" alt="email" />
            <FooterListTitle title="help@mybrands.az" />
            <a
              href="https://mybrands.az/img/letter_black_icon.svg"
              target="_blank"
              rel="noreferrer"
            >
            </a>
          </div>
          <div className="w-full text-xs text-gray-600">
            <p className="text-zinc-950 text-base hover:text-black hover:underline decoration-[1px] underline-offset-1 cursor-pointer duration-300 mb-4">
              +994504114114
            </p>
            <p className="text-sm mb-4">
              Online Store
            </p>
            <span className="">
              Contact our customer service team everyday from 9am to 6pm.
            </span>
          </div>
        </div>
        <div className="col-span-1 flex flex-col pb-2 pr-1">
          <div className="flex bg-zinc-100  cursor-pointer pl-3 px-1 m-4">
            <img src="https://mybrands.az/img/apple_black_icon.svg" alt="email" />
            <a
              href="https://mybrands.az/img/apple_black_icon.svg"
              target="_blank"
              rel="noreferrer"
            >
            </a>
            <div className="pl-3 pt-3">
              <p className="text-zinc-950 text-xs cursor-pointer ">
                Download on
              </p>
              <p className="text-sm text-slate-950 font-bold  mb-4">
                App Store
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex flex-col pb-2 pr-1">
          <div className="flex bg-zinc-100  cursor-pointer pl-3 px-1 m-4">
            <img src="	https://mybrands.az/img/googleplay_black_icon.svg" alt="google" />
            <a
              href="	https://mybrands.az/img/googleplay_black_icon.svg"
              target="google"
              rel="noreferrer"
            >
            </a>
            <div className="pl-1 pt-3">
              <p className="text-zinc-950 text-xs cursor-pointer ">
                Download on
              </p>
              <p className="text-sm text-slate-950 font-bold  mb-4">
               Google Play
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Footer;