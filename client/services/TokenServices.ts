import jwtDecode from "jwt-decode";
import {IDecodedToken} from "../interfaces";

class TokenServices {
    static decodeToken(token: string): IDecodedToken {
        return jwtDecode(token)
    }
}

export default TokenServices