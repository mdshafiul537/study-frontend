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

const AssignmentForm = ({
  initValues,
  difficulties = ["easy", "medium", "hard"],
  onSubmitAction,
  name = "Create",
  isUpdate = false,
}) => {
  const schema = yup
    .object({
      title: yup.string().required("Title is required"),
      marks: yup.number().required(),
      userEmail: yup
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
    console.log("onSubmit, ", values);
    onSubmitAction(values, reset);
  };

  console.log("Error ", errors);

  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-2/3 sm:w-full xs:w-full md:w-full lg:w-2/3 flex flex-col my-7">
            <h2 className="text-2xl font-bold my-6">{name} Assignment </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-3">
                <label className="font-bold block">Title:</label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className={`dark:bg-[rgba(0,0,0,.4)] input input-bordered input-sm input-success w-full`}
                  {...register("title")}
                />
                <p className="text-base text-red-600 font-semibold">
                  {errors.itemName?.message}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block">Thumbnail URL:</label>
                <input
                  type="text"
                  placeholder="Thumbnail URL"
                  name="thumbnail"
                  className={`dark:bg-[rgba(0,0,0,.4)] input input-bordered input-sm input-success w-full`}
                  {...register("thumbnail")}
                />
                <p className="text-base text-red-600 font-semibold">
                  {errors.image?.message}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block">Difficulty:</label>
                <select
                  className="dark:bg-[rgba(0,0,0,.4)] select select-success w-full"
                  {...register("difficulty")}
                >
                  <option disabled selected>
                    Select One
                  </option>
                  {difficulties?.map((difficulty) => {
                    return (
                      <option
                        className="dark:bg-[rgba(0,0,0,.4)]"
                        value={difficulty}
                      >
                        {difficulty}
                      </option>
                    );
                  })}
                </select>
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
                <label className="font-bold block">Marks:</label>
                <input
                  type="text"
                  name="marks"
                  {...register("marks")}
                  placeholder="Marks"
                  className={`dark:bg-[rgba(0,0,0,.4)] input input-bordered input-sm input-success w-full`}
                />
              </div>
              <div className="flex flex-col gap-3 dark:text-teal-50">
                <label className="font-bold block">Premium:</label>
                <div className="flex flex-row items-center gap-6">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span>Yes&nbsp;</span>
                      <input
                        type="radio"
                        name="isPremium"
                        {...register("isPremium")}
                        className=" dark:border-black border-2 radio dark:checked:bg-green-700 checked:bg-green-500"
                        value={true}
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span>No&nbsp;</span>
                      <input
                        type="radio"
                        name="isPremium"
                        value={false}
                        className=" dark:border-black border-2 radio checked:bg-red-500 dark:checked:bg-red-600"
                        {...register("isPremium")}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block"> Due Date:</label>
                <CstDatePicker
                  onDateChange={(date) => {
                    setValue("dueDate", date);
                  }}
                  {...register("dueDate")}
                  className="dark:bg-[rgba(0,0,0,.4)] w-full outline-none border border-green-500 h-9 rounded-lg pl-3"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-bold block">Email:</label>
                <input
                  readOnly={isUpdate}
                  type="text"
                  name="userEmail"
                  {...register("userEmail")}
                  placeholder="User Email"
                  className={`dark:bg-[rgba(0,0,0,.4)] input input-bordered input-sm input-success w-full`}
                />
                <p className="text-base text-red-600 font-semibold">
                  {errors.userEmail?.message}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block">User Name:</label>
                <input
                  readOnly={isUpdate}
                  type="text"
                  placeholder="User Name"
                  {...register("userName")}
                  name="userName"
                  className={`dark:bg-[rgba(0,0,0,.4)] input input-bordered input-sm input-success w-full`}
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className="w-80">
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
      </div>
    </React.Fragment>
  );
};

export default AssignmentForm;
