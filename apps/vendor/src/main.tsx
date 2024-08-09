import { createRoot } from 'react-dom/client';
import App from './app/App';
const container =
  document.getElementById('root') ?? document.createElement('div');

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
