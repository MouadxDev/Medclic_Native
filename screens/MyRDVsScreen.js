import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DynamicTable from '../components/DynamicTable';
import { GradientButton, GradientFiltreButton } from '../components';
import DropDownPicker from 'react-native-dropdown-picker';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import Assets from '../components/Assets';

const MyRDVsScreen = () => {
  // State management
  const [rdvsData, setRdvsData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, total: 1, prev: false, next: true });
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  
  const [serviceOpen, setServiceOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  const [filters, setFilters] = useState({
    date: null,
    patient: '',
    professional: '',
    service: '',
    type:'',
    status:'',
  });
  
  const Patients = [
    { id: '1', title: 'John Doe' },
    { id: '2', title: 'Jane Smith' },
    { id: '3', title: 'Amin Radi' },
    { id: '4', title: 'Hakim Belefdil' },
  ];



  const [locationsOptions, setLocationsOptions] = useState([
    { label: 'Centre Infirmier Maarif', value: 'maarif' },
    { label: 'Clinique Anfa', value: 'anfa' },
  ]);
  const [typeOptions, settypeOptions] = useState([
    { label: 'Centre Infirmier Maarif', value: 'maarif' },
    { label: 'Clinique Anfa', value: 'anfa' },
  ]);

  const servicesOptions = [
    { label: 'Cardiology', value: 'cardiology' },
    { label: 'Dermatology', value: 'dermatology' },
  ];

  const statusOptions = [
    { label: 'Confirmed', value: 'confirmed' },
    { label: 'Pending', value: 'pending' },
  ];

  const columns = [
    { key: 'date', label: 'Date' },
    { key: 'patient', label: 'Patient' },
    { key: 'service', label: 'Service' },
    { key: 'professional', label: 'Professionnel' },
    { key: 'specialty', label: 'Spécialité' },
    { key: 'status', label: 'Statut' },
    { key: 'location', label: 'Lieu' },
    { key: 'address', label: 'Adresse' },
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

  const fetchRDVs = async (page = 1) => {
    setLoading(true);
    try {
      // Simulate fetching data
      const data = [
        {
          date: '01-08-23 05:43',
          patient: 'Radi Amin',
          service: 'Consultation',
          professional: 'Dr Alami Karim',
          specialty: 'Généraliste',
          status: 'À venir',
          location: 'Centre Infirmier Maarif',
          address: '123, boulevard d\'anfa',
        },
        {
          date: '02-08-23 09:30',
          patient: 'Sami Naima',
          service: 'Examen',
          professional: 'Dr Ahmed Zouhair',
          specialty: 'Cardiologue',
          status: 'En cours',
          location: 'Clinique Atlas',
          address: '45, rue des Rosiers',
        },
        {
          date: '03-08-23 14:15',
          patient: 'Latifa Ziad',
          service: 'Radio',
          professional: 'Dr Salma Idrissi',
          specialty: 'Radiologue',
          status: 'À venir',
          location: 'Centre Médical Ghandi',
          address: '98, avenue des Fleurs',
        },
        {
          date: '04-08-23 08:00',
          patient: 'Karim Anwar',
          service: 'Consultation',
          professional: 'Dr Rachid El Ouafi',
          specialty: 'Dermatologue',
          status: 'Annulé',
          location: 'Polyclinique Hassan',
          address: '12, avenue Hassan II',
        },
        {
          date: '05-08-23 16:00',
          patient: 'Yasmine Tazi',
          service: 'Consultation',
          professional: 'Dr Nadia Barakat',
          specialty: 'Pédiatre',
          status: 'À venir',
          location: 'Clinique Les Lilas',
          address: '67, boulevard Moulay Idriss',
        },
        {
          date: '06-08-23 10:45',
          patient: 'Mehdi Fassi',
          service: 'Vaccination',
          professional: 'Dr Amine Tahiri',
          specialty: 'Généraliste',
          status: 'Annulé',
          location: 'Centre de Santé Oasis',
          address: '34, rue Zerktouni',
        },
        {
          date: '07-08-23 12:30',
          patient: 'Salwa Hamid',
          service: 'Consultation',
          professional: 'Dr Lamiaa Cherkaoui',
          specialty: 'Endocrinologue',
          status: 'À venir',
          location: 'Hôpital Universitaire Ibn Rochd',
          address: '89, rue Rahal El Meskini',
        },
        {
          date: '08-08-23 15:00',
          patient: 'Zakaria El Khalfi',
          service: 'Test de laboratoire',
          professional: 'Dr Omar Hamdi',
          specialty: 'Biologiste',
          status: 'Annulé',
          location: 'Centre Diagnostic Hay Riad',
          address: '23, avenue Hay Riad',
        },
        {
          date: '09-08-23 07:45',
          patient: 'Imane Lahlou',
          service: 'Consultation',
          professional: 'Dr Fatima Zahra Belghazi',
          specialty: 'Ophtalmologue',
          status: 'À venir',
          location: 'Clinique Anfa Santé',
          address: '56, rue Anfa',
        },
        {
          date: '10-08-23 18:20',
          patient: 'Nizar Bennani',
          service: 'Suivi médical',
          professional: 'Dr Mohamed Fikri',
          specialty: 'Psychiatre',
          status: 'Annulé',
          location: 'Cabinet Médical Hassan',
          address: '78, boulevard Hassan',
        },
      ];
      

      setRdvsData(data);
      setPagination({
        current: page,
        total: 1, // Adjust as needed for total pages
        prev: page > 1,
        next: page < 1,
      });
    } catch (error) {
      console.error('Error fetching RDVs:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRDVs();
  }, [filters]);

  const renderHeader = () => (
    <View>
      <GradientButton title="Rendez-vous à venir" onButtonPress={() => console.log('New RDV')} />

      {/* Filters Section */}
      <View style={styles.filters}>
        {/* Dropdown with filters */}
        <View style={styles.FilterContainer}>
          <AutocompleteDropdown
            clearOnFocus={false}
            closeOnSubmit={true}

            dataSet={Patients}
            onSelectItem={(item) => {
              console.log('Selected item:', item);
              setSelectedItem(item);
            }}
            textInputProps={{
              placeholder: "Rechercher un patient",
              autoCorrect: false,
              autoCapitalize: "none",
              style: {
                borderRadius: 8,
                backgroundColor: '#fff',
                color: '#333333',
                fontSize: 15,
                paddingLeft: 15,
              }
            }}

            containerStyle={styles.dropdownContainer}
            inputContainerStyle={{
              backgroundColor: '#fff',
              borderRadius: 8,
              borderColor: '#ddd',
            }}

          />
        </View>
        <TouchableOpacity style={styles.filterItem} onPress={() => setShowStartPicker(true)}>
          <Text style={styles.filterText}>
            {filters.startDate ? filters.startDate.toLocaleDateString() : 'Date du début'}
          </Text>
          <Assets.Inputs.DatepickerIcon />
        </TouchableOpacity>
r
        <TouchableOpacity style={styles.filterItem} onPress={() => setShowEndPicker(true)}>
          <Text style={styles.filterText}>
            {filters.endDate ? filters.endDate.toLocaleDateString() : 'Date de fin'}
          </Text>
          <Assets.Inputs.DatepickerIcon />
        </TouchableOpacity>
        <View style={{ zIndex: serviceOpen ? 5000 : 1 }}>
          <DropDownPicker
            open={serviceOpen}
            value={filters.service}
            items={servicesOptions}
            setOpen={setServiceOpen}
            setValue={(callback) => setFilters((prev) => ({ ...prev, service: callback(prev.service) }))}
            placeholder="Service"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownMenu}
          />
        </View>

        <View style={{ zIndex: typeOpen ? 4000 : 1 }}>
          <DropDownPicker
            open={typeOpen}
            value={filters.type}
            items={typeOptions}
            setOpen={setTypeOpen}
            setValue={(callback) => setFilters((prev) => ({ ...prev, type: callback(prev.type) }))}
            placeholder="Type de RDV"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownMenu}
          />
        </View>

        <View style={{ zIndex: locationOpen ? 3000 : 1 }}>
          <DropDownPicker
            open={locationOpen}
            value={filters.location}
            items={locationsOptions}
            setOpen={setLocationOpen}
            setValue={(callback) => setFilters((prev) => ({ ...prev, location: callback(prev.location) }))}
            placeholder="Lieu"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownMenu}
          />
        </View>

        <View style={{ zIndex: statusOpen ? 2000 : 1 }}>
          <DropDownPicker
            open={statusOpen}
            value={filters.status}
            items={statusOptions}
            setOpen={setStatusOpen}
            setValue={(callback) => setFilters((prev) => ({ ...prev, status: callback(prev.status) }))}
            placeholder="Status"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownMenu}
          />
        </View>

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
        <GradientFiltreButton title="Filtrer" onPress={() => fetchRDVs(1)} style={styles.filterButton} />
      </View>
    </View>
  );

  const renderFooter = () => (
    <DynamicTable
      columns={columns}
      data={rdvsData}
      pagination={{
        current: pagination.current,
        total: pagination.total,
        next: () => fetchRDVs(pagination.current + 1),
        prev: () => fetchRDVs(pagination.current - 1),
      }}
      Actions={true}
      CalledBy={"MyRDVsScreen"}
      onActionClick={(key, row) => console.log(`${key} clicked for`, row)}
    />
  );

  return (
    <FlatList
      style={styles.container}
      data={[{ key: 'header' }, ...rdvsData, { key: 'footer' }]}
      renderItem={({ item }) => {
        if (item.key === 'header') return renderHeader();
        if (item.key === 'footer') return renderFooter();
        return null;
      }}
      keyExtractor={(item, index) => item.key || index.toString()}
      ListEmptyComponent={() => <Text style={styles.emptyText}>Aucun RDV trouvé</Text>}
      refreshing={loading}
      onRefresh={() => fetchRDVs(pagination.current)}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f9f9f9' },
  filters: { marginBottom: 16 },
  FilterContainer : {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingVertical: 10,
    paddingBottom:10
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
  dropdown: { backgroundColor: '#fff', borderColor: '#ddd',marginTop:9 },
  dropdownMenu: { borderColor: '#ddd' },
  filterButton: { alignSelf: 'center', marginTop: 20, width: '100%' },
  emptyText: { textAlign: 'center', marginTop: 20 },
});

export default MyRDVsScreen;
