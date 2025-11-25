"use client";

import { useForm } from "react-hook-form";
// import { useAuth } from "../../components/AuthProvider";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const { loginUser, signInWithGoogle } = useAuth();
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
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
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...register("email")}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleLogin}
          className="mt-5 flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold p-3 rounded-xl shadow-lg transition-all duration-300"
        >
          <FaGoogle size={20} />
          Login with Google
        </button>

        {/* Create Account Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Do not have an account?{" "}
          <a
            href="/auth/register"
            className="text-indigo-600 font-medium hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
