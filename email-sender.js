var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'manssourisana3@gmail.com',
    pass: 'mypassword'
  }
});

var mailOptions = {
  from: 'manssourisana3@gmail.com',
  to: 'mansoursana191@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});