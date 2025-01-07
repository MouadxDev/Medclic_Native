import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DynamicTable from '../components/DynamicTable';
import { GradientButton, GradientFiltreButton } from '../components';
import Assets from '../components/Assets';
import DropDownPicker from 'react-native-dropdown-picker';
import { useModal } from '../components/Modals/ModalContext';
import { Patients } from '../services/Patients';

export default function MyPatientsScreen() {
  const { showModal } = useModal();
  const patientsService = new Patients();
  
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // State management
  const [patientsData, setPatientsData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, total: 1, prev: false, next: true });
  const [loading, setLoading] = useState(false);
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const [filters, setFilters] = useState({
    startDate: null,
    endDate: null,
    status: '',
  });

  const [open, setOpen] = useState(false);
  const [statusOptions, setStatusOptions] = useState([
    { label: 'Pending', value: 'pending' },
    { label: 'Completed', value: 'completed' },
  ]);

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Nom complet' },
    { key: 'age', label: 'Age' },
    { key: 'gender', label: 'Sexe' },
    { key: 'phone', label: 'Téléphone' },
  ];

  // Handle Date Picker Changes
  const onStartDateChange = (event, selectedDate) => {
    setShowStartPicker(Platform.OS === 'ios'); // Only keep open on iOS
    if (selectedDate) {
      setFilters((prev) => ({ ...prev, startDate: selectedDate }));
    }
  };

  const onEndDateChange = (event, selectedDate) => {
    setShowEndPicker(Platform.OS === 'ios');
    if (selectedDate) {
      setFilters((prev) => ({ ...prev, endDate: selectedDate }));
    }
  };

  // Fetch patients data from API
  const fetchPatients = async (page = 1) => {
    setLoading(true);
    try {
      const response = await patientsService.getByPage(page, filters);
      const { data, currentPage, totalPages } = response;

      setPatientsData(data);
      
      setPagination({
        current: currentPage,
        total: totalPages,
        prev: currentPage > 1,
        next: currentPage < totalPages,
      });

    } catch (error) {
      console.error('Error fetching patients:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, [filters]);

  const handleNextPage = () => {
    if (pagination.next) {
      fetchPatients(pagination.current + 1);
    }
  };

  const handlePrevPage = () => {
    if (pagination.prev) {
      fetchPatients(pagination.current - 1);
    }
  };

  return (
    <FlatList
      style={styles.container}
      data={[{ key: 'header' }, ...patientsData, { key: 'footer' }]}
      renderItem={({ item }) => {
        if (item.key === 'header') {
          return (
            <>
              {/* Title and Button */}
              <GradientButton 
                  title="Mes patients" 
                  onButtonPress={() => showModal('NewPatientModal')} 
                  Actions={true} 
                  Filters={true} 
                  onFiltersPress={() => setIsFilterVisible(!isFilterVisible)} 
                  />

              {/* Filter Section */}

              {isFilterVisible && (
                <View style={styles.filters}>
                  
                  <TouchableOpacity style={styles.filterItem} onPress={() => setShowStartPicker(true)}>
                    <Text style={styles.filterText}>
                      {filters.startDate ? filters.startDate.toLocaleDateString() : 'Date du début'}
                    </Text>
                    <Assets.Inputs.DatepickerIcon />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.filterItem} onPress={() => setShowEndPicker(true)}>
                    <Text style={styles.filterText}>
                      {filters.endDate ? filters.endDate.toLocaleDateString() : 'Date de fin'}
                    </Text>
                    <Assets.Inputs.DatepickerIcon />
                  </TouchableOpacity>

                  {/* Render Date Pickers */}
                  {showStartPicker && (
                    <DateTimePicker
                      value={filters.startDate || new Date()}
                      mode="date"
                      display="default"
                      onChange={onStartDateChange}
                    />
                  )}
                  {showEndPicker && (
                    <DateTimePicker
                      value={filters.endDate || new Date()}
                      mode="date"
                      display="default"
                      onChange={onEndDateChange}
                    />
                  )}

                  <View style={styles.dropdownContainer}>
                    <DropDownPicker
                      open={open}
                      setOpen={setOpen}
                      value={filters.status}
                      items={statusOptions}
                      setValue={(callback) =>
                        setFilters((prevFilters) => ({
                          ...prevFilters,
                          status: callback(prevFilters.status),
                        }))
                      }
                      placeholder="Select status"
                      style={styles.dropdown}
                      dropDownContainerStyle={styles.dropdownMenu}
                    />
                  </View>

                  <GradientFiltreButton
                    title="Filtrer"
                    onPress={() => fetchPatients(1)} 
                    style={{ alignSelf: 'center', marginTop: 20, width: '100%' }}
                  />
                </View>
              )}
            </>
          );
        }

        if (item.key === 'footer') {
          return (
            <DynamicTable
              columns={columns}
              data={patientsData}
              pagination={{
                current: pagination.current,
                total: pagination.total,
                next: handleNextPage,
                prev: handlePrevPage,
              }}
              Actions={true}
              onActionClick={(key, row) => console.log(`${key} clicked for`, row)}
            />
          );
        }

        return null;
      }}
      keyExtractor={(item, index) => item.key || index.toString()}
      ListEmptyComponent={() => <Text style={{ textAlign: 'center' }}>Aucun patient trouvé</Text>}
      refreshing={loading}
      onRefresh={() => fetchPatients(pagination.current)}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f9f9f9' },
  filters: { marginBottom: 16 },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  filterText: { fontSize: 14, color: '#333', flex: 1 },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  dropdownMenu: { borderColor: '#ddd', backgroundColor: '#fff' },
});
