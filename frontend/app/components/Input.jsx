"use client";
import React, { useState } from "react";

const Input = () => {
  return (
    <div className="w-fit h-fit rounded-2xl border-2 border-[#04FFF7] text-white mt-8 pt-4 px-4 text-center">
      <h1 className=" text-2xl">Input Data Here</h1>
      <br />
      <div className="flex items-center justify-center gap-4 text-black">
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" className="rounded" />
          <input type="number" placeholder="ID" className="rounded" />
        </div>
        <div className="flex flex-col gap-4">
          <input type="date" placeholder="Date" className="rounded" />
          <input type="text" placeholder="Position" className="rounded" />
        </div>
      </div>
      <button
        title="Add entry to the table"
        className="rounded-full bg-slate-600 py-1 px-8 font-semibold my-6 hover:bg-green-800 hover:text-slate-200"
      >
        ADD
      </button>
    </div>
  );
};

export default Input;
