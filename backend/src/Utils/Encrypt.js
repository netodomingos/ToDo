const crypto = require('crypto')
const secret = 'aabbcccdddaabbcccdddaabbcccdddaa'

module.exports = function encrypt(text){
    const iv = Buffer.from(crypto.randomBytes(16))
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secret), iv)

    let encrypted = cipher.update(text)

    encrypted = Buffer.concat([encrypted, cipher.final()])

    return `${iv.toString('hex')}:${encrypted.toString('hex')}`
}