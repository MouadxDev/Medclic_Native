import React, { useState, useEffect } from'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Platform } from'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DynamicTable from '../components/DynamicTable';
import { GradientButton, GradientFiltreButton } from '../components';
import Assets from '../components/Assets';
import DropDownPicker from'react-native-dropdown-picker';
import { AutocompleteDropdown } from'react-native-autocomplete-dropdown';

import { useModal } from '../components/Modals/ModalContext';
import { Absences } from '../services/Absences';

const AbsencesScreen = () => {
  const { showModal } = useModal();
  const absencesService = new Absences();

  // State management
  const [absencesData, setAbsencesData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, total: 1, prev: false, next: true });
  const [loading, setLoading] = useState(false);
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const [filters, setFilters] = useState({
    startDate: null,
    endDate: null,
    professional: '',
    location: '',
  });

  const [professionalsOpen, setProfessionalsOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  const [professionalsOptions, setProfessionalsOptions] = useState([
    { label: 'Dr Alami Karim', value: 'alami_karim' },
    { label: 'Dr Fouad Benali', value: 'fouad_benali' },
  ]);

  const [locationsOptions, setLocationsOptions] = useState([
    { label: 'Casablanca', value: 'casablanca' },
    { label: 'Rabat', value: 'rabat' },
  ]);

  const columns = [
    { key: 'professionnel', label: 'Professionnel' },
    { key: 'lieu', label: 'Lieu' },
    { key: 'dateDebut', label: 'Du' },
    { key: 'dateFin', label: 'Au' },
  ];

  // Handle Date Picker Changes
  const handleDateChange = (type, selectedDate) => {
    if (type ==='start') {
      setShowStartPicker(Platform.OS === 'ios');
      setFilters((prev) => ({...prev, startDate: selectedDate }));
    } else {
      setShowEndPicker(Platform.OS === 'ios');
      setFilters((prev) => ({...prev, endDate: selectedDate }));
    }
  };

  // Fetch absences data from API
  const fetchAbsences = async (page = 1) => {
    setLoading(true);
    try {
      const response = await absencesService.getByPage(page, filters);
      const { data, currentPage, totalPages } = response;

      setAbsencesData(data);
      setPagination({
        current: currentPage,
        total: totalPages,
        prev: currentPage > 1,
        next: currentPage < totalPages,
      });
    } catch (error) {
      console.error('Error fetching absences:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAbsences();
  }, [filters]);

  const handleNextPage = () => {
    if (pagination.next) {
      fetchAbsences(pagination.current + 1);
    }
  };

  const handlePrevPage = () => {
    if (pagination.prev) {
      fetchAbsences(pagination.current - 1);
    }
  };

  const renderHeader = () => {
    return (
      <View>
        {/* Title and Button */}
        <GradientButton title="Absences" onButtonPress={() => showModal('NewAbsenceModal')} />

        {/* Filter Section */}
        <View style={styles.filters}>
          <TouchableOpacity style={styles.filterItem} onPress={() => setShowStartPicker(true)}>
            <Text style={styles.filterText}>
              {filters.startDate? filters.startDate.toLocaleDateString() : 'Date du début'}
            </Text>
            <Assets.Inputs.DatepickerIcon />
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterItem} onPress={() => setShowEndPicker(true)}>
            <Text style={styles.filterText}>
              {filters.endDate? filters.endDate.toLocaleDateString() : 'Date de fin'}
            </Text>
            <Assets.Inputs.DatepickerIcon />
          </TouchableOpacity>

          {/* Render Date Pickers */}
          {showStartPicker && (
            <DateTimePicker
              value={filters.startDate || new Date()}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => handleDateChange('start', selectedDate)}
            />
          )}
          {showEndPicker && (
            <DateTimePicker
              value={filters.endDate || new Date()}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => handleDateChange('end', selectedDate)}
            />
          )}

          {/* Dropdown with filters */}
          <View style={styles.FilterContainer}>
          <AutocompleteDropdown
              clearOnFocus={false}
              closeOnSubmit={true}
              dataSet={professionalsOptions.map((item) => ({
                id: item.value,
                title: item.label,
              }))}
              onSelectItem={(item) => {
                console.log('Selected item:', item);
                setFilters((prevFilters) => ({ ...prevFilters, professional: item ? item.id : '' }));
              }}
              textInputProps={{
                placeholder: "Rechercher un professionnel",
                autoCorrect: false,
                autoCapitalize: "none",
                style: {
                  borderRadius: 8,
                  backgroundColor: '#fff',
                  color: '#333333',
                  fontSize: 15,
                  paddingLeft: 15,
                  height: 50,
                },
              }}
              containerStyle={styles.dropdownContainer}
              inputContainerStyle={{
                backgroundColor: '#fff',
                borderRadius: 8,
                borderColor: '#ddd',
              }}
              ChevronIconComponent={
                <Assets.Action.UpdownIcon
                  style={{
                    paddingTop: 30,
                    height: 0, 
                    width: 0, 
                    transform: [{ rotate: '180deg' }], // Rotate the icon by 180 degrees
                  }}
                />
              }
            />

          </View>

          <View style={styles.dropdownContainer}>
            <DropDownPicker
              open={locationsOpen}
              setOpen={setLocationsOpen}
              value={filters.location}
              items={locationsOptions}
              setValue={(callback) =>
                setFilters((prevFilters) => ({...prevFilters, location: callback(prevFilters.location) }))}
              placeholder="Lieu"
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownMenu}
            />
          </View>

          <GradientFiltreButton
            title="Filtrer"
            onPress={() => fetchAbsences(1)}
            style={{ alignSelf: 'center', marginTop: 20, width: '100%' }}
          />
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <DynamicTable
        columns={columns}
        data={absencesData}
        pagination={{
          current: pagination.current,
          total: pagination.total,
          next: handleNextPage,
          prev: handlePrevPage,
        }}
        Actions={false}
        CalledBy={"AbsenceScreen"}
        onActionClick={(key, row) => console.log(`${key} clicked for`, row)}
      />
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={[{ key: 'header' },...absencesData, { key: 'footer' }]}
      renderItem={({ item }) => {
        if (item.key === 'header') {
          return renderHeader();
        }

        if (item.key === 'footer') {
          return renderFooter();
        }

        return null;
      }}
      keyExtractor={(item, index) => item.key || index.toString()}
      ListEmptyComponent={() => <Text style={{ textAlign: 'center' }}>Aucune absence trouvée</Text>}
      refreshing={loading}
      onRefresh={() => fetchAbsences(pagination.current)}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f9f9f9' },
  filters: { marginBottom: 16 },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
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

  FilterContainer: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingBottom:8,
    
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    
  },
});

export default AbsencesScreen;