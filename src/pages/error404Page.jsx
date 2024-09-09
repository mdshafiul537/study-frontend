import React from "react";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import { Helmet } from "react-helmet";

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
            <h2>
              <div className="badge badge-error text-2xl pt-4 pb-4">
                404 Not found
              </div>
            </h2>
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
