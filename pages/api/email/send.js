const sgMail = require('@sendgrid/mail')

export default function handler(req, res) {
  const { from, name, message } = req.body

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'teogoulois@gmail.com', // Change to your recipient
    from: 'teo.goulois.dev@gmail.com', // Change to your verified sender
    subject: `from ${from}, name ${name}`,
    text: `message: ${message}`,
    html: `<strong>and easy to do anywhere, even with Node.js</strong><p>message: ${message}</p>`
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch(error => {
      console.error(error)
      res.status(500).send({ error: error })
    })
  res.status(200).json({ from, name, message })
}
