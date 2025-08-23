export default async function handler(req, res) {
  const { user, prompt, response } = req.body;

  // You can later replace this with Firebase or Supabase
  console.log("[LOG] Saving task", { user, prompt, response });

  res.status(200).json({ status: 'saved', timestamp: Date.now() });
}
Create save-task.ts (Auraa.i memory logger)
