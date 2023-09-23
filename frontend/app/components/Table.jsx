"use client";
import { ImBin } from "react-icons/im";
import { useState, useEffect } from "react";
import { useRouteData } from "../functionsModule.js";
import { GrClose } from "react-icons/gr";
// import Modal from "./Modal";

const Table = () => {
  const { Response, deleteById, getRoute } = useRouteData();
  const [Modal, setModal] = useState(true);
  const [modalName, setmodalName] = useState("");
  const [modalDate, setmodalDate] = useState("");
  const [modalPosition, setmodalPosition] = useState("");
  const [employeeName, setemployeeName] = useState("");
  const [employeeId, setemployeeId] = useState("");
  const [UpdateResult, setUpdateResult] = useState("");

  //updating data
  const handleUpdate = async (event) => {
    event.preventDefault();
    if (!modalName || !modalPosition || !modalDate) {
      alert("Fill in the required info please.");
    } else {
      try {
        const response = await fetch(
          `https://cloudy-galoshes-dog.cyclic.cloud/${employeeId._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: modalName,
              position: modalPosition,
              date: modalDate,
              id: employeeId,
            }),
          }
        );

        if (response.ok) {
          const result = await response.json();
          setUpdateResult(result);
          setmodalName("");
          setmodalPosition("");
          setmodalDate("");
          getRoute();
        } else {
          console.error("Failed to update data");
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };
  //update data end

  useEffect(() => {
    getRoute();
  }, []);

  return (
    <div className="text-[#bbd5d4] mt-16 flex flex-col items-center">
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
          {Response?.map((employee) => (
            <tr
              key={employee._id}
              className="border-y-2 border-[#04FFF7] text-lg"
            >
              <td className="border-r-2 border-[#04FFF7]" key={employee.index}>
                {employee.id}
              </td>
              <td className="border-r-2 border-[#04FFF7]" key={employee.name}>
                {employee.name}
              </td>
              <td
                className="border-r-2 border-[#04FFF7]"
                key={employee.position}
              >
                {employee.position}
              </td>
              <td className="border-r-2 border-[#04FFF7]">
                {new Date(employee.date).toLocaleDateString()}
              </td>
              <td className="flex justify-evenly items-center">
                <button
                  onClick={() => {
                    setemployeeName(employee.name);
                    setemployeeId({ _id: employee._id, id: employee.id });
                    setModal(false);
                  }}
                  title="Update Entry"
                  className="my-2 text-white bg-green-800 rounded-xl p-1"
                >
                  Update
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
      <div className="text-white w-fit">
        <button
          onClick={getRoute}
          className="rounded-full bg-slate-600 py-1 px-8 font-semibold my-6 hover:animate-pulse hover:bg-green-800 hover:text-slate-200"
        >
          Get List
        </button>
      </div>

      {/* Modal */}
      <div className="flex justify-center ">
        <div className="absolute top-0 z-10">
          <div
            className={
              Modal
                ? "hidden"
                : "border-2 backdrop-blur-lg h-[100vh] w-[100vw] flex justify-center items-center"
            }
          >
            <button
              className="rounded-full items-center  bg-red-300 py-1 px-8 font-semibold my-6 hover:bg-red-800 hover:text-slate-200 absolute bottom-40"
              onClick={() => {
                setModal(true);
              }}
            >
              <GrClose />
            </button>
            <div className="rounded-2xl bg-slate-950 border-2 border-[#04FFF7] text-white mt-8 pt-4 px-4 text-center">
              <div id="form">
                <div className="flex flex-col gap-4 ">
                  <div>
                    <h1>Name: {employeeName}</h1> <h1>ID: {employeeId.id}</h1>
                  </div>

                  <div className="flex flex-col text-black gap-4 ">
                    <input
                      id="name"
                      type="text"
                      value={modalName}
                      onChange={(e) => setmodalName(e.target.value)}
                      placeholder="Full Name"
                      className="text-center h-10 rounded"
                    />
                    <input
                      id="position"
                      type="text"
                      value={modalPosition}
                      onChange={(e) => setmodalPosition(e.target.value)}
                      placeholder="Position"
                      className="text-center h-10 rounded"
                    />
                    <input
                      id="date"
                      type="date"
                      value={modalDate}
                      onChange={(e) => {
                        setmodalDate(e.target.value);
                      }}
                      placeholder="Date"
                      className="text-center h-10 rounded"
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={handleUpdate}
                className="rounded-full bg-slate-600 py-1 px-8 font-semibold my-6 hover:bg-green-800 hover:text-slate-200"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal end */}
    </div>
  );
};

export default Table;
