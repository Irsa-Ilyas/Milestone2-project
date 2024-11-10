import React from "react";
import Link from "next/link";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">Irsa Ilyas</div>
        <div className="nav">
          <ul>
            <li id="dark">
              <FaMoon />
            </li>
            <li className="sun">
              <IoSunnyOutline />
            </li>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/techstack">TECH STACK</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
            <li>
              <Link href="#">
                <FaGithub />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaXTwitter />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaLinkedin />
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu">
          <CiMenuFries />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
