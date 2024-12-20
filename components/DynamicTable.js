import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';

import Assets from './Assets';

export default function DynamicTable({
  columns,
  data,
  pagination,
  onActionClick,
}) {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const rowRefs = useRef([]);

  const actions = [
    { key: 'rendezvous', label: 'Rendez-vous', icon: <Assets.Action.CalendarIcon /> },
    { key: 'suivis', label: 'Suivis', icon: <Assets.Action.SuiviIcon /> },
    { key: 'prescriptions', label: 'Prescriptions', icon: <Assets.Action.PrescriptionIcon /> },
    { key: 'inviter', label: 'Inviter', icon: <Assets.Action.InviterIcon /> },
    { key: 'messages', label: 'Messages', icon: <Assets.Action.MessagesIcon /> },
    { key: 'documents', label: 'Documents', icon: <Assets.Action.DocumentsIcon /> },
    { key: 'notes', label: 'Notes', icon: <Assets.Action.NotesIcon /> },
    { key: 'bloquer', label: 'Bloquer', icon: <Assets.Action.BloquerIcon /> },
  ];

  const handleActionPress = (actionKey, row) => {
    onActionClick(actionKey, row);
    setSelectedRowIndex(null);
  };

  const handleDotsPress = (index, event) => {
    if (selectedRowIndex === index) {
      setSelectedRowIndex(null);
      return;
    }

    // Measure the position of the pressed row
    rowRefs.current[index].measureInWindow((x, y, width, height) => {
      setModalPosition({
        top: y + height,
        left: x + width - 200, // Adjust based on your design
      });
      setSelectedRowIndex(index);
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.table}>
          {data.map((row, rowIndex) => (
            <View 
              key={rowIndex} 
              ref={(ref) => rowRefs.current[rowIndex] = ref}
              style={styles.row}
            >
              {/* Row Data */}
              {columns.map((column, index) => (
                <View key={column.key} style={styles.cellFullRow}>
                  <Text style={styles.cellLabel}>{column.label}:</Text>
                  <Text
                    style={[
                      styles.cellValue,
                      
                      (index === 1 || index === 4) && { color: '#6C87AE' }
                    ]}
                  >
                    {row[column.key]}
                  </Text>
                </View>
              ))}

              {/* Actions Trigger */}
              {actions.length > 0 && (
                <View style={styles.actionsCell}>
                  <TouchableOpacity
                    style={styles.actionDots}
                    onPress={(event) => handleDotsPress(rowIndex, event)}
                  >
                    <Text style={styles.dots}>•••</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Custom Modal for Actions */}
      <Modal
        transparent={true}
        visible={selectedRowIndex !== null}
        onRequestClose={() => setSelectedRowIndex(null)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={() => setSelectedRowIndex(null)}
        >
          <View 
            style={[
              styles.actionModal, 
              { 
                top: modalPosition.top, 
                left: modalPosition.left 
              }
            ]}
          >
            {actions.map((action) => (
              <TouchableOpacity
                key={action.key}
                style={styles.actionModalItem}
                onPress={() => handleActionPress(action.key, data[selectedRowIndex])}
              >
                <View style={styles.actionIconContainer}>
                  {action.icon}
                </View>
                <Text style={styles.actionModalItemText}>{action.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Pagination */}
      {pagination && (
        <View style={styles.pagination}>
          <Text
            onPress={() => pagination.prev && pagination.prev()}
            style={[
              styles.pageButton,
              !pagination.prev && styles.disabledButton,
            ]}
          >
           ← Précédent
          </Text>
          <Text style={styles.pageIndicator}>
            Page {pagination.current} of {pagination.total}
          </Text>
          <Text
            onPress={() => pagination.next && pagination.next()}
            style={[
              styles.pageButton,
              !pagination.next && styles.disabledButton,
            ]}
          >
            Suivant →
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 16,
  },
  table: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 8,
  },
  cellFullRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  cellLabel: {
    fontSize: 14,
    color: '#333333',
    flex: 1,
    fontWeight: 'bold',
  },
  cellValue: {
    fontSize: 14,
    color: '#333',
    textAlign: 'right',
    flex: 1,
  },
  actionsCell: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  actionDots: {
    padding: 10,
  },
  dots: {
    fontSize: 18,
    color: '#aaa',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  actionModal: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: 200,
  },
  actionModalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  actionIconContainer: {
    marginRight: 10,
  },
  actionModalItemText: {
    fontSize: 14,
    color: '#333',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  pageButton: {
    fontSize: 14,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  disabledButton: {
    color: '#ccc',
  },
  pageIndicator: {
    fontSize: 14,
    color: '#555',
  },
});