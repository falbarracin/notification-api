import { Router } from "express";
import { ServicioDeAlertas } from "../servicios/ServicioDeAlertas";
import { createNotificador } from "../config/notifier.factory";

const router = Router();

router.post("/alerta", async (req, res) => {
  const { destinatario, mensaje } = req.body;

  const notificador = createNotificador();
  const servicio = new ServicioDeAlertas(notificador);

  await servicio.enviarAlerta(destinatario, mensaje);

  res.json({ message: "Alerta enviada correctamente" });
});

export default router;