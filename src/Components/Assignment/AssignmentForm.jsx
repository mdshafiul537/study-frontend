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
                  className={`input input-bordered input-sm input-success w-full`}
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
                  className={`input input-bordered input-sm input-success w-full`}
                  {...register("thumbnail")}
                />
                <p className="text-base text-red-600 font-semibold">
                  {errors.image?.message}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block">Difficulty:</label>
                <select
                  className="select select-success w-full"
                  {...register("difficulty")}
                  name="difficulty"
                >
                  <option disabled selected>
                    Select One
                  </option>
                  {difficulties?.map((difficulty) => {
                    return <option value={difficulty}>{difficulty}</option>;
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
                  className={`input input-bordered input-sm input-success w-full h-40`}
                ></textarea>
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-bold block">Marks:</label>
                <input
                  type="text"
                  name="marks"
                  {...register("marks")}
                  placeholder="Marks"
                  className={`input input-bordered input-sm input-success w-full`}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block">Premium:</label>
                <div className="flex flex-row items-center gap-6">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Yes&nbsp;</span>
                      <input
                        type="radio"
                        name="isPremium"
                        {...register("isPremium")}
                        className="radio checked:bg-green-500"
                        value={true}
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">No&nbsp;</span>
                      <input
                        type="radio"
                        name="isPremium"
                        value={false}
                        className="radio checked:bg-red-500"
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
                  className="w-full outline-none border border-green-500 h-9 rounded-lg pl-3"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-bold block">Email:</label>
                <input
                  type="text"
                  name="userEmail"
                  {...register("userEmail")}
                  placeholder="User Email"
                  className={`input input-bordered input-sm input-success w-full`}
                />
                <p className="text-base text-red-600 font-semibold">
                  {errors.userEmail?.message}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold block">User Name:</label>
                <input
                  type="text"
                  placeholder="User Name"
                  {...register("userName")}
                  name="userName"
                  className={`input input-bordered input-sm input-success w-full`}
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
