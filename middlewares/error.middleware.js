const ENV_KEYS = require("../environment");
const AppError = require("../utils/appError");

const devErrorHandler = (error, res) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Something went wrong";
  const status = error.status || "error";
  const stack = error.stack;
  res.status(statusCode).json({
    status,
    message,
    stack,
  });
};

const prodErrorhandler = (error, res) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Something went wrong";
  const status = error.status || "error";
  if (error.isOperational) {
    return res.status(statusCode).json({
      status,
      message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Something went wrong",
  });
};

const globalErrorHandler = (err, req, res, next) => {
  if (err.name === "SequelizeValidationError") {
    err = new AppError(err.errors[0].message, 400);
  }
  if (err.name === "SequelizeUniqueConstraintError") {
    err = new AppError(err.errors[0].message, 400);
  }
  if (ENV_KEYS.NODE_ENV === "development") {
    return devErrorHandler(err, res);
  }

  return prodErrorhandler(err, res);
};

module.exports = globalErrorHandler;
