import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { isEmptyOrNull, onNotifyError, onNotifySuccess } from "../utils/helper";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import HomeBanner from "../Components/Home/HomeBanner";
import FeatureSection from "../Components/Home/FeatureSection";
import HomeFAQ from "../Components/Home/HomeFAQ";
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

      <section className="container mx-auto">
        <HomeFAQ />
      </section>
    </React.Fragment>
  );
};

export default HomePage;
