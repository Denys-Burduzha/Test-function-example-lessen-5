

const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async(data) => {
    const email = {...data, from: "burduzhad@gmail.com"};
    try {
        await sgMail.send(email)
        return true;
        // .then(() => console.log("Email send success"))
        // .catch(error => console.log(error.message))
    } catch  {
        throw error;
    }
}

// const email = {
//     to: "tikij39166@cyclesat.com",
//     from: "burduzhad@gmail.com",
//     subject: "Нова заявка з сайту",
//     html: "<p>З сайту прийшла заявка!</p>",
// };

// sgMail.send(email)
//     .then(() => console.log("Email send success"))
//     .catch(error => console.log(error.message))

module.exports = sendEmail