// functionsModule.js

import { useState } from "react";

export function useRouteData() {
  const [Response, setResponse] = useState();
  const [Delete, setDelete] = useState();
  const [Id, setId] = useState(null);
  const [Name, setName] = useState(null);
  const [Position, setPosition] = useState(null);
  const [Date, setDate] = useState(null);

  //updating data
  const handleUpdate = async (event) => {
    event.preventDefault();
    let name = updateName.current.value;
    let rank = updateRank.current.value;
    if (name == "" && rank == "") {
      alert("Enter a name please.");
    } else {
      try {
        const response = await fetch(`http://localhost:5000/${Name}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            rank: rank,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          setUpdateResult(result);
          updateRank.current.value = "";
          updateName.current.value = "";
        } else {
          console.error("Failed to update data");
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };

  //update end

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

  const deleteById = async (employee) => {
    let employeeId = employee.id;

    try {
      const response = await fetch(`http://localhost:5000/${employeeId}`, {
        method: "DELETE",
      });

      const deletedResult = await response.json();
      setDelete(deletedResult);
      getRoute();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return { Response, getRoute, deleteById }; // Export both the state and the function
}
