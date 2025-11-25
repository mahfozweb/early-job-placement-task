// // src/app/register/page.jsx
"use client";

import { useForm } from "react-hook-form";
// import { useAuth } from "../../components/AuthProvider";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  const { registerUser, signInWithGoogle } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitUser = async (data) => {
    try {
      await registerUser(data.email, data.password, data.name);
      router.push("/");
    } catch (err) {
      alert(err.message);
    }
  };
  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      router.push("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(onSubmitUser)} className="space-y-5">
          {/* NAME */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              {...register("name")}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              placeholder="Enter your password"
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>
        <button
          onClick={handleLogin}
          className="mt-5 flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold p-3 rounded-xl shadow-lg transition-all duration-300"
        >
          <FaGoogle size={20} />
          Login with Google
        </button>

        {/* Already have account */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
