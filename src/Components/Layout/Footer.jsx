import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full  p-10 bg-emerald-700 dark:bg-emerald-900 text-white">
      <div className="grid grid-cols-7 gap-6">
        <aside className="col-span-4">
          <span className="text-2xl">
            <i className="fa-solid fa-object-group"></i>
          </span>
          <p className="w-full sm:w-full xs:w-full">
            <span className="py-2 text-lg font-bold">U-Learn Study.</span>
            <br />
            We are one of the most reliable academic writing service providers
            in the world due to our commitment to offering the best quality work
            to students within the stipulated time. We offer a number of
            guarantees to our customers, so they can trust us completely and get
            maximum satisfaction.
          </p>
        </aside>
        <div className="col-span-3 ">
          <div className="w-full grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <nav className="xs:w-full sm:w-full md:w-full w-full   flex xs:flex-col sm:flex-col justify-center list-none md:items-start xs:items-center sm:items-center">
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
                  <NavLink to="/pending-assignments">
                    {" "}
                    Pending Assignments
                  </NavLink>
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
            </div>

            <div>
              <nav className="xs:w-full sm:w-full md:w-full w-full   flex xs:flex-col sm:flex-col justify-center  md:items-start xs:items-center sm:items-center">
                <h6 className="footer-title">Stay with us</h6>
                <NavLink className="link link-hover">Terms of use</NavLink>
                <NavLink className="link link-hover">Privacy policy</NavLink>
                <NavLink className="link link-hover">Cookie policy</NavLink>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
