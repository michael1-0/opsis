import { AppError } from "../errors/AppError.js";

function notFound(req, res, next) {
  next(new AppError(`Route ${req.originalUrl} not found`, 404));
}

const errorHandler = (error, req, res, next) => {
  void next;

  const statusCode = error instanceof AppError ? error.statusCode : 500;
  const message =
    error instanceof AppError ? error.message : "Internal server error";

  if (statusCode >= 500) {
    console.error("[errorHandler]", {
      method: req.method,
      path: req.originalUrl,
      error,
    });
  }

  res.status(statusCode).json({
    error: message,
  });
};

export { notFound, errorHandler };
