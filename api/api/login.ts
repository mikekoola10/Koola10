export default async function handler(req, res) {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email required' });

  // Simple token (base64-encoded email)
  const token = Buffer.from(email).toString('base64');
  res.status(200).json({ token });
}
Create login.ts
