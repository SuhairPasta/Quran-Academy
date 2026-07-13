const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const {
    student_name, email, phone, country, student_age,
    course_interest, preferred_days, preferred_time, notes
  } = req.body;

  if (!student_name || !email) {
    return res.status(400).json({ success: false, message: 'Please provide a valid name and email.' });
  }

  const SMTP_EMAIL = process.env.SMTP_EMAIL;
  const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
  const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || SMTP_EMAIL;

  if (!SMTP_EMAIL || !SMTP_PASSWORD) {
    return res.status(500).json({ success: false, message: 'Server configuration error: Missing email credentials.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  const notesRow = notes ? `
    <tr><td colspan="2" style="padding:12px;background:#f8fafc;border-top:1px solid #e2e8f0;">
      <span style="color:#64748b;font-size:12px;text-transform:uppercase;font-weight:600;">Additional Notes</span>
      <p style="margin:4px 0 0;color:#0f172a;font-size:15px;line-height:1.6;">${notes.replace(/\n/g, '<br>')}</p>
    </td></tr>` : '';

  const mailOptions = {
    from: `"Noor Quran Academy" <${SMTP_EMAIL}>`,
    to: RECIPIENT_EMAIL,
    replyTo: email,
    subject: `🎓 New Enrollment Request from ${student_name} — Noor Quran Academy`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f0fdf4;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;padding:40px 0;">
    <tr><td align="center">
      <table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;">
        <tr>
          <td style="background:linear-gradient(135deg,#064e3b 0%,#065f46 100%);border-radius:16px 16px 0 0;padding:40px 40px 30px;text-align:center;">
            <div style="display:inline-block;width:52px;height:52px;background:linear-gradient(135deg,#f59e0b,#d97706);border-radius:50%;line-height:52px;font-size:26px;color:#064e3b;font-weight:bold;margin-bottom:16px;">ق</div>
            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">Noor Quran Academy</h1>
            <p style="margin:8px 0 0;color:#a7f3d0;font-size:14px;">New Enrollment Request Received</p>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:40px;">
            <div style="background:#fffbeb;border-left:4px solid #f59e0b;border-radius:8px;padding:16px 20px;margin-bottom:32px;">
              <p style="margin:0;color:#92400e;font-size:15px;font-weight:600;">🎓 A new student has applied for enrollment!</p>
            </div>
            <p style="margin:0 0 12px;color:#64748b;font-size:12px;text-transform:uppercase;font-weight:600;">Student Information</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
              <tr>
                <td style="padding:12px 16px;background:#f8fafc;border-bottom:1px solid #e2e8f0;width:50%;">
                  <span style="color:#64748b;font-size:11px;text-transform:uppercase;font-weight:600;">Full Name</span>
                  <p style="margin:4px 0 0;color:#0f172a;font-size:15px;font-weight:600;">${student_name}</p>
                </td>
                <td style="padding:12px 16px;background:#f8fafc;border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0;">
                  <span style="color:#64748b;font-size:11px;text-transform:uppercase;font-weight:600;">Email</span>
                  <p style="margin:4px 0 0;"><a href="mailto:${email}" style="color:#059669;font-size:15px;font-weight:600;text-decoration:none;">${email}</a></p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:#ffffff;border-bottom:1px solid #e2e8f0;">
                  <span style="color:#64748b;font-size:11px;text-transform:uppercase;font-weight:600;">Phone</span>
                  <p style="margin:4px 0 0;color:#0f172a;font-size:15px;">${phone || 'Not provided'}</p>
                </td>
                <td style="padding:12px 16px;background:#ffffff;border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0;">
                  <span style="color:#64748b;font-size:11px;text-transform:uppercase;font-weight:600;">Country</span>
                  <p style="margin:4px 0 0;color:#0f172a;font-size:15px;">${country || 'Not provided'}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:#f8fafc;border-bottom:1px solid #e2e8f0;">
                  <span style="color:#64748b;font-size:11px;text-transform:uppercase;font-weight:600;">Student Age</span>
                  <p style="margin:4px 0 0;color:#0f172a;font-size:15px;">${student_age || 'Not provided'}</p>
                </td>
                <td style="padding:12px 16px;background:#f8fafc;border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0;">
                  <span style="color:#64748b;font-size:11px;text-transform:uppercase;font-weight:600;">Course Interest</span>
                  <p style="margin:4px 0 0;color:#059669;font-size:15px;font-weight:600;">${course_interest || 'Not specified'}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:#ffffff;">
                  <span style="color:#64748b;font-size:11px;text-transform:uppercase;font-weight:600;">Preferred Days</span>
                  <p style="margin:4px 0 0;color:#0f172a;font-size:15px;">${preferred_days || 'Not specified'}</p>
                </td>
                <td style="padding:12px 16px;background:#ffffff;border-left:1px solid #e2e8f0;">
                  <span style="color:#64748b;font-size:11px;text-transform:uppercase;font-weight:600;">Preferred Time</span>
                  <p style="margin:4px 0 0;color:#0f172a;font-size:15px;">${preferred_time || 'Not specified'}</p>
                </td>
              </tr>
              ${notesRow}
            </table>
            <div style="text-align:center;margin:28px 0 0;">
              <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#f59e0b,#d97706);color:#064e3b;text-decoration:none;padding:14px 36px;border-radius:50px;font-size:15px;font-weight:700;">
                📞 Contact ${student_name} Now
              </a>
            </div>
          </td>
        </tr>
        <tr>
          <td style="background:#064e3b;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
            <p style="margin:0;color:#6ee7b7;font-size:13px;">© ${new Date().getFullYear()} Noor Quran Academy — All rights reserved</p>
            <p style="margin:6px 0 0;color:#34d399;font-size:12px;">This email was sent via your website enrollment form</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Enrollment submitted successfully.' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return res.status(500).json({ success: false, message: 'Could not send email.', error: error.message });
  }
};
