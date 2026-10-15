class HttpError extends Error {
  constructor(msg, errorCode) {
    super(msg); // add a "message" property
    this.code = errorCode; // add a "code" property
  }
}

module.exports = HttpError;
