import React, { useState } from "react";

//css
import "./Navbar.css";
//route
import { Link } from "react-router-dom";
//contextapi
import { useGlobalContext } from "../context";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const { handleClick, timer } = useGlobalContext();
  return (
    <div className="Navbar">
      <section className="logo">
        <Link to="/">
          <img
            src="https://codingal.s3.amazonaws.com/media/organizations/2021/03/14/Penguin_Big.png"
            alt=""
          />
          <img
            className="small"
            src="https://cdn.codingal.com/images/logos/logos-main/logo-with-text.svg"
            alt=""
          />
        </Link>
      </section>
      <div className={`navLinks ${navToggle && "toggle"}`}>
        <section className="middle">
          <p>Trail Lesson [Grade 1-3]</p>
          <p>{timer}</p>
          <Link
            to="/posts"
            className="link"
            onClick={() => setNavToggle(!navToggle)}
          >
            Posts
          </Link>
        </section>
        <button className="btn" onClick={() => handleClick()}>
          End Class
        </button>
      </div>
      <div
        className={`burgerMenu ${navToggle && "toggleNav"}`}
        onClick={() => setNavToggle(!navToggle)}
      >
        <div className="level1"></div>
        <div className="level2"></div>
        <div className="level3"></div>
      </div>
    </div>
  );
};
export default Navbar;
