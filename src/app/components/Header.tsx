import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPersonExclamation } from "react-icons/bs";

const Nav = () => {
  return (
    <main>
      <nav className="nav-container">
        <div className="logo-section">
          <Image
            className="logo"
            src="/images/logo.jpg"
            width="70"
            height="50"
            alt="woodico logo"
          />
          <h1 className="Brand-title">WOODICO</h1>
        </div>
        <div className="menu-section">
          <ul className="menu">
            <Link className="menu-item" href="/">Home</Link>
            <Link className="menu-item" href="\shop">Shop</Link>
            <Link className="menu-item" href="\about">About</Link>
            <Link className="menu-item" href="\contact">Contact</Link>
          </ul>
        </div>
        <div className="icons-section">
          <ul className="icons">
            <Link className="icon-item" href="/">
              <BsPersonExclamation />
            </Link>
            <Link className="icon-item" href="/">
              <AiOutlineSearch />
            </Link>
            <Link className="icon-item" href="/">
              <AiOutlineHeart />
            </Link>
            <Link className="icon-item" href="/">
              <AiOutlineShoppingCart />
            </Link>
          </ul>
        </div>
      </nav>
    </main>
  );
};

export default Nav;
