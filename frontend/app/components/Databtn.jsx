"use client";
import { useState, useEffect } from "react";
import Table from "./Table";

const Databtn = () => {
  const [Response, setResponse] = useState();
  const [Clear, setClear] = useState();

  const getRoute = async () => {
    try {
      const response = await fetch("http://localhost:5000", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const result = await response.json();

      setResponse(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoute();
  }, []);

  const clearData = () => {
    setResponse(null);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <Table data={Response} getData={getRoute} />
      <div className="text-white flex gap-4 w-fit">
        <button
          onClick={getRoute}
          className="rounded-full bg-slate-600 py-1 px-8 font-semibold my-6 hover:bg-green-800 hover:text-slate-200"
        >
          Get List
        </button>
        <button
          onClick={clearData}
          className="rounded-full bg-slate-600 py-1 px-8 font-semibold my-6 hover:bg-red-500 hover:text-slate-200"
        >
          Clear List
        </button>
      </div>
    </div>
  );
};

export default Databtn;
