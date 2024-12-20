import React, { createContext, useState, useContext } from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import NewPatientModal from './NewPatientModal';

// Create a context
const ModalContext = createContext();

// Modal Provider Component
export const ModalProvider = ({ children }) => {
  const [currentModal, setCurrentModal] = useState(null); // Modal name
  const [modalProps, setModalProps] = useState(null); // Pass additional props if needed

  // Show modal function
  const showModal = (modalName, props = null) => {
    setCurrentModal(modalName);
    setModalProps(props);
  };

  // Hide modal function
  const hideModal = () => {
    setCurrentModal(null);
    setModalProps(null);
  };

  // Map of available modals
  const renderModal = () => {
    switch (currentModal) {
      case 'NewPatientModal':
        return <NewPatientModal {...modalProps} onClose={hideModal} />;
      // Add more cases for other modals here
      default:
        return null;
    }
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <Modal transparent={true} visible={!!currentModal} animationType="slide">
        <View style={styles.overlay}>{renderModal()}</View>
      </Modal>
    </ModalContext.Provider>
  );
};

// Custom hook to use modal context
export const useModal = () => useContext(ModalContext);

// Styles
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
