const jwt = require('jsonwebtoken');

const SECRET = 'MY_SECRET';

exports.verifyToken = (req, res, next) => {
    const auth = req.auth;
    console.log(auth)
    if (auth.scheme !== 'Bearer') {
        return res.send('Invalid scheme provided');
    }
    jwt.verify(auth.token, SECRET, (error, data) => {
        if (error) {
            return res.send('Invalid Token');
        }
        req.auth.user = data.user;
        next()
    });
}

exports.jetToken = (user, cb) => {
    jwt.sign({ user }, SECRET, { expiresIn: '3000s' }, cb);
};

exports.extractToken = (req, res, next) => {
    const bearer = req.headers["authorization"]; // Bearer jhskjdhkjshbkvsfv
    const auth = bearer.split(" ");
    req.auth = {
        scheme: auth[0],
        token: auth[1],
    };
    if (!req.auth.token) {
        res.send("access dennied")
    } else {
        next();
    }
}  
// // exports.verifytokenauth=(req,res,next)=>{
// //     verifytokenauth(res,res,()=>{
// //         if(req.user.id==req.param.id|| req.user.isAdmin){
// //             res.send()
// //         }
// //         else{
// //             next()
// //         }

// //     })
// }
// }
// exports. verifyTokenAndAdmin = (req, res, next) => {
//     verifyToken(req, res, () => {
//       if (req.user.isAdmin) {
//         next();
//       } else {
//         res.status(403).json("You are not alowed to do that!");
//       }
//     });














