import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const loginModalRef = useRef(null); // ✅ Don't comment this

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add axios request here when backend is ready
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* Close button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
          >
            ✕
          </Link>

          <h3 className="text-2xl font-bold text-center mb-6">Signup</h3>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
            >
              Signup
            </button>

            <button
              type="button"
              className="underline text-blue-600 text-sm"
              onClick={() => loginModalRef.current.showModal()}
            >
              Have an account? Login
            </button>
          </div>
        </form>
      </div>

      {/* Login Modal */}
      <dialog id="my_modal_3" className="modal" ref={loginModalRef}>
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h3 className="font-bold text-lg mb-4">Login</h3>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 px-3 py-2 border rounded-md outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 px-3 py-2 border rounded-md outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
              Login
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Signup;