// src/components/context/toastContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import Toast from '../ui/toast';

interface ToastContextProps {
  addToast: (message: string, variant?: 'success' | 'error' | 'warning' | 'info' | 'notification' | 'favorite', duration?: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<{ id: number; message: string; variant?: 'success' | 'error' | 'warning' | 'info' | 'notification' | 'favorite'; duration?: number }[]>([]);

  const addToast = (message: string, variant: 'success' | 'error' | 'warning' | 'info' | 'notification' | 'favorite' = 'info', duration?: number) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, variant, duration }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, duration || 3000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          variant={toast.variant}
          duration={toast.duration}
          onClose={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
        />
      ))}
    </ToastContext.Provider>
  );
};