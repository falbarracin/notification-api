export interface INotificador {
  ///Método que envia notificacion al destinatario con el mensaje correspondiente
  enviar(destinatario: string, mensaje: string): Promise<void>;
}