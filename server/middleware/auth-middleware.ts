import {TokenService} from "../service/TokenService";
import ApiError from "../error/ApiError";
import {IToken} from "../interface";
async function authMiddleware (req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1]

        console.log(req.headers.authorization)
        if (!token) return next(ApiError.Unauthorized('token is not defined'))

        const verifyToken = await TokenService.decodeToken(token)
        if (!verifyToken) return next(ApiError.Unauthorized('wrong token'))

        req.token = TokenService.generateJwt(verifyToken.companyId, verifyToken.email)
        next()
    } catch (e) {
        next(ApiError.Unauthorized(e.message))
    }
}

export default authMiddleware