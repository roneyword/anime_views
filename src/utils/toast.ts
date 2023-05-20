import EventManager from '../lib/EventManager';

interface ToastProps {
  type: string;
  text: string;
  duration: number;
}

export const toastEventManager = new EventManager();

export default function toast({type, text, duration = 5000}: ToastProps) {
  toastEventManager.emit('addtoast', {type, text, duration});
}