import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { student_name, email, notes } = req.body;

  if (!student_name || !email || !notes) {
    return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
  }

  // Use Environment Variables for security (Configured in Vercel Dashboard)
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

  const mailOptions = {
    from: `"Noor Quran Academy" <${SMTP_EMAIL}>`,
    to: RECIPIENT_EMAIL,
    replyTo: email,
    subject: `📩 New Contact Message from ${student_name} — Noor Quran Academy`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#f0fdf4;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background:linear-gradient(135deg,#064e3b 0%,#065f46 100%);border-radius:16px 16px 0 0;padding:40px 40px 30px;text-align:center;">
              <div style="display:inline-block;width:52px;height:52px;background:linear-gradient(135deg,#f59e0b,#d97706);border-radius:50%;line-height:52px;font-size:26px;color:#064e3b;font-weight:bold;margin-bottom:16px;">ق</div>
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">Noor Quran Academy</h1>
              <p style="margin:8px 0 0;color:#a7f3d0;font-size:14px;">You have received a new contact message</p>
            </td>
          </tr>
          <tr>
            <td style="background:#ffffff;padding:40px;">
              <div style="background:#ecfdf5;border-left:4px solid #059669;border-radius:8px;padding:16px 20px;margin-bottom:32px;">
                <p style="margin:0;color:#065f46;font-size:15px;font-weight:600;">📩 New message from your website contact form</p>
              </div>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:12px;background:#f8fafc;border-radius:8px 8px 0 0;border-bottom:1px solid #e2e8f0;">
                    <span style="color:#64748b;font-size:12px;text-transform:uppercase;font-weight:600;">Sender Name</span>
                    <p style="margin:4px 0 0;color:#0f172a;font-size:16px;font-weight:600;">${student_name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px;background:#f8fafc;border-radius:0 0 8px 8px;">
                    <span style="color:#64748b;font-size:12px;text-transform:uppercase;font-weight:600;">Email Address</span>
                    <p style="margin:4px 0 0;"><a href="mailto:${email}" style="color:#059669;font-size:16px;font-weight:600;text-decoration:none;">${email}</a></p>
                  </td>
                </tr>
              </table>
              <div style="margin-bottom:28px;">
                <p style="margin:0 0 10px;color:#64748b;font-size:12px;text-transform:uppercase;font-weight:600;">Message</p>
                <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:20px;color:#334155;font-size:15px;line-height:1.7;">
                  ${notes.replace(/\n/g, '<br>')}
                </div>
              </div>
              <div style="text-align:center;margin:32px 0 0;">
                <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#065f46,#064e3b);color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:50px;font-size:15px;font-weight:700;">
                  ↩ Reply to ${student_name}
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background:#064e3b;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
              <p style="margin:0;color:#6ee7b7;font-size:13px;">© ${new Date().getFullYear()} Noor Quran Academy — All rights reserved</p>
              <p style="margin:6px 0 0;color:#34d399;font-size:12px;">This email was sent via your website contact form</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return res.status(500).json({ success: false, message: 'Could not send email.', error: error.message });
  }
}
