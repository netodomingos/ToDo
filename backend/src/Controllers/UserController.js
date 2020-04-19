const User = require('../Models/User')

const generateTokenAccess = require('../Utils/generateTokenAccess')
const Encrypt = require('../Utils/Encrypt')

module.exports = {
    async store(req, res){
        const { name, email, password, repeat } = req.body

        if(password === repeat){
           
            const token = generateTokenAccess()
            
            const hashPassword = Encrypt(password)

            const user = await User.create({
                token,
                name,
                email,
                password: hashPassword
            })
            return res.json(user)

        } else {
            return res.status(422).json({
                message: "Form Validation Error"
            })
        }
    }
}