import React from 'react';
import Router from './routes/routes';
import { AppProvider } from './contexts/AppContext';


export default function App() {
  return (
    <AppProvider> {/* Wrap the entire app */}
      <Router />
    </AppProvider>
  );
}