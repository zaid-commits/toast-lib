// src/App.tsx
import { useToast } from './components/context/toastContext';
import { Button } from './components/ui/button';

const App = () => {
  const { addToast } = useToast();

  const showSuccessToast = () => {
    addToast('This is a success message!', 'success');
  };

  const showErrorToast = () => {
    addToast('This is an error message!', 'error');
  };

  const showWarningToast = () => {
    addToast('This is a warning message!', 'warning');
  };

  const showInfoToast = () => {
    addToast('This is an info message!', 'info');
  };

  return (
    <div>
      <h1>First Bun Application</h1>
      <Button variant={'outline'}  onClick={showSuccessToast}>Show Success Toast</Button>
      <Button variant={'outline'} onClick={showErrorToast}>Show Error Toast</Button>
      <Button variant={'outline'} onClick={showWarningToast}>Show Warning Toast</Button>
      <Button variant={'outline'} onClick={showInfoToast}>Show Info Toast</Button>
    </div>
  );
};

export default App;