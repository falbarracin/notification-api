import { INotificador } from "../interfazNotificadores/INotificador";

export class SmsNotificador implements INotificador {
  async enviar(destinatario: string, mensaje: string): Promise<void> {
    console.log(
      `[SMS] Enviando SMS a ${destinatario}: ${mensaje}`
    );
  }
}