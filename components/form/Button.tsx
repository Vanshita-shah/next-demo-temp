"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const Button = ({ text }: { text: string }) => {
  const { pending } = useFormStatus();
  const imageDataUrl = localStorage.getItem("img");
  console.log("helllloooasdhsadjhasd", imageDataUrl);

  return (
    <>
      <button
        disabled={pending}
        className="bg-purple-600 text-white font-bold cursor-pointer px-6 py-2 mt-5 disabled:bg-purple-300 "
      >
        {text}
      </button>
      <img
        className="inline-block h-[50px] w-[50px] rounded-full ring-2 ring-white"
        src={imageDataUrl}
        alt=""
      />
    </>
  );
};

export default Button;
