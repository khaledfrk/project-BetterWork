const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendPassword = (email,password) => {
    sgMail.send({
        to: email,
        from: 'ayyoub.benhocine@gmail.com',
        subject: 'BetterWork',
        text: `your password : ${password}`
    })
}
module.exports = {
    sendPassword
}