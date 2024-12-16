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
    <div className="min-h-screen flex flex-col">
      <header className="text-black p-4 flex justify-between items-center">
        <h1 className="text-2xl">Toast Library <a className='text-red-800' href="https://zedfr.me">Zed</a></h1>
      </header>
      <main className="flex-grow p-4">
        <div className="space-y-4">
          <Button variant={'outline'} onClick={showSuccessToast}>Show Success Toast</Button>
          <Button variant={'outline'} onClick={showErrorToast}>Show Error Toast</Button>
          <Button variant={'outline'} onClick={showWarningToast}>Show Warning Toast</Button>
          <Button variant={'outline'} onClick={showInfoToast}>Show Info Toast</Button>
        </div>
      </main>
    </div>
  );
};

export default App;