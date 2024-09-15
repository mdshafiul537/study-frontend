/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { NavLink } from "react-router-dom";

const SubmissionForm = ({
  name = "Take",
  onSubmit,
  initialValues,
  isUpdate = false,
  ...props
}) => {
  const [copy, setCopy] = useState({ value: "", copied: false });

  const schema = yup
    .object({
      title: yup.string().required("Title is required"),
      assignment: yup.string().required("assignment is required"),
      marks: yup.string().required("marks is required"),
      resourcesURL: yup.string().required("Resources URL is required"),
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
  } = useForm({ resolver: yupResolver(schema), defaultValues: initialValues });

  const onSubmitAction = (values) => {
    console.log("onSubmit, ", values);
    onSubmit(values, reset);
  };

  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-2/3 sm:w-full xs:w-full md:w-full lg:w-5/6 flex flex-col my-7">
            <h2 className="text-2xl font-bold mb-5">
              {" "}
              <span>{name} Assignment | </span>{" "}
              <span>
                {" "}
                Marks:
                <i className="pl-3 text-amber-600 fa-solid fa-award"></i>{" "}
                {getValues("marks")}
              </span>{" "}
            </h2>

            <form
              onSubmit={handleSubmit(onSubmitAction)}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-row gap-3 text-base">
                <label className="font-bold block w-2/6">Title:</label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  readOnly
                  className={`dark:bg-[rgba(0,0,0,.4)] input input-bordered input-sm input-success w-full`}
                  {...register("title")}
                />
                <p className="text-base text-red-600 font-semibold">
                  {errors.itemName?.message}
                </p>
              </div>

              {isUpdate ? (
                <div className="flex flex-row gap-3 items-center">
                  <label className="font-bold block w-2/6">
                    Resources URL:
                  </label>{" "}
                  <span className="bg-gray-300 dark:bg-slate-800 px-2 py-1 shadow-xl ">
                    {getValues("resourcesURL")}
                  </span>
                  <NavLink
                    target="_blank"
                    className=" text-white"
                    to={getValues("resourcesURL")}
                  >
                    <span className="bg-sky-700 dark:bg-sky-500 px-2 py-1 shadow-xl">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </span>
                  </NavLink>{" "}
                </div>
              ) : (
                <div className="flex flex-row gap-3">
                  <label className="font-bold block w-2/6">
                    Resources URL:
                  </label>
                  <input
                    type="text"
                    placeholder="Resources URL"
                    className={`dark:bg-[rgba(0,0,0,.4)]  input input-bordered input-sm input-success w-full`}
                    readOnly={isUpdate}
                    {...register("resourcesURL")}
                  />
                  <p className="text-base text-red-600 font-semibold">
                    {errors.image?.message}
                  </p>
                </div>
              )}

              {isUpdate ? (
                <div className="flex flex-row gap-3">
                  <label className="font-bold block w-2/6">Feedback:</label>
                  <textarea
                    type="text"
                    placeholder="Feedback"
                    {...register("feedback")}
                    className={`dark:bg-[rgba(0,0,0,.4)] input input-bordered input-sm input-success w-full h-40 `}
                  ></textarea>
                </div>
              ) : (
                ""
              )}
              {isUpdate ? (
                <div className="flex flex-row gap-3">
                  <label className="font-bold block w-2/6">
                    Obtained Marks:
                  </label>

                  <input
                    type="number"
                    name="obtainedMarks"
                    {...register("obtainedMarks")}
                    placeholder="Obtained Marks:"
                    className={`dark:bg-[rgba(0,0,0,.4)] input input-bordered input-sm input-success w-full`}
                  />
                  <p className="text-base text-red-600 font-semibold">
                    {errors.obtainedMarks?.message}
                  </p>
                </div>
              ) : (
                ""
              )}

              <div className="flex flex-row gap-3">
                <label className="font-bold block w-2/6">Email:</label>
                <input
                  readOnly
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

              <div className="flex flex-row gap-3">
                <label className="font-bold block w-2/6">User Name:</label>
                <input
                  readOnly
                  type="text"
                  name="userName"
                  {...register("userName")}
                  placeholder="User Name:"
                  className={`dark:bg-[rgba(0,0,0,.4)] input input-bordered input-sm input-success w-full`}
                />
                <p className="text-base text-red-600 font-semibold">
                  {errors.userName?.message}
                </p>
              </div>

              <div className="flex flex-row gap-3">
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

export default SubmissionForm;
