import jwt from "jsonwebtoken";
import { setJWT, getJWT } from "./redis.helper.js";
import { storeUserRefreshJWT } from "../model/user/User.model.js";

const createAccessJWT = async (payload) => {
  try {
    const accessJWT = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "1h",
    });

    await setJWT(accessJWT, payload.id);

    return Promise.resolve(accessJWT);
  } catch (err) {
    return Promise.reject(err);
  }
};

const createRefreshJWT = async (payload) => {
  try {
    const refreshJWT = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "7d",
    });

    await storeUserRefreshJWT(payload.id, refreshJWT);
    return Promise.resolve(refreshJWT);
  } catch (error) {
    return Promise.reject(error);
  }
};

const verifyAccessJWT = (token) => {
  try {
    const result = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    return Promise.resolve(result);
  } catch (error) {
    return Promise.reject(error);
  }
};

const verifyRefreshJWT = (token) => {
  try {
    const result = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    return Promise.resolve(result);
  } catch (error) {
    return Promise.reject(error);
  }
};

export { createAccessJWT, createRefreshJWT, verifyAccessJWT, verifyRefreshJWT };
