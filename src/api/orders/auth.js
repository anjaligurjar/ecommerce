const jwt = require('jsonwebtoken')
const SECREATEKEY="ABCDEFGHIJKLM"
exports.verifyToken = (req, res, next) => {
    const auth = req.auth()
    console.log(auth)
    if (auth.schema1 == bearer) {
        return res.send('not successfull')
    }
    jwt.verify(auth.token, SECREATEKEY, (error, data) => {
        if (error) {
            return res.send(" invalid")
        }
        req.auth.user = user.data
next();

    })

    exports.jetverify = (cb, user) => {
        jwt.sign({ user }, SECREATEKEY, { expiresIn: '3000s' }, cb)

    }
    exports.extractToken = (res, req, next) => {
        const bearer = req.headers["authrizaion"]
        const auth = bearer.split(" ")
        req.auth = {
            schema: auth.schema[0],
            token: auth.token[1]
        }

        if (!req.auth.token) {
            res.send(400).json('authentictio failed')
        }
        else {
            next();
        }
    }
exports.verifytokenauth=(req,res,next)=>{
    verifytokenauth(res,res,()=>{
        if(req.user.id==req.param.id|| req.user.isAdmin){
            res.send()
        }
        else{
            next()
        }

    })
}
}
exports. verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });


}