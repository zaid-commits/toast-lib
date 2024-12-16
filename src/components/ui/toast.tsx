// src/components/ui/toast.tsx
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import { CheckCircleIcon, XCircleIcon, AlertTriangleIcon, InfoIcon } from 'lucide-react';

interface ToastProps {
  message: string;
  variant?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose: () => void;
}

const variantStyles = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  warning: 'bg-yellow-500',
  info: 'bg-blue-500',
};

const variantIcons = {
  success: <CheckCircleIcon className="mr-2" />,
  error: <XCircleIcon className="mr-2" />,
  warning: <AlertTriangleIcon className="mr-2" />,
  info: <InfoIcon className="mr-2" />,
};

const Toast = ({ message, variant = 'info', duration = 3000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return createPortal(
    <div className={cn('fixed bottom-4 right-4 p-4 text-white rounded flex items-center animate-fade-in', variantStyles[variant])}>
      {variantIcons[variant]}
      {message}
    </div>,
    document.body
  );
};

export default Toast;