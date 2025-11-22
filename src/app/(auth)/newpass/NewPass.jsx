"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "@/public/auth_logo.png";
import Password from "@/src/component/Password";
import axios from "axios";
import { useRouter } from "next/navigation";

const NewPass = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("resetEmail");
    if (!storedEmail) return router.push("/reset");

    setEmail(storedEmail);
  }, [router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.password || !formData.confirmPassword) {
      return setError("Please fill out both password fields");
    }

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://127.0.0.1:8000/api/admin-reset-password",
        {
          email: email,
          password: formData.password,
          password_confirmation: formData.confirmPassword,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        setSuccess("Password updated successfully!");

        

        setTimeout(() => router.push("/success"), 800);
      }
    } catch (err) {
      console.error("Password Reset Error:", err);
      setError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Failed to reset password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-screen grid justify-center items-center py-20 overflow-y-auto hide-scrollbar">
      <form
        onSubmit={handleSubmit}
        className="w-[500px] flex flex-col gap-5 items-center"
      >
        <Image src={logo} alt="logo" />

        <h3 className="font-inter font-bold text-[30px] text-[#333333] mb-9">
          Enter new password
        </h3>

        <p className="text-sm text-[#6A7282] -mt-2 mb-2">
          Changing password for: <span className="font-semibold">{email}</span>
        </p>

        <Password
          label="Password"
          placeholder="Enter your password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Password
          label="Confirm Password"
          placeholder="Re-enter password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-[#010006] text-white w-full py-3 rounded-[8px]"
        >
          {loading ? "Updating..." : "Update Password"}
        </button>
      </form>
    </main>
  );
};

export default NewPass;
