import React from "react";
import ContactForm from "../Components/Contact/ContactForm";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>U-Learn |Contact Us</title>
      </Helmet>
      <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 my-14 gap-6">
        <div className="flex flex-col justify-center gap-5">
          <h2 className="text-5xl my-2">Contact</h2>
          <p>
            We are one of the most reliable academic writing service providers
            in the world due to our commitment to offering the best quality work
            to students within the stipulated time. We offer a number of
            guarantees to our customers, so they can trust us completely and get
            maximum satisfaction. For more info Or Any query drop a message.
          </p>
          <div>
            <ContactForm />
          </div>
          <h3>
            <span className="font-bold text-xl">Email Us:</span>{" "}
            shafiul2014bd@gamil.com
          </h3>
        </div>

        <div className="flex flex-col items-center  xs:order-first sm:order-first md:order-none">
          <img
            src="https://i.ibb.co.com/fdSKqHZ/AI-Generated-Image-2024-09-16-464173877022201.jpg"
            alt="U-Learn"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
