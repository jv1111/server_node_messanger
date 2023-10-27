const throwError = (message, statusCode) => {
    const error = new Error(message);
    error.status = statusCode;
    throw error;
}

const errorHandler = (err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error'
    });
};

module.exports = {
    throwError,
    errorHandler
}