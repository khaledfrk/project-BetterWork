const sgmail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgmail.setApiKey(sendgridAPIKey)

const sendCode = (email,code) => {
    console.log(email, code)
    sgmail.send({
        to: email,
        from: 'ayyoub.benhocine@gmail.com',
        subject: 'forgot password',
        text: ` code: ${code}`
    })
}
module.exports = {
    sendCode
}