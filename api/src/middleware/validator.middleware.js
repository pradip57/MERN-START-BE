const bodyValidator = (schema) => {
  return async (req, res, next) => {
    try {
      const data = req.body;
      await schema.validateAsync(data, { abortEarly: false });
      next();
    } catch (exception) {
      const errors = {};
      exception.details.map((value, index) => {
        errors[value.context.key] = value.message;
      });
      next({
        status_code: 400,
        data: errors,
        message: "Validation Failed",
        status: "VALIDATION_FAILED",
      });
    }
  };
};

module.exports = { bodyValidator };
