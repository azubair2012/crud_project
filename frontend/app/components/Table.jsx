"use client";
import { ImBin } from "react-icons/im";
import Link from "next/link";
import { useState } from "react";

const Table = (props) => {
  let data = props.data;
  const [Delete, setDelete] = useState();

  const deleteById = async (employee) => {
    let employeeId = employee.id;

    try {
      const response = await fetch(`http://localhost:5000/${employeeId}`, {
        method: "DELETE",
      });

      const deletedResult = await response.json();
      setDelete(deletedResult);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  console.log(data);
  return (
    <div className="text-[#bbd5d4] mt-16">
      <table className="w-[80vw] px-8 text-center">
        <thead className="border-y-2 border-[#04FFF7]">
          <tr className="text-2xl">
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Start Date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((employee) => (
            <tr
              key={employee.id}
              className="border-y-2 border-[#04FFF7] text-lg"
            >
              <td className="border-r-2 border-[#04FFF7]">{employee.id}</td>
              <td className="border-r-2 border-[#04FFF7]">{employee.name}</td>
              <td className="border-r-2 border-[#04FFF7]">
                {employee.position}
              </td>
              <td className="border-r-2 border-[#04FFF7]">
                {new Date(employee.date).toLocaleDateString()}
              </td>
              <td className="flex justify-evenly items-center">
                <button
                  title="Update Entry"
                  className="my-2 text-white bg-green-800 rounded-xl p-1"
                >
                  UPDATE
                </button>{" "}
                <button
                  onClick={() => deleteById(employee)}
                  title="Delete Entry"
                  className="my-2 rounded-xl p-2 bg-slate-800 hover:bg-slate-200 hover:animate-[wiggle_0.4s_ease-in-out_infinite]"
                >
                  <ImBin color="red" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
