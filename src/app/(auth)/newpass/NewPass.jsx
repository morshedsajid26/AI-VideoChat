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
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      router.push("/reset");
    }
  }, [router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.password || !formData.confirmPassword) {
      setError("Please fill out both password fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://127.0.0.1:8000/api/user-reset-password",
        {
          password: formData.password,
          password_confirmation: formData.confirmPassword,
        },
        {
          headers: {
            email: email,
            Accept: "application/json",
          },
          withCredentials: true, // ✅ added for cross-origin + custom header
        }
      );

      if (res.status === 200) {
        sessionStorage.removeItem("resetEmail");
        router.push("/success");
      }
    } catch (err) {
      console.error("Password Reset Error:", err);
      setError(err.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-screen grid justify-center items-center py-20 overflow-y-auto hide-scrollbar">
      <form
        onSubmit={handleSubmit}
        className="w-[500px] text-cente gap-5 flex flex-col items-center rounded-2xl"
      >
        <Image src={logo} alt="logo" />

        <h3 className="font-inter font-bold text-[30px] text-[#333333] mb-9 mt-15">
          Enter new password
        </h3>

        {email && (
          <p className="text-sm text-[#6A7282] -mt-2 mb-2">
            Changing password for:{" "}
            <span className="font-semibold text-[#333333]">{email}</span>
          </p>
        )}

        <Password
          label="Password"
          placeholder="Enter your password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Password
          label="Confirm Password"
          placeholder="Enter your password again"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-600 text-sm mt-2">{success}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-[#010006] text-white w-full font-inter py-3 rounded-[8px] mt-5 cursor-pointer"
        >
          {loading ? "Updating..." : "Update Password"}
        </button>
      </form>
    </main>
  );
};

export default NewPass;
