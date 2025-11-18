"use client";

import React, { useEffect, useState, useRef } from "react";
import call from "@/public/call.png";
import Container from "@/src/component/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ChatRoom = () => {
  const router = useRouter();

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [sessionToken, setSessionToken] = useState(null);
  const [aiVideo, setAiVideo] = useState(null);
  const [aiText, setAiText] = useState("");

  const [sessionTime, setSessionTime] = useState(0);
  const [welcomeDone, setWelcomeDone] = useState(false);

  const videoRef = useRef(null);

  // ========================
  // PLAY VIDEO WITHOUT FLICK
  // ========================
  const playVideo = (src, loop = false) => {
    const video = videoRef.current;
    if (!video) return;

    video.loop = loop;

    const absoluteSrc = window.location.origin + src;

    if (video.src !== absoluteSrc) {
      video.src = src;
    }

    video
      .play()
      .catch(() => {});
  };

  // ========================
  // AUTO HANDLE VIDEO FLOW
  // ========================
  useEffect(() => {
    // AI video → play once
    if (aiVideo) {
      playVideo(aiVideo, false);
      return;
    }

    // Welcome video before idle
    if (!welcomeDone) {
      playVideo("/welcome.mp4", false);
      return;
    }

    // Default fallback: idle looping video
    playVideo("/idle_loop.mp4", true);
  }, [aiVideo, welcomeDone]);

  // ========================
  // CREATE SESSION
  // ========================
  useEffect(() => {
    createSession();
  }, []);

  useEffect(() => {
    if (!sessionToken) return;
    const interval = setInterval(() => setSessionTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [sessionToken]);

  const createSession = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/session/create", {
        method: "POST",
        headers: { Accept: "application/json" },
      });

      const data = await res.json();
      if (data.session_token) setSessionToken(data.session_token);
    } catch (err) {
      console.log("Session error:", err);
    }
  };

  // ========================
  // SEND MESSAGE
  // ========================
  const sendMessage = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setAiVideo(null);
    setAiText("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_token: sessionToken,
          message: input,
        }),
      });

      const data = await res.json();

      // PRELOAD AI VIDEO
      const preload = document.createElement("video");
      preload.src = data.video_url;
      preload.preload = "auto";

      preload.oncanplay = () => {
        setAiVideo(data.video_url);
        setAiText(data.reply_text || "");
        setLoading(false);
      };
    } catch (e) {
      console.log("AI ERROR:", e);
      setLoading(false);
      setAiVideo(null);
    }

    setInput("");
  };

  const formatTime = (s) => {
    const m = String(Math.floor(s / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${m}:${sec}`;
  };

  return (
    <div>
      <Container className="flex justify-center flex-col items-center py-10">
        <div className="relative w-full flex flex-col items-center">

          {/* ---------------- PERFECT NO-FLICK VIDEO SYSTEM ---------------- */}
          <div className="w-[350px] h-[260px] md:w-auto md:h-auto rounded-xl bg-black overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              muted={false}
              playsInline
              className="w-full h-full object-cover"
              onEnded={() => {
                if (!welcomeDone) {
                  setWelcomeDone(true);
                } else if (aiVideo) {
                  setAiVideo(null);
                }
              }}
            />
          </div>

          {/* ---------------- INPUT AREA ---------------- */}
          <div className="bg-[#D9D9D9]/50 flex flex-col items-center py-5 md:py-10 mt-5 w-full">

            <Image
              onClick={() => router.back()}
              src={call}
              alt="call"
              className="h-[50px] w-[50px] cursor-pointer"
            />

            <p className="font-inter mt-3 text-[12px] md:text-[16px]">
              {formatTime(sessionTime)}
            </p>

            <div className="flex items-center gap-3 mt-7 md:mt-14">
              <input
                type="text"
                placeholder="Type here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="md:w-[650px] w-[260px] md:py-5 py-3 px-4 md:px-10 rounded-2xl outline-0 bg-white text-[12px] md:text-[16px]"
              />

              <button
                onClick={sendMessage}
                className="py-3 px-6 bg-black text-white rounded-xl text-sm md:text-base cursor-pointer font-inter"
              >
                Send
              </button>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default ChatRoom;
