/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {
  isEmptyOrNull,
  onNotify,
  onNotifyError,
  onNotifySuccess,
} from "../../utils/helper";
import CstDatePicker from "../Utils/CstDatePicker";
import { getSendContactMessage } from "../../utils/loaderAction";

const ContactForm = ({ initValues }) => {
  const schema = yup
    .object({
      firstName: yup.string().required("First Name is required"),
      email: yup
        .string()
        .email("Email is not valid")
        .required("Email is required"),
    })
    .required("");

  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema), defaultValues: initValues });

  const onSubmit = (values) => {
    onNotify("Yor message is sending...");
    getSendContactMessage(values)
      .then((resp) => {
        if (resp.status) {
          onNotifySuccess(resp.message);
        }
      })
      .catch((error) => {
        onNotifyError("Oops. Message send failed. Please try again later.");
      });
  };

  return (
    <React.Fragment>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col my-7">
          <h2 className="text-2xl font-bold my-6">
            We're here to support you along the way
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 gap-5">
              <div className="flex flex-col gap-3">
                <label className="font-bold block">First Name:</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className={`dark:bg-[rgba(0,0,0,.4)] input input-bordered input-sm input-success w-full`}
                  {...register("firstName")}
                />
                <p className="text-base text-red-600 font-semibold">
                  {errors.firstName?.message}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block">Last Name:</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className={`dark:bg-[rgba(0,0,0,.4)] input input-bordered input-sm input-success w-full`}
                  {...register("lastName")}
                />
                <p className="text-base text-red-600 font-semibold">
                  {errors.lastName?.message}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-bold block">Email:</label>
              <input
                type="text"
                placeholder="Email"
                className={`dark:bg-[rgba(0,0,0,.4)] input input-bordered input-sm input-success w-full`}
                {...register("email")}
              />
              <p className="text-base text-red-600 font-semibold">
                {errors.email?.message}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-bold block">Description:</label>
              <textarea
                type="text"
                placeholder="description"
                name="description"
                {...register("description")}
                className={`dark:bg-[rgba(0,0,0,.4)] input input-bordered input-sm input-success w-full h-40`}
              ></textarea>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-full">
                <input
                  type="submit"
                  placeholder="Add"
                  className={`w-full cursor-pointer input input-bordered input-sm input-success bg-green-600 font-bold text-white`}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
