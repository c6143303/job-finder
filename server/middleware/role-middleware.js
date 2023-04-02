const tokenService = require("../service/token-service");
const ApiError = require("../error/ApiError");
module.exports = function roleMiddleware(roles) {

    return async function (req, res, next) {
        const token = req.headers.authorization?.split(' ')[1]

        const verifyToken = await tokenService.verifyAccessToken(token)
        const {role} = verifyToken

        const isAccess = roles.includes(role)
        if (!isAccess) return next(ApiError.badRequest('no access'))
        next()
    }
}