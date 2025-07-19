import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      if (res.data) {
        toast.success("Signup Successfully");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        navigate(from, { replace: true });
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>

              {/* Fullname */}
              <div className="mt-4 space-y-2">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>

              {/* Email */}
              <div className="mt-4 space-y-2">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>

              {/* Password */}
              <div className="mt-4 space-y-2">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>

                <div className="text-md">
                  <span>Have an account? </span>
                  <button
                    type="button"
                    className="underline text-blue-500"
                    onClick={() =>
                      document.getElementById("login_modal").showModal()
                    }
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <dialog id="login_modal" className="modal">
        <div className="modal-box">
          <button
            onClick={() => document.getElementById("login_modal").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <Login />
        </div>
      </dialog>
    </>
  );
}

export default Signup;
