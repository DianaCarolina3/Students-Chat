const statusMessages = {
  200: "Done",
  201: "Created",
  400: "Invalid format",
  500: "Internal error",
};

exports.sucess = (req, res, message, status) => {
  let statusCode = status;
  let statusMessage = message;

  if (!status) {
    status = 200;
  }
  if (!message) {
    statusMessage = statusMessages[status];
  }

  res.status(statusCode).send({
    error: false,
    status: statusCode,
    body: statusMessage,
  });
};

exports.error = (req, res, message, status, details) => {
  let statusCode = status;
  let statusMessage = message;

  if (!status) {
    status = 500;
  }
  if (!message) {
    statusMessage = statusMessages[status];
  }

  console.log(`[response error]: ${details}`);

  res.status(statusCode).send({
    error: statusMessage,
    status: statusCode,
    body: false,
  });
};
