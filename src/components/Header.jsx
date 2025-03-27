"use client";
import "../app/globals.css";
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";


const Header = () => {
    return (
        <div className="header">
            <div className="logo"><FaApple />
            </div>
            <div className="nav">
                <ul>
                    <li>Mac</li>
                    <li>iPhone</li>
                    <li>iPad</li>
                    <li>iWatch</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="search">
            <CiSearch />
            <p>|</p>
            <FiShoppingBag  />
            </div>
        </div>
    )
};

export default Header;