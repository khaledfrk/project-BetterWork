const sgMail = require('@sendgrid/mail')

sgMail.setApiKey('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')

const contactUsEmail = (email,text) => {
    sgMail.send({
        to: email,
        from: 'k.dadouahadria@esi-sba.dz',
        subject: 'BetterWork',
        text: `=${text}`
    })
}
module.exports = {
    contactUsEmail
}

contactUsEmail('k.dadouahadria@esi-sba.dz','hello')