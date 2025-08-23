export default async function handler(req, res) {
  const { prompt, user } = req.body;

  if (!prompt) return res.status(400).json({ error: 'Prompt required' });

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || 'No response';

  await fetch('/api/save-task', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, response: reply, user }),
  });

  res.status(200).json({ result: reply });
}
Finalize agent.ts endpoint
