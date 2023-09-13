"use client";
import React, { useState } from "react";
import { useRouteData } from "../functionsModule.js";

const Input = () => {
  const [Id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Position, setPosition] = useState("");
  const [Date, setDate] = useState("");
  const [Response, setResponse] = useState("");
  const { getRoute } = useRouteData();

  const submitData = async (event) => {
    event.preventDefault();

    if (!Name || !Id || !Position || !Date) {
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
      setId("");
      setName("");
      setPosition("");
      setDate("");
    }
  };

  return (
    <div className="w-fit h-fit rounded-2xl border-2 border-[#04FFF7] text-white mt-8 pt-4 px-4 text-center">
      <h1 className=" text-2xl">Input Data Here</h1>
      <br />
      <div className="flex items-center justify-center gap-4 text-black">
        <div className="flex flex-col gap-4 ">
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="text-center h-8 rounded"
            value={Name}
          />
          <input
            id="id"
            type="number"
            onChange={(e) => setId(e.target.value)}
            placeholder="ID"
            className="text-center h-8 rounded"
            value={Id}
          />
        </div>
        <div className="flex flex-col gap-4">
          <input
            id="date"
            type="date"
            onChange={(e) => setDate(e.target.value)}
            placeholder="Date"
            className=" text-center h-8 rounded"
            value={Date}
          />
          <input
            id="position"
            type="text"
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Position"
            className="text-center h-8 rounded"
            value={Position}
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
