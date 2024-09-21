const Joi = require("joi");
const emailSchema = Joi.string().email().required();

const registerDTO = Joi.object({
  name: Joi.string().min(2).max(40).required(),
  email: emailSchema,
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.string().equal(Joi.ref("password")).required().messages({
    "any.only":"Password and confirm password must be same"
  }),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  role: Joi.string()
    .regex(/^(customer|seller|admin)$/)
    .required(),
});

const loginDTO = Joi.object({
  email: emailSchema,
  password: Joi.string().min(8).required(),
});

module.exports = { registerDTO, loginDTO };
