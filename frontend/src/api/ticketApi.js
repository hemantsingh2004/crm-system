import axios from "axios";

const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3000/v1/ticket", {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTliMzk5YmY3NDllYTI2OWFjOGI5OCIsImlhdCI6MTc0MDM5OTcwNiwiZXhwIjoxNzQwNDg2MTA2fQ.lrUbqhWsSjuOkg7xVhieBUCAa8s0i-zdAwH-i4AtOPM",
        },
      });
      if (result) resolve(result);
      reject(new Error("Some Problem Occured in the server"));
    } catch (error) {
      reject(error);
    }
  });
};

export { getAllTickets };
