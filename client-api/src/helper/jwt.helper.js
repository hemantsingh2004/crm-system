import jwt from "jsonwebtoken";

const createAccessJWT = (payload) => {
  const accessJWT = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "1h",
  });

  return Promise.resolve(accessJWT);
};

const createRefreshJWT = (payload) => {
  const refreshJWT = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });

  return Promise.resolve(refreshJWT);
};

export { createAccessJWT, createRefreshJWT };
