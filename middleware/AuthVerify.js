let jwt = require('jsonwebtoken');
module.exports = (req,res,next) => {
    let Token = req.headers['token'];
    jwt.verify(Token, "ThisIsNotSecret", function (err,docoded){
        if (err){
            console.log(Token);
            res.status(401).json({status:"unauthorized"})
        }else {
            let email = docoded['data'];
            console.log(email);
            req.headers.email = email;
            next();
        }
    })
}