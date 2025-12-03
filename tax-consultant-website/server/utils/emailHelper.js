const nodemailer = require('nodemailer');

const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

const sendEmail = async (mailOptions) => {
  try {
    const transporter = createTransporter();
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send email');
  }
};

const formatContactEmail = (data) => {
  const { name, email, phone, service, message } = data;
  
  return {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
    subject: `New Contact Form Submission - ${service}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };
};

// Send contact form email
const sendContactFormEmail = async (data) => {
  const { name, email, phone, service, message } = data;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'info@rastogiassociates.com',
    subject: 'New Contact Form Submission',
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };

  await createTransporter().sendMail(mailOptions);
};

// Send appointment confirmation email
const sendAppointmentConfirmation = async (data) => {
  const { to, name, date, time, service, type, isAdmin = false } = data;

  const clientTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0047AB;">Appointment Confirmation</h2>
      <p>Dear ${name},</p>
      <p>Your appointment has been successfully scheduled with Rastogi & Associates.</p>
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #0047AB; margin-top: 0;">Appointment Details:</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Type:</strong> In-person Consultation</p>
        <p><strong>Location:</strong> Delhi Office</p>
      </div>
      <p>If you need to reschedule or cancel your appointment, please contact us at:</p>
      <p>Phone: +91 9927848855</p>
      <p>Email: info@rastogiassociates.com</p>
      <p>Thank you for choosing Rastogi & Associates. We look forward to meeting you.</p>
    </div>
  `;

  const adminTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0047AB;">New Appointment Scheduled</h2>
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #0047AB; margin-top: 0;">Appointment Details:</h3>
        <p><strong>Client Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${to}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Type:</strong> In-person Consultation</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: isAdmin ? 'New Appointment Scheduled' : 'Appointment Confirmation - Rastogi & Associates',
    html: isAdmin ? adminTemplate : clientTemplate
  };

  await createTransporter().sendMail(mailOptions);
};

module.exports = {
  sendEmail,
  formatContactEmail,
  sendContactFormEmail,
  sendAppointmentConfirmation
};
