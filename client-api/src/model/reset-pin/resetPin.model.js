import resetPinSchema from "./resetPin.schema.js";

const setPasswordResetPin = (email) => {
  const randPin = Math.floor(100000 + Math.random() * 900000);

  const resetObj = {
    email,
    pin: randPin.toString(),
  };

  return new Promise((resolve, reject) => {
    resetPinSchema(resetObj)
      .save()
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export { setPasswordResetPin };
