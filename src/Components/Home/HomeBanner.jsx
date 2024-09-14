import React from "react";
import PropTypes from "prop-types";
import homeBannerFile from "../../../public/assets/lottie/home-banner.json";
import Lottie from "lottie-react";
import { NavLink } from "react-router-dom";

const HomeBanner = ({ ...props }) => {
  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-3 h-[350px]">
          <Lottie animationData={homeBannerFile} className="h-full" />
        </div>
        <div className="w-full col-span-4 flex flex-col justify-center gap-5">
          <h1 className="text-3xl font-bold">
            Welcome United Learn & Assignment
          </h1>
          <p className="text-base font-semibold">
            Student competitions provide a myriad of opportunities: they are a
            platform to demonstrate your talent, a stepping-stone to achieving
            greater things in future career and a unique opportunity to work on
            real-life problems and make a difference. Participating in a
            competition represents unconventional but effective ways of
            expanding your network, knowledge and skills...{" "}
          </p>
          <div className="w-full">
            <NavLink
              to="/login"
              className="bg-emerald-700 dark:bg-emerald-900 px-5 py-2 cursor-pointer text-white hover:bg-emerald-900 font-bold"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

HomeBanner.propTypes = {};

export default HomeBanner;
