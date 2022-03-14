const nodemailer = require("nodemailer");
const Mailer = (mailType='text', mail, to) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.FSS_EMAIL,
      pass: process.env.FSS_PASSWORD,
    },
  });

  console.log(process.env.FSS_EMAIL,process.env.FSS_PASSWORD);

  const mailOptions = {
    from: process.env.FSS_EMAIL,
    to,
    subject: "Sending Email using Node.js",
    [mailType]: mail,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    const status = error ? error : info;
    console.log(status);
  });
};

module.exports = Mailer