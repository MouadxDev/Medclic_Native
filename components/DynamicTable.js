import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
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
import Tooltip from 'react-native-walkthrough-tooltip';
import Assets from './Assets';

const MAX_LENGTH = 20

export default function DynamicTable({
  columns,
  CalledBy,
  Actions,
  data,
  pagination,
  onActionClick,
  shadowEffect 
}) {
  const Collapselogic = CalledBy === 'FseScreen';
  const highlightedRows = CalledBy === "FseScreen" ? [2, 3, 4] : [];

  const hiddenRowIndices =
    CalledBy === "FseScreen"
      ? [0,1,2,3,4,5,6]
      : [];
      
  const [visibleRows, setVisibleRows] = useState({});

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
  const shouldRenderActions = (CalledBy !== "ComplaintScreen" && CalledBy !== "FseScreen" && actions.length > 0);
  const shouldRenderActionsFSE = CalledBy == "FseScreen";

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
        top: y + height - 300,
        left: x + width - 200, // Adjust based on your design
      });
      setSelectedRowIndex(index);
    });
  };
  const toggleRowVisibility = (rowIndex) => {
    setVisibleRows((prev) => ({
      ...prev,
      [rowIndex]: !prev[rowIndex], // Toggle visibility for the specific row
    }));
  };

  const navigation = useNavigation();
  const handleNavigation = (route, id) => {
    navigation.navigate(route, { id });
  };

  const TruncatedText = ({ text, style }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const shouldTruncate = text.length > MAX_LENGTH;
    const truncatedText = shouldTruncate ? text.substring(0, MAX_LENGTH) + '...' : text;
  

    return (
      <Tooltip
        isVisible={showTooltip}
        content={<Text style={{ color: '#FFFFFF' }}>{text}</Text>}  // Text color inside tooltip
        contentStyle={{ backgroundColor: '#333333', padding: 10, borderRadius: 8 }}  // Tooltip background
        placement="top"
        onClose={() => setShowTooltip(false)}
      >
        <TouchableOpacity onPress={() => shouldTruncate && setShowTooltip(true)}>
          <Text style={[style, showTooltip && { color: 'transparent' }]}>
            {truncatedText}
          </Text>
        </TouchableOpacity>
      </Tooltip>
    );
  };

  return (
    <View style={shadowEffect  ?   styles.container : styles.container_noshadow}>
      <ScrollView>
        <View style={styles.table}>
          {data.map((row, rowIndex) => (

            <View
              key={rowIndex}
              ref={(ref) => rowRefs.current[rowIndex] = ref}
              style={[
                styles.row,
                CalledBy === "AbsenceScreen" && { paddingVertical: 20 },
              ]}
            >

              {/* Row Data */}

              {columns.map((column, index) => {
                const highlightIndices =
                  CalledBy === "AbsenceScreen"
                    ? [2, 3]

                    : CalledBy === "MyRDVsScreen"
                      ? [0]

                      : CalledBy === "ComplaintScreen"
                        ? [5, 2]

                        : CalledBy === "MyDocumentsScreen"
                          ? [1, 3, 7]
                          : CalledBy === "FseScreen"
                            ? [0]

                            : [1, 4];

                const customStyleIndices =
                  (CalledBy === "MyRDVsScreen")
                    ? [2] :
                    (CalledBy === "MyDocumentsScreen")
                      ? [5] :
                      (CalledBy === "ComplaintScreen" ?
                        [1] : []);


                const statusStyleIndices =
                  (CalledBy === "MyRDVsScreen")
                    ? [5] :
                    (CalledBy === "FseScreen")
                      ? [6] :
                      [];

                return (
                  <View
                    key={column.key}
                    style={[
                      styles.cellFullRow,
                      Collapselogic &&
                      !hiddenRowIndices.includes(index) &&
                      !visibleRows[rowIndex] && { display: "none" },
                    ]}
                  >
                    <Text style={[
                      styles.cellLabel,
                   ]}>
                      {column.label}
                    </Text>

                    {customStyleIndices.includes(index) ? (
                      <View
                        style={{
                          backgroundColor: 'rgba(65, 132, 247, 0.1)',
                          borderRadius: 16,
                          paddingHorizontal: 11,
                          paddingVertical: 7,
                          alignSelf: 'flex-start',
                        }}
                      >
                        <Text style={[styles.cellValue, { color: '#4184F7' },
                      ]}>
                          {row[column.key]}
                        </Text>
                      </View>
                    ) : statusStyleIndices.includes(index) ? (

                      <Text
                        style={[
                          styles.cellValue,
                    
                          (row[column.key] === "À venir" || row[column.key] === "Remboursée") && { color: '#2EA47C' },
                          (row[column.key] === "Annulé" || row[column.key] === "A rembourser") && { color: '#E40D0D' },
                          (row[column.key] === "En cours" || row[column.key] === "Demande") && { color: '#F3B414' },
                        ]}
                      >
                        {row[column.key]}
                      </Text>

                    ) : (

                      <TruncatedText
                        text={row[column.key]}
                        style={[
                          styles.cellValue,
                          highlightIndices.includes(index)
                          && { color: '#6C87AE' }]}
                      />
                    )}

                  </View>
                );
              })}

              {/* Actions Trigger */}

              {Actions && shouldRenderActions && (
                <View style={styles.actionsCell}>
                  <TouchableOpacity
                    style={styles.actionDots}
                    onPress={(event) => handleDotsPress(rowIndex, event)}
                  >
                    <Text style={styles.dots}>•••</Text>
                  </TouchableOpacity>
                </View>
              )}

              {!shouldRenderActions && !shouldRenderActionsFSE && (
                <View style={styles.actionsCell2}>
                  <TouchableOpacity
                    style={styles.actionDots}
                  >
                    <Assets.Action.Messagetriger />
                  </TouchableOpacity>
                </View>
              )}

              {!shouldRenderActions && shouldRenderActionsFSE && (
                <View style={styles.actionsCell2}>
                  <TouchableOpacity
                    onPress={() => handleNavigation('FseDetailsScreen', data[rowIndex].dossier )}
                    style={styles.actionDots}
                  >
                    <Assets.Action.DetailsIcon />
                  </TouchableOpacity>
                </View>
              )}

            {Collapselogic && (
                  <TouchableOpacity
                        onPress={() => toggleRowVisibility(rowIndex)}
                        style={styles.toggleButton}
                      >
                        <Text style={styles.toggleButtonText}>
                          {visibleRows[rowIndex] ? "Masquer les détails" : "Afficher les détails"}
                        </Text>
                  </TouchableOpacity>
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
  container_noshadow: {
    padding: 7,
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
    alignItems: 'center',
    paddingVertical: 6,

  },
  cellLabel: {
    fontSize: 14,
    color: '#333333',
    flex: 1,
    fontWeight: 'bold',
  },
  cellValue: {
    fontSize: 14,
    paddingRight: 3,
    color: '#333',
    textAlign: 'right',
    flex: 1,
  },
  actionsCell: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  actionsCell2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
    marginBottom:16,
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
  toggleButton:{
    marginTop: 5,
    alignSelf: "center",
    padding: 8,
    borderRadius: 4,
  },
  toggleButtonText: {
    color: "#6C87AE",
    fontSize: 14,
    fontWeight: "bold",
  },
});