import { EmailNotificador } from "../notificadores/EmailNotificador";
import { SmsNotificador } from "../notificadores/SmsNotificador";
import { INotificador } from "../interfazNotificadores/INotificador";

export function createNotificador(): INotificador {
  const canal = process.env.NOTIFICATION_CHANNEL || "email";

  if (canal === "sms") {
    return new SmsNotificador();
  }

  return new EmailNotificador(); 
}