import React from "react";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import notFoundFile from "../../public/assets/lottie/not-founs-404";

const Error404Page = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>U-Learn Study | Not found</title>
      </Helmet>
      <Header />
      <section>
        <div className="w-full min-h-screen flex justify-center items-center">
          <div className="card-body text-center w-full h-3/4">
            <h1 className="text-center text-3xl font-bold">Opps!</h1>
            <div className="w-full ">
              <Lottie animationData={notFoundFile} className="h-72" />
            </div>
            <p>Page not found, Please try another Or Contact administrator</p>
            <div className="pt-4 pb-4 mt-4 mb-4">
              <a
                href="/"
                className="bg-blue-800 py-2 px-4 rounded-md font-semibold text-white"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Error404Page;
