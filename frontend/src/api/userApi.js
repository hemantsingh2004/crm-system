import axios from "axios";

const loginApi = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/v1/user/login",
        formData
      );
      if (response) {
        sessionStorage.setItem("accessToken", response.data.accessJWT);
        localStorage.setItem(
          "crm-system",
          JSON.stringify({ refreshJWT: response.data.refreshJWT })
        );
        return resolve(response);
      }
      reject(new Error("Some Problem Occured in the server"));
    } catch (error) {
      reject(error);
    }
  });
};

const logoutApi = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        "http://localhost:3000/v1/user/logout",
        {
          headers: {
            authorization: sessionStorage.getItem("accessToken"),
          },
        }
      );
      if (response) {
        sessionStorage.removeItem("accessToken");
        localStorage.removeItem("crm-system");
        resolve(true);
      }
      reject(false);
    } catch (error) {
      reject(error);
    }
  });
};

export { loginApi, logoutApi };
