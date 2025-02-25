import axios from "axios";

const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3000/v1/ticket", {
        headers: {
          authorization: sessionStorage.getItem("accessToken"),
        },
      });
      if (result) resolve(result);
      reject(new Error("Some Problem Occured in the server"));
    } catch (error) {
      if (error.response) reject(error.response.data);
      reject(error);
    }
  });
};

export { getAllTickets };
