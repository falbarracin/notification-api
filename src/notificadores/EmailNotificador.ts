import { INotificador } from "../interfazNotificadores/INotificador";

export class EmailNotificador implements INotificador {
  async enviar(destinatario: string, mensaje: string): Promise<void> {
    console.log(
      `[EMAIL] Enviando email a ${destinatario}: ${mensaje}`
    );
  }
}