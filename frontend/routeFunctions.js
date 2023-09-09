export const getRoute = async () => {
  try {
    const response = await fetch(
      "https://rich-plum-wildebeest-coat.cyclic.cloud/data",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );
    const result = await response.json();

    setResponse(result);
  } catch (error) {
    console.log(error);
  }
};

// export function postRoute() {}

// export function updateRoute() {}

// export function deleteRoute() {}
