import { verifyAccessJWT } from "../helper/jwt.helper.js";
import { getJWT } from "../helper/redis.helper.js";

const userAuthorization = async (req, res, next) => {
  const { authorization } = req.headers;

  const decoded = await verifyAccessJWT(authorization);
  console.log(decoded);
  if (decoded.id) {
    const userId = await getJWT(authorization);
    if (!userId) {
      return res.status(403).json({ message: "Forbidden" });
    }

    req.userId = userId;

    return next();
  }
  return res.status(403).json({ message: "Forbidden" });
};

export { userAuthorization };
