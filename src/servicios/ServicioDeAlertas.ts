import { INotificador } from "../interfazNotificadores/INotificador";

export class ServicioDeAlertas {
  constructor(private notificador: INotificador) {}

  async enviarAlerta(destinatario: string, mensaje: string): Promise<void> {
    await this.notificador.enviar(destinatario, mensaje);
  }
}