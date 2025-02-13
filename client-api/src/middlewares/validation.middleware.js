import joi from "joi";

const validator = (schema) => (params) =>
  schema.validate(params, { abortEarly: false });

const email = joi.string().email().required();
const password = joi.string().min(8).required();
const pin = joi.string().min(6).max(6).required();

const resetPassReqValidation = (req, res, next) => {
  const schema = joi.object({
    email,
  });
  const { error } = validator(schema)(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

const resetPassValidation = (req, res, next) => {
  const schema = joi.object({
    email,
    pin,
    newPassword: password,
  });
  const { error } = validator(schema)(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

export { resetPassReqValidation, resetPassValidation };
