"use client";
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";


const Header = () => {
    return (
        <div className="flex justify-between items-center text-lg pt-8 pb-5">
            <div className="scale-300 pl-5"><FaApple />
            </div>
            <div>
                <ul className="flex gap-20">
                    <li>Mac</li>
                    <li>iPhone</li>
                    <li>iPad</li>
                    <li className="bg-white text-[#b6ccda] rounded-[100px] px-8">iWatch</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="flex items-center gap-2 pr-[30px] scale-[1.5]">
            <CiSearch />
            <p>|</p>
            <FiShoppingBag  />
            </div>
        </div>
    )
};

export default Header;