/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { isEmptyOrNull, onNotifyError, onNotifySuccess } from "../utils/helper";

import HomeBanner from "../Components/Home/HomeBanner";
import FeatureSection from "../Components/Home/FeatureSection";
import HomeFAQ from "../Components/Home/HomeFAQ";
import Quotes from "../Components/Home/Quotes";
import ContactForm from "../Components/Contact/ContactForm";
import Lottie from "lottie-react";

import contactFile from "../../public/assets/lottie/contact-us.json";

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
            <h3 className="text-2xl font-bold text-center">
              <span className="py-2 px-5 border-b dark:border-b-teal-50">
                Students Quote's
              </span>{" "}
            </h3>
          </div>
          <Quotes />
        </div>
      </section>

      <section className="container mx-auto">
        <HomeFAQ />
      </section>

      <section className="container mx-auto">
        <h2>Contact Us</h2>

        <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-7">
          <div className="w-full">
            <ContactForm />
          </div>
          <div>
            <Lottie animationData={contactFile} className="h-full" />
            {/* <img src="https://i.ibb.co.com/Yk9JycY/Monica-2024-09-16-17-02-31.webp" /> */}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
