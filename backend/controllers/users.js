const model = require('../models/users')

function signup(req, res, next) {
    const {f_name, l_name, username, password, passwordMatch } = req.body

    if (!username || !password || !f_name || !l_name || password !== passwordMatch) 
        return next({status: 400, message: 'Signup error'})
    let result = charIsMissing(password)
    
    if(result) return next({status:400, message: result})

    return model.signup(f_name, l_name, username, password)
        .then(([data]) => {
            if (!data) return next({
                status: 500,
                message: 'Something went wrong'
            })
            res.status(201).send({
                message: `Account created for ${data}`
            })
        })
        .catch(next)
}

function getUser(req, res, next){
    return model.getUser(id)
    .then(result => console.log(result))
}

function charIsMissing(password){
    if(password.length < 8) return 'Your password must be 8 characters or longer'
    
    const numbers = ['1','2','3','4','5','6','7','8','9','0']
    const caps =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const special = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','?','/']

    let hasNum = false
    let hasCaps = false
    let hasSpec = false

    for(let char of password){
        if(numbers.includes(char)) hasNum = true
        if(caps.includes(char)) hasCaps = true
        if(special.includes(char)) hasSpec = true
    }

    if (!hasNum) return 'Your password needs a number'
    if (!hasCaps) return 'Your password needs a capital letter'
    if (!hasSpec) return "Please include a special character like '!', '@', or '*'"
    else return false
}



module.exports = {signup, charIsMissing}