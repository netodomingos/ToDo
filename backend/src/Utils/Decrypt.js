const crypto = require('crypto')

const secret = 'aabbcccdddaabbcccdddaabbcccdddaa'

module.exports = function decrypt(text){
    const [ iv, encrypted ] = text.split(':')
    const ivBuffer = Buffer.from(iv, 'hex')
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from('aabbcccdddaabbcccdddaabbcccdddaa'), ivBuffer)

    let content = decipher.update(Buffer.from(encrypted, 'hex'))

    content = Buffer.concat([ content, decipher.final()])

    return content.toString()
}