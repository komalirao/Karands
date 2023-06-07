import sgMail from "@sendgrid/mail";

export const sendOtp = async (email, otp) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: "your-email@example.com",
    subject: "OTP Verification",
    text: `Your OTP is ${otp}`,
    html: `<p>Your OTP is <strong>${otp}</strong></p>`,
  };
  await sgMail.send(msg);
};