const { json } = require('express');
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization
    console.log(token)
    let TokenAuth = token.split(" ")

    if ( TokenAuth[0].toLowerCase() !== 'bearer' ) {
        res.status(400).send({ message: 'Invalid Token Type' })
    } else {
        jwt.verify(TokenAuth[1], process.env.SecretKey, async function( err, resultToken ) {
          if (err) res.status(401).send({ message: 'Unauthorized !' })
          console.log(resultToken)
            if ( resultToken.role == 'user' ) {
              res.json({
                message: 'gagal'
              })
            }
        })
    }
};

const loginAuth = (req, res, next) => {
  const cookie = req.headers.cookie
  console.log(cookie)
  if (cookie === undefined) {
    return next()
  } else {
    let splitCookie = cookie.split('=')
    let dataCookie = JSON.parse(splitCookie[1])
    console.log(dataCookie)
    if (dataCookie.role === "admin") {
      res.redirect('/super-user')
    } else {
      res.redirect('/')
    }
  }
}

const registerNext = (req, res, next) => {
  res.redirect('/login')
}
    
module.exports = { verifyToken, loginAuth, registerNext }