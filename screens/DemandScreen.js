import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DynamicTable from '../components/DynamicTable';
import { GradientButton, GradientFiltreButton } from '../components';
import DropDownPicker from 'react-native-dropdown-picker';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import Assets from '../components/Assets';

const DemandScreen = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // State management
  const [demandData, setDemandData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, total: 1, prev: false, next: true });
  const [loading, setLoading] = useState(false);
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  const [filters, setFilters] = useState({
    startDate: null,
    endDate: null,
    patient: '',    
    professional: '',
    status: '',
  });

  const Patients = [
    { id: '1', title: 'John Doe' },
    { id: '2', title: 'Jane Smith' },
    { id: '3', title: 'Amin Radi' },
    { id: '4', title: 'Hakim Belefdil' },
  ];

  const Professionals = [
    { id: '1', title: 'Dr. Smith' },
    { id: '2', title: 'Dr. Johnson' },
    { id: '3', title: 'Dr. Amin Radi' },
    { id: '4', title: 'Dr. Belefdil' },
  ];

  const statusOptions = [
    { label: 'Nouvelle', value: 'nouvelle' },
    { label: 'En cours', value: 'en_cours' },
    { label: 'Terminé', value: 'termine' },
  ];

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'date', label: 'Date' },
    { key: 'sex', label: 'Sexe' },
    { key: 'age', label: 'Age' },
    { key: 'status', label: 'Statut' },
    { key: 'phone', label: 'Téléphone' },
  ];

  const fetchDemands = async (page = 1) => {
    setLoading(true);
    try {
      // Simulate fetching data
      const data = [
        {
          id: '310',
          date: '01-08-23 05:43',
          sex: 'Homme',
          age: 29,
          status: 'Terminé',
          phone: '1234567890',
        },
        {
          id: '311',
          date: '02-08-23 10:30',
          sex: 'Femme',
          age: 34,
          status: 'Nouvelle',
          phone: '0987654321',
        },
      ];

      setDemandData(data);
      setPagination({
        current: page,
        total: 1, // Adjust as needed for total pages
        prev: page > 1,
        next: page < 1,
      });
    } catch (error) {
      console.error('Error fetching demands:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDemands();
  }, [filters]);

  const renderHeader = () => (
    <View>
      {/* Title and Button */}
      <GradientButton
        title="Demandes"
        onButtonPress={() => {}}
        Actions={true}
        Filters={true}
        onFiltersPress={() => setIsFilterVisible(!isFilterVisible)}
      />
      {/* Filters Section */}
      {isFilterVisible && (
        <View style={styles.filters}>
          <View style={styles.FilterContainer}>
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnSubmit={true}
              dataSet={Patients}
              onSelectItem={(item) => setFilters((prev) => ({ ...prev, patient: item?.title }))}
              textInputProps={{
                placeholder: 'Rechercher un patient',
                style: styles.autocomplete,
              }}
              containerStyle={styles.dropdownContainer}
            />
          </View>
          <View style={styles.FilterContainer}>
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnSubmit={true}
              dataSet={Professionals}
              onSelectItem={(item) => setFilters((prev) => ({ ...prev, professional: item?.title }))}
              textInputProps={{
                placeholder: 'Rechercher un professionnel',
                style: styles.autocomplete,
              }}
              containerStyle={styles.dropdownContainer}
            />
          </View>
          <TouchableOpacity style={styles.filterItem} onPress={() => setShowStartPicker(true)}>
            <Text style={styles.filterText}>
              {filters.startDate ? filters.startDate.toLocaleDateString() : 'Date de début'}
            </Text>
            <Assets.Inputs.DatepickerIcon />
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterItem} onPress={() => setShowEndPicker(true)}>
            <Text style={styles.filterText}>
              {filters.endDate ? filters.endDate.toLocaleDateString() : 'Date de fin'}
            </Text>
            <Assets.Inputs.DatepickerIcon />
          </TouchableOpacity>

          <View style={{ zIndex: statusOpen ? 2000 : 1 }}>
            <DropDownPicker
              open={statusOpen}
              value={filters.status}
              items={statusOptions}
              setOpen={setStatusOpen}
              setValue={(callback) => setFilters((prev) => ({ ...prev, status: callback(prev.status) }))}
              placeholder="Statut"
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownMenu}
            />
          </View>

          {showStartPicker && (
            <DateTimePicker
              value={filters.startDate || new Date()}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowStartPicker(Platform.OS === 'ios');
                setFilters((prev) => ({ ...prev, startDate: selectedDate }));
              }}
            />
          )}

          {showEndPicker && (
            <DateTimePicker
              value={filters.endDate || new Date()}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowEndPicker(Platform.OS === 'ios');
                setFilters((prev) => ({ ...prev, endDate: selectedDate }));
              }}
            />
          )}

          <GradientFiltreButton title="Filtrer" onPress={() => fetchDemands(1)} style={styles.filterButton} />
        </View>
      )}
    </View>
  );

  const renderFooter = () => (
    <DynamicTable
      columns={columns}
      data={demandData}
      pagination={{
        current: pagination.current,
        total: pagination.total,
        next: () => fetchDemands(pagination.current + 1),
        prev: () => fetchDemands(pagination.current - 1),
      }}
      Actions={true}
      CalledBy={"DemandScreen"}
      onActionClick={(key, row) => console.log(`${key} clicked for`, row)}
    />
  );

  return (
    <FlatList
      style={styles.container}
      data={[{ key: 'header' }, ...demandData, { key: 'footer' }]}
      renderItem={({ item }) => {
        if (item.key === 'header') return renderHeader();
        if (item.key === 'footer') return renderFooter();
        return null;
      }}
      keyExtractor={(item, index) => item.key || index.toString()}
      ListEmptyComponent={() => <Text style={styles.emptyText}>Aucune demande trouvée</Text>}
      refreshing={loading}
      onRefresh={() => fetchDemands(pagination.current)}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f9f9f9' },
  filters: { marginBottom: 16 },
  FilterContainer: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingVertical: 10,
  },
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
  autocomplete: { backgroundColor: '#fff', borderRadius: 8, padding: 10, fontSize: 14 },
  dropdown: { backgroundColor: '#fff', borderColor: '#ddd', marginTop: 9 },
  dropdownMenu: { borderColor: '#ddd' },
  filterButton: { alignSelf: 'center', marginTop: 20, width: '100%' },
  emptyText: { textAlign: 'center', marginTop: 20 },
});

export default DemandScreen;
