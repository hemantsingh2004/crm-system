import UserModel from "./User.schema.js";

export const insertUser = (user) => {
  return new Promise((resolve, reject) => {
    UserModel(user)
      .save()
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export const getUserByEmail = async (email) => {
  if (!email) return false;
  try {
    const data = await UserModel.findOne({ email }).exec();
    return data;
  } catch (error) {
    throw error;
  }
};
