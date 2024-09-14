/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { isEmptyOrNull, onNotifyError, onNotifySuccess } from "../utils/helper";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import HomeBanner from "../Components/Home/HomeBanner";
import FeatureSection from "../Components/Home/FeatureSection";
import HomeFAQ from "../Components/Home/HomeFAQ";
import Quotes from "../Components/Home/Quotes";
const HomePage = () => {
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>U-Learn Study | Home</title>
      </Helmet>
      <section className="container mx-auto">
        <HomeBanner />
      </section>

      <section className="container mx-auto">
        <FeatureSection />
      </section>

      <section className="container mx-auto my-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="">
            <h3 className="text-2xl font-bold text-center">Students Quote's</h3>
          </div>
          <Quotes />
        </div>
      </section>

      <section className="container mx-auto">
        <HomeFAQ />
      </section>
    </React.Fragment>
  );
};

export default HomePage;
