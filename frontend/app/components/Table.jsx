import React from "react";
import { ImBin } from "react-icons/im";
import Link from "next/link";

const Table = () => {
  return (
    <div className="text-[#bbd5d4] mt-16">
      <table className="w-[80vw] px-8 text-center">
        <thead className="border-y-2 border-[#04FFF7]">
          <tr className=" text-2xl">
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Start Date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-y-2 border-[#04FFF7] text-lg">
            <td className="border-r-2 border-[#04FFF7]">2441139</td>
            <td className="border-r-2 border-[#04FFF7]">John Doe</td>
            <td className="border-r-2 border-[#04FFF7]">Supervisor</td>
            <td className="border-r-2 border-[#04FFF7]">12/09/2020</td>
            <td className="flex justify-evenly items-center">
              <button
                title="Update Entry"
                className="my-2 text-white bg-green-800 rounded-xl p-1"
              >
                UPDATE
              </button>{" "}
              <button
                title="Delete Entry"
                className="my-2 rounded-xl p-2 bg-slate-800"
              >
                <ImBin color="red" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
