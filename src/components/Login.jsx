import React from "react";
import { Button, Modal, Spin } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

export const Login = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 flex justify-center items-center">
      <div className="flex items-center justify-center py-8 mx-auto md:h-screen lg:w-1/2 lg:py-0">
        <div
          className="relative flex items-start justify-start text-2xl font-semibold text-gray-900 dark:text-white bg-cover w-full h-full"
        >
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:w-1/2 lg:py-0">
        <Modal
          title="Login Error"
          open={false}
        >
          <p>There was an error with your login. Please try again.</p>
        </Modal>
        <h1 className="text-xl font-bold leading-tight tracking-tight  text-gray-900 md:text-5xl mb-5 dark:text-white">
          Welcome back!
        </h1>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in
            </h1>
            {/* <Spin className="ml-[49%]" /> */}
            <form className="space-y-4 md:space-y-6">
              <div className="text-red-600"></div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Phone number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your phone number here"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2"
                  >
                    <EyeOutlined className="text-white text-lg mb-1.5" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me for a month
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-blue-100 font-bold  text-sm text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>

              <Button
                type="primary"
                className="w-full dark:text-white"
              >
                Sign in
              </Button>
            </form>
          </div>
        </div>
        {/* <img className="my-5 w-24 h-24" src={logo} alt="logo" /> */}
      </div>
    </section>
  );
};

export default Login;