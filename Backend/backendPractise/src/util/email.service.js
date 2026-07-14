import sendEmail from "../config/email.config.js";

export const SendOTPEmail = async (email, newOTP) => {
  const subject = "🔐 Your Cravings OTP Verification Code";

  const message = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cravings OTP</title>
</head>

<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;background:#f5f5f5;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0"
style="max-width:600px;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 8px 25px rgba(0,0,0,.08);">

<!-- Header -->
<tr>
<td align="center" style="background:linear-gradient(135deg,#ff6b35,#ff914d);padding:35px;">

<h1 style="margin:0;color:white;font-size:34px;">
🍔 Cravings
</h1>

<p style="margin-top:12px;color:#fff3ed;font-size:16px;">
Fresh Food • Fast Delivery • Great Taste
</p>

</td>
</tr>

<!-- Body -->
<tr>
<td style="padding:45px;">

<h2 style="margin-top:0;color:#222;font-size:28px;">
OTP Verification
</h2>

<p style="font-size:16px;color:#555;line-height:28px;">
Hello,
</p>

<p style="font-size:16px;color:#555;line-height:28px;">
We received a request to verify your account.
Please use the OTP below to continue.
</p>

<!-- OTP Box -->
<div style="text-align:center;margin:40px 0;">

<div style="display:inline-block;
background:#fff4ef;
border:2px dashed #ff6b35;
padding:20px 40px;
border-radius:14px;">

<span style="
font-size:42px;
font-weight:bold;
color:#ff6b35;
letter-spacing:10px;">
${newOTP}
</span>

</div>

</div>

<p style="font-size:16px;color:#555;line-height:28px;">
⏳ This OTP is valid for <strong>5 minutes</strong>.
</p>

<p style="font-size:16px;color:#555;line-height:28px;">
🔒 Never share this OTP with anyone. Our team will never ask for your verification code.
</p>

<p style="font-size:16px;color:#555;line-height:28px;">
If you didn't request this OTP, you can safely ignore this email.
</p>

</td>
</tr>

<!-- Footer -->
<tr>
<td align="center"
style="background:#fafafa;padding:30px;border-top:1px solid #eeeeee;">

<p style="margin:0;font-size:18px;color:#444;">
Thank you for choosing ❤️ <strong>Cravings</strong>
</p>

<p style="margin-top:12px;font-size:14px;color:#777;">
Fresh Food • Fast Delivery • Great Taste
</p>

<p style="margin-top:18px;font-size:12px;color:#999;">
© 2026 Cravings. All Rights Reserved.
</p>

<p style="margin-top:5px;font-size:12px;color:#999;">
This is an automated email. Please do not reply.
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
  `;

  await sendEmail(email,subject,message);

};