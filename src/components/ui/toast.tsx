// src/components/ui/toast.tsx
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import { CheckCircleIcon, XCircleIcon, AlertTriangleIcon, InfoIcon, BellIcon, StarIcon } from 'lucide-react';

interface ToastProps {
  message: string;
  variant?: 'success' | 'error' | 'warning' | 'info' | 'notification' | 'favorite';
  duration?: number;
  onClose: () => void;
}

const variantStyles = {
  success: 'bg-green-500 text-white',
  error: 'bg-red-500 text-white',
  warning: 'bg-yellow-500 text-black',
  info: 'bg-blue-500 text-white',
  notification: 'bg-purple-500 text-white',
  favorite: 'bg-pink-500 text-white',
};

const variantIcons = {
  success: <CheckCircleIcon className="mr-2" />,
  error: <XCircleIcon className="mr-2" />,
  warning: <AlertTriangleIcon className="mr-2" />,
  info: <InfoIcon className="mr-2" />,
  notification: <BellIcon className="mr-2" />,
  favorite: <StarIcon className="mr-2" />,
};

const Toast = ({ message, variant = 'info', duration = 3000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return createPortal(
    <div className={cn('fixed bottom-4 right-4 p-4 rounded flex items-center animate-fade-in shadow-lg', variantStyles[variant])}>
      {variantIcons[variant]}
      {message}
    </div>,
    document.body
  );
};

export default Toast;