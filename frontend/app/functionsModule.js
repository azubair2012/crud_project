// functionsModule.js

import { useState } from "react";

export function useRouteData() {
  const [Response, setResponse] = useState();
  const [Delete, setDelete] = useState();
  const [Id, setId] = useState(null);
  const [Name, setName] = useState(null);
  const [Position, setPosition] = useState(null);
  const [Date, setDate] = useState(null);

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
      alert("Server not connected");
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
