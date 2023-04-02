const httpStatusCodes = require("./httpStatusCodes");

class ApiError extends Error{
    status: string
    message: string
    constructor(status, message) {
        super()
        this.status = status;
        this.message = message;
    }

    static badRequest(message) {
        return new ApiError(httpStatusCodes.BAD_REQUEST, message)
    }

    static notFound(message) {
        return new ApiError(httpStatusCodes.NOT_FOUND, message)
    }

    static Unauthorized(message) {
        return new ApiError(httpStatusCodes.UNAUTHORIZED, message)
    }
}

export default ApiError