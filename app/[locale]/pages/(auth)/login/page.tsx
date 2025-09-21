"use client";
import useUserStore from "@/store/userStore";
import axiosInstance from "@/utils/axiosInstance";
import { Link } from "@/i18n/routing";
import { useRouter } from "@/i18n/routing";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const { setUser } = useUserStore();

  interface FormData {
    email: string;
    password: string;
  }

  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in...");
  
    try {
      const res = await axiosInstance.post("/auth/login", formData);
toast.success("Login successful!", { id: toastId });
      setUser(res.data.data);
      const id = res.data.data.userId;
      console.log(id);
      router.push("/pages/chat");
      localStorage.setItem("userId", id);
    } catch (error) {
      toast.error("Login failed. Please try again.", { id: toastId });
      console.log(error);
    }
  };
  return (
    <section className="signup w-full py-20 flex flex-col h-max border-green-500 border-1  items-center">
      <h6 className="text-5xl font-semibold my-7">Welcome back!</h6>
      <form
        onSubmit={handleLogin}
        className="form flex flex-col gap-6 items-center"
      >
        <div className="input-item flex items-start flex-col">
          <label className="invisible" htmlFor="email">
            Enter your email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Your email"
            className="border-slate-400 p-3 text-2xl border rounded-sm w-[40rem] h-20"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="input-item flex items-start flex-col">
          <label className="invisible" htmlFor="password">
            Enter your password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Your Password"
            className="border-slate-400 p-3 text-2xl border rounded-sm w-[40rem] h-20"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>

        <button type="submit" className="btn my-5 mb-9">
          Login
        </button>
      </form>
      <b>
        Don{`\'`}t have an account?
        <Link href={"/pages/signup"} className="underline">
          {" "}
          Create an account
        </Link>
      </b>
    </section>
  );
};

export default Login;
