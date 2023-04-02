import * as jwt from 'jsonwebtoken'
import {IToken} from "../interface";

export class TokenService {
    static generateJwt(id, email) {
        return jwt.sign({
            companyId: id,
            email: email
        }, process.env.SECRET_TOKEN, {expiresIn: 60 * 60 * 60})
    }

    static async decodeToken(token: string): Promise<IToken> {

        const isVerified = await jwt.verify(token, process.env.SECRET_TOKEN)

        return isVerified
    }
}

