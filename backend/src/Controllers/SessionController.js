const User = require('../Models/User')

const Decrypt = require('../Utils/Decrypt')

module.exports = {
    async login(req, res) {

        const { password, email } = req.body
        
        const currentUser = await User.findOne({ email })

        if(!currentUser){
            return res.status(403).json({
                message: "Email not Exists"
            })

        } else {
            const passwordUser = currentUser.password

            const decryptedPassword = Decrypt(passwordUser)
            
            if(decryptedPassword === password){
                return res.status(200).json({ user: currentUser.token })
            }
        }  
    }
}

