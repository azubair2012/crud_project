"use client";
import React, { useState } from "react";

const Input = () => {
  const [Id, setId] = useState(null);
  const [Name, setName] = useState(null);
  const [Position, setPosition] = useState(null);
  const [Date, setDate] = useState(null);
  const [Response, setResponse] = useState(null);
  console.log(Id);

  const submitData = async (event) => {
    event.preventDefault();

    if (!Name || !Id) {
      alert("Fill in the required feilds please.");
    } else {
      const res = await fetch("http://localhost:5000", {
        body: JSON.stringify({
          id: Id,
          name: Name,
          position: Position,
          date: Date,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const result = await res.json();
      setResponse(result);
      alert(result);
      setId(null);
      setName(null);
      setPosition(null);
      setDate(null);
    }
  };

  return (
    <div className="w-fit h-fit rounded-2xl border-2 border-[#04FFF7] text-white mt-8 pt-4 px-4 text-center">
      <h1 className=" text-2xl">Input Data Here</h1>
      <br />
      <div className="flex items-center justify-center gap-4 text-black">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="rounded"
          />
          <input
            type="number"
            onChange={(e) => setId(e.target.value)}
            placeholder="ID"
            className="rounded"
          />
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            placeholder="Date"
            className="rounded"
          />
          <input
            type="text"
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Position"
            className="rounded"
          />
        </div>
      </div>
      <button
        onClick={submitData}
        title="Add entry to the table"
        className="rounded-full bg-slate-600 py-1 px-8 font-semibold my-6 hover:bg-green-800 hover:text-slate-200"
      >
        ADD
      </button>
    </div>
  );
};

export default Input;
