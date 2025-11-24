import nodemailer from 'nodemailer'

function validateEmail(e){
  return typeof e === 'string' && /\S+@\S+\.\S+/.test(e)
}

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})

  const { name, email, message } = req.body || {}
  if(!name || !email || !message) return res.status(400).json({error:'Missing fields'})
  if(!validateEmail(email)) return res.status(400).json({error:'Invalid email'})

  const to = process.env.RECEIVER_EMAIL || 'miyurilokuhewage15@gmail.com'
  if(!process.env.RECEIVER_EMAIL){
    console.warn('RECEIVER_EMAIL not set — falling back to miyurilokuhewage15@gmail.com')
  }

  // Nodemailer using SMTP
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const secure = (process.env.SECURE === 'true' || port === 465)

  if(!host || !user || !pass){
    console.error('Missing SMTP environment variables')
    return res.status(500).json({error:'SMTP not configured'})
  }

  try{
    const transporter = nodemailer.createTransport({
      host, port, secure,
      auth: { user, pass }
    })

    const mail = {
      // Use the authenticated SMTP user as the From address to avoid provider rejections
      from: process.env.SMTP_USER || `no-reply@portfolio.local`,
      replyTo: `${name} <${email}>`,
      to,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`
    }

    await transporter.sendMail(mail)
    return res.status(200).json({ok:true, provider:'smtp'})
  }catch(err){
    console.error('Error sending mail', err)
    return res.status(500).json({error:'Failed to send email'})
  }
}
