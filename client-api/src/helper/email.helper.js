import e from "express";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "eden.casper41@ethereal.email",
    pass: "4yr2sSBTUw8WcajGxP",
  },
});

const send = async (info) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await transporter.sendMail(info);
      console.log("Message sent: %s", result.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(result));
      resolve(result);
    } catch (error) {
      console.log("Error from sendMail", error);
      reject(error);
    }
  });
};

const sendMail = async (email, pin) => {
  const info = {
    from: '"eden" <eden.casper41@ethereal.email>',
    to: `${email}`,
    subject: "Password Reset Pin",
    text: `Your password reset pin is ${pin},\n\n This pin is valid for 1 day.`,
    html: `<p>Your password reset pin is <b>${pin}</b>
    </br></br><span>This pin is valid for 1 day.</span></p>`,
  };

  return send(info);
};

export default sendMail;
