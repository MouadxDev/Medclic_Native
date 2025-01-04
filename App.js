import React from 'react';
import Router from './routes/routes';
import { AppProvider } from './contexts/AppContext';
import { ToastProvider } from 'react-native-toast-notifications';
import CustomToast from './components/ToastProvider/CustomToast';
import { ModalProvider } from './components/Modals/ModalContext';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';

export default function App() {
  return (
    <AppProvider>
      <AutocompleteDropdownContextProvider>
        <ModalProvider>
          <ToastProvider
            placement="bottom"
            duration={3000}
            offsetTop={50}
            swipeEnabled={true}
            renderToast={(toast) => (
              <CustomToast
                type={toast.type}
                message={toast.message}
                title={toast.title || ''}
              />
            )}
          >
            
            <Router />

          </ToastProvider>
        </ModalProvider>
      </AutocompleteDropdownContextProvider>
    </AppProvider>
  );
}
