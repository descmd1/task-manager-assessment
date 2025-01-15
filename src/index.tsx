import { createRoot } from 'react-dom/client';
import App from './App';
import { TaskProvider } from './context/TaskContext';
import { DarkModeProvider } from './context/DarkModeContext'; 
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <TaskProvider>
      <DarkModeProvider> 
        <App />
      </DarkModeProvider>
    </TaskProvider>
  );
}
