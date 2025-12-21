import express from "express";
const router = express.Router();

router.post("/webhook", (req, res) => {
  // Verificación de Notion (challenge)
  if (req.body?.challenge) {
    return res.status(200).json({
      challenge: req.body.challenge
    });
  }

  console.log("Evento Notion recibido:", req.body);
  res.sendStatus(200);
});

export default router;