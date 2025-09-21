"use client";
import axiosInstance from "@/utils/axiosInstance";
import {Link} from "@/i18n/routing";
import { useRouter } from "@/i18n/routing";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Signup = () => {
  interface FormData {
    fullName: string;
    email: string;
    password: string;
  }

  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Signing up...");
    console.log("first");
    try {
      const res = await axiosInstance.post("/auth/register", formData);

      toast.dismiss(toastId);
      toast.success("Signup successful!");

      setTimeout(() => {
        router.push("/pages/login");
      }, 3000);

      console.log(res.data);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Signup failed. Please try again.");
      console.log(error);
    }
  };

  return (
    <section className="signup w-full py-7 flex flex-col h-max border-green-500 border-1 items-center">
      <h6 className="text-5xl font-semibold my-7">
        Create a completely free account
      </h6>
      <form
        onSubmit={handleSignUp}
        className="form flex flex-col gap-6 items-center"
      >
        <div className="input-item flex items-start flex-col">
          <label className="invisible" htmlFor="fullName">
            Enter your full name
          </label>
          <input
            name="fullName"
            placeholder="Your full name"
            className="border-slate-400 p-3 text-2xl border rounded-sm w-[40rem] h-20"
            required
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
        </div>

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
          Sign up for free
        </button>
      </form>
      <b>
        Already have an account?
        <Link href="/pages/login" className="underline">
          {" "}
          Sign In{" "}
        </Link>
      </b>
    </section>
  );
};

export default Signup;
