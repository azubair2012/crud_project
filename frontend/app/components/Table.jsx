import React from "react";

const Table = () => {
  return (
    <div className="text-[#bbd5d4] justify-center flex">
      <table className="w-[80vw] px-8 mt-8 text-center">
        <thead className="border-y-2 border-[#04FFF7]">
          <tr className=" text-2xl">
            <th>Start Date</th>
            <th>Name</th>
            <th>Position</th>
            <th>ID</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 2 </td>
            <td>Row 2</td>
            <td>Row 2</td>
            <td>Row 2</td>
            <td>Row 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
