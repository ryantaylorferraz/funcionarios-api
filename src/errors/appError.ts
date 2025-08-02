type AppError = {
  statusCode: number;
  message: string;
  stack?: string;
  name: string;
};

export const createAppError = (statusCode: number, message: string): AppError => {
  const err: AppError = {
    statusCode,
    message,
    name: "AppError",
  };

  //.. stacktrace = rastro de onde e como o erro foi criado no código;

  if (Error.captureStackTrace) {
    const tmp = new Error(message);
    Error.captureStackTrace(tmp, createAppError);
    err.stack = tmp.stack;
  }

  return err;
};
