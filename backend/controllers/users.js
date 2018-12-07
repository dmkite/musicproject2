const model = require('../models/users')

function signup(req, res, next) {
    console.log(req.body)
    const {f_name, l_name, username, password, passwordMatch } = req.body

    if (!email || !password || !first_name || !last_name || password !== passwordMatch) 
        return next({status: 400, message: 'Signup error'})

    return model.signup(username, password, f_name, l_name)
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


module.exports = {signup}