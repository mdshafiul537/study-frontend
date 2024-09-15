import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";

import { useLocation, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet";
import { AuthContext } from "../Context/AuthProvider";
import { isEmptyOrNull } from "../utils/helper";
import loginFile from "../../public/assets/lottie/login.json";
import Lottie from "lottie-react";

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // console.log("Login Location ", location);
  const { loginUserPass, loginWithGoogle, loginWithGitHub } =
    useContext(AuthContext);

  const [isShow, setIsShow] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUserPass(data, () => {
      if (!isEmptyOrNull(location.state)) {
        navigate(location.state);
      } else {
        navigate("/");
      }
    });
  };

  const onLoginWithGoogle = () => {
    loginWithGoogle(() => {
      if (!isEmptyOrNull(location.state)) {
        navigate(location.state);
      } else {
        navigate("/");
      }
    });
  };

  const onLoginWithGitHub = () => {
    loginWithGitHub(() => {
      if (!isEmptyOrNull(location.state)) {
        navigate(location.state);
      } else {
        navigate("/");
      }
    });
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>U-Learn | Login</title>
      </Helmet>
      <div
        className="w-full min-h-screen !my-0"
        style={{
          backgroundImage: `url(../images/login-bg.png)`,
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        <div className="container mx-auto">
          <div className="w-full  grid grid-cols-5 py-6">
            <div className="col-span-3 h-[600px] flex flex-col items-center justify-center">
              <Lottie animationData={loginFile} className="h-full" />
            </div>
            <div className=" col-span-2 grid grid-cols-1 h-[580px] justify-center items-center">
              <div className="py-4 w-10/12 bg-[rgba(255,255,255,.3)] dark:bg-[rgba(0,0,0,.3)] p-5 ">
                <h2 className="text-center text-2xl py-4 font-bold">Login</h2>
                <div className="">
                  <form
                    name="login"
                    className="flex flex-col gap-6 bg-transparent"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <label className="input input-bordered flex items-center gap-2 dark:bg-[rgba(0,0,0,.45)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                      </svg>
                      <input
                        type="text"
                        className="grow"
                        placeholder="Username"
                        {...register("username", { required: true })}
                      />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 dark:bg-[rgba(0,0,0,.45)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <input
                        type={isShow ? "text" : "password"}
                        className="grow "
                        placeholder="Password"
                        {...register("password", { required: true })}
                      />
                      {isShow ? (
                        <i
                          className="fa-solid fa-eye-slash cursor-pointer"
                          onClick={() => {
                            setIsShow(false);
                          }}
                        ></i>
                      ) : (
                        <i
                          className="fa-solid fa-eye cursor-pointer"
                          onClick={() => {
                            setIsShow(true);
                          }}
                        ></i>
                      )}
                    </label>

                    <label className="input input-bordered flex items-center gap-2 !bg-green-700 text-white font-bold cursor-pointer">
                      <i className="fa-solid fa-unlock"></i>
                      <input
                        type="submit"
                        className="grow !bg-green-700 cursor-pointer"
                        value="Login"
                      />
                    </label>
                  </form>
                </div>

                <div className="flex flex-row w-full justify-center items-center gap-7 h-24">
                  <div
                    title="Login via Google"
                    className="h-12 w-12 border-2 border-red-600 rounded-full flex flex-col items-center justify-center cursor-pointer"
                  >
                    <i
                      className="text-3xl fa-brands fa-google text-red-600 "
                      onClick={onLoginWithGoogle}
                    ></i>
                  </div>

                  <div
                    title="Login via Github"
                    className="h-12 w-12 border-2 border-white rounded-full flex flex-col items-center justify-center cursor-pointer"
                  >
                    <i
                      className="text-3xl fa-brands fa-github text-white "
                      onClick={onLoginWithGitHub}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
