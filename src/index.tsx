import App from './App';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { setupStore } from './store';
import { StrictMode } from 'react';

const store = setupStore();

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
