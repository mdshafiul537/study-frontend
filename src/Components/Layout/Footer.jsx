import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer  p-10 bg-emerald-700 text-white">
      <aside>
        <span className="text-2xl">
        <i className="fa-solid fa-object-group"></i>
        </span>
        <p className="w-1/2 sm:w-full xs:w-full">
          <span className="py-2 text-lg font-bold">U-Learn Study.</span>
          <br />
        </p>
      </aside>
      <nav className="xs:w-full sm:w-full  flex xs:flex-col sm:flex-col justify-center items-center">
        <h6 className="footer-title">Menu</h6>
        <li className="text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
          <NavLink to="/">Home</NavLink>
        </li>

        <li className="text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
          <NavLink to="/assignments"> Assignments</NavLink>
        </li>
        <li className="text-white active:text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
          <NavLink to="/create assignments">Create Assignment</NavLink>
        </li>
        <li className="text-white active:text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
          <NavLink to="/pending-assignments"> My Art & Craft</NavLink>
        </li>
        <li className="text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
        <NavLink to={"/contact-us"} className="link link-hover">
          Contact Us
        </NavLink>
        <NavLink to="/register" className="link link-hover">
          Register
        </NavLink>
        <NavLink to="/login" className="link link-hover">
          Login
        </NavLink>
      </nav>

      <nav className="xs:w-full sm:w-full  flex xs:flex-col sm:flex-col justify-center items-center">
        <h6 className="footer-title">Stay with us</h6>
        <NavLink className="link link-hover">Terms of use</NavLink>
        <NavLink className="link link-hover">Privacy policy</NavLink>
        <NavLink className="link link-hover">Cookie policy</NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
