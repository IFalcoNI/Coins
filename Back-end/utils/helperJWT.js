const jwt = require('jsonwebtoken')

function authToken(req, res, next) {
    // console.log(req.body.headers);
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.json({ error: err })
        }
        req.user = user
        // console.log(user);
        next()
    })
    // console.log(token);
}
function generateToken(user) {
    console.log(user);
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })

}
function generateRefreshToken(user) {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' })
}

module.exports = { authToken, generateToken, generateRefreshToken }