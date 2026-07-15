import sendEmail from "../config/email.config.js";
export const SendOTPEmail = async (email, newOTP) => {
  try {
    const subject = "Your OTP for Cravings";

    const message = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <title>Cravings OTP</title>
  </head>

  <body style="margin:0; padding:0; background:#f4f4f4; font-family:Arial, Helvetica, sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4; padding:40px 0;">
      <tr>
        <td align="center">

          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,.1);">

            <!-- Header -->
            <tr>
              <td align="center" style="background:#ff5722; padding:30px;">
                <h1 style="margin:0; color:#ffffff;">
                  🍔 Cravings
                </h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:40px; color:#333333;">

                <h2 style="margin-top:0;">
                  OTP Verification
                </h2>

                <p style="font-size:16px; line-height:26px;">
                  Hello,
                </p>

                <p style="font-size:16px; line-height:26px;">
                  We received a request to verify your account or reset your password.
                  Please use the OTP below to continue.
                </p>

                <div style="margin:35px 0; text-align:center;">
                  <span style="
                    display:inline-block;
                    background:#ff5722;
                    color:#ffffff;
                    padding:18px 35px;
                    font-size:32px;
                    font-weight:bold;
                    letter-spacing:8px;
                    border-radius:10px;
                  ">
                    ${newOTP}
                  </span>
                </div>

                <p style="font-size:15px;">
                  ⏳ This OTP is valid for <b>5 minutes</b>.
                </p>

                <p style="font-size:15px; color:#777777;">
                  Do not share this OTP with anyone. Our team will never ask you for your OTP.
                </p>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="background:#f8f8f8; padding:20px; color:#777777; font-size:13px;">
                © 2026 Cravings. All Rights Reserved.
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
    await sendEmail(email, subject, message);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
