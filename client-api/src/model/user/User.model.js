import UserModel from "./User.schema.js";

export const insertUser = (user) => {
  return new Promise((resolve, reject) => {
    UserModel(user)
      .save()
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
