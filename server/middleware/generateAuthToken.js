const jwt = require('jsonwebtoken')
const config = process.env
module.exports = ( username ) => {
    let token;
    return token = jwt.sign({
        username: username
    }, config.SECRET_TOKEN, {expiresIn: '1h'})
}