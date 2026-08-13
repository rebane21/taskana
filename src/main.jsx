import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/assets/styles/global.css';
import { AppLayout } from '@/layouts';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>,
);
