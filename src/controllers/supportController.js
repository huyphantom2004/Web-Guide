// supportController.js
const nodemailer = require('nodemailer');

// Cấu hình Nodemailer với Gmail (có thể thay đổi nếu cần)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'huyphantom2004@gmail.com',
      pass: '#',
  },
});

// Controller để gửi email
exports.support = (req, res) => {
  const { message } = req.body;  // Nhận thông điệp từ client

  const mailOptions = {
    from: 'huyphantom2004@gmail.com',
    to: 'huyphantom2004@gmail.com',  // Địa chỉ email nhận
    subject: 'Câu hỏi từ người dùng',
    text: message  // Nội dung của email
  };
1
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Có lỗi khi gửi email!');
    }
    res.status(200).send('Email đã được gửi!');
  });
};
