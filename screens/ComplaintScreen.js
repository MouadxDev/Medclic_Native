import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import DynamicTable from '../components/DynamicTable';
import { GradientButton, GradientFiltreButton } from '../components';
import DropDownPicker from 'react-native-dropdown-picker';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';

const ComplaintScreen = () => {
  const [complaintData, setComplaintData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, total: 1, prev: false, next: true });
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filters, setFilters] = useState({
    patient: '',
    service: '',
    professional: '',
    specialty: '',
    location: '',
    address: ''
  });

  const Patients = [
    { id: '1', title: 'John Doe' },
    { id: '2', title: 'Jane Smith' },
    { id: '3', title: 'Amin Radi' },
    { id: '4', title: 'Hakim Belefdil' },
  ];

  const servicesOptions = [
    { label: 'Cardiology', value: 'cardiology' },
    { label: 'Dermatology', value: 'dermatology' },
  ];

  const professionalsOptions = [
    { label: 'Dr Alami Karim', value: 'alami' },
    { label: 'Dr Salma Idrissi', value: 'idrissi' },
  ];

  const specialtiesOptions = [
    { label: 'Généraliste', value: 'general' },
    { label: 'Cardiologue', value: 'cardio' },
  ];

  const locationsOptions = [
    { label: 'Centre Infirmier Maarif', value: 'maarif' },
    { label: 'Clinique Anfa', value: 'anfa' },
  ];

  const columns = [
    { key: 'patient', label: 'Patient' },
    { key: 'service', label: 'Service' },
    { key: 'professional', label: 'Professionnel' },
    { key: 'specialty', label: 'Spécialité' },
    { key: 'location', label: 'Lieu' },
    { key: 'address', label: 'Adresse' },
  ];

  const fetchComplaints = async (page = 1) => {
    setLoading(true);
    try {
      const data = [
        {
          patient: 'Radi Amin',
          service: 'Consultation',
          professional: 'Dr Alami Karim',
          specialty: 'Généraliste',
          location: 'Centre Infirmier Maarif',
          address: '123, boulevard d\'anfa',
        },
        {
          patient: 'Sami Naima',
          service: 'Examen',
          professional: 'Dr Ahmed Zouhair',
          specialty: 'Cardiologue',
          location: 'Clinique Atlas',
          address: '45, rue des Rosiers',
        },
        {
          patient: 'Latifa Ziad',
          service: 'Radio',
          professional: 'Dr Salma Idrissi',
          specialty: 'Radiologue',
          location: 'Centre Médical Ghandi',
          address: '98, avenue des Fleurs',
        },
      ];

      setComplaintData(data);
      setPagination({
        current: page,
        total: 1,
        prev: page > 1,
        next: page < 1,
      });
    } catch (error) {
      console.error('Error fetching complaints:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, [filters]);

  const renderHeader = () => (
    <View>
      <GradientButton title="Réclamations" onButtonPress={() => console.log('New Complaint')} Actions={false} />
      <View style={styles.filters}>
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
<View style={{ zIndex: filters.serviceOpen ? 5000 : 1 }}>
  <DropDownPicker
    open={filters.serviceOpen}
    value={filters.service}
    items={servicesOptions}
    setOpen={(open) => setFilters((prev) => ({ ...prev, serviceOpen: open }))}
    setValue={(callback) => setFilters((prev) => ({ ...prev, service: callback(prev.service) }))}
    placeholder="Service"
    style={styles.dropdown}
    dropDownContainerStyle={styles.dropdownMenu}
  />
</View>

<View style={{ zIndex: filters.professionalOpen ? 5000 : 1 }}>
  <DropDownPicker
    open={filters.professionalOpen}
    value={filters.professional}
    items={professionalsOptions}
    setOpen={(open) => setFilters((prev) => ({ ...prev, professionalOpen: open }))}
    setValue={(callback) => setFilters((prev) => ({ ...prev, professional: callback(prev.professional) }))}
    placeholder="Professionnel"
    style={styles.dropdown}
    dropDownContainerStyle={styles.dropdownMenu}
  />
</View>

<View style={{ zIndex: filters.specialtyOpen ? 5000 : 1 }}>
  <DropDownPicker
    open={filters.specialtyOpen}
    value={filters.specialty}
    items={specialtiesOptions}
    setOpen={(open) => setFilters((prev) => ({ ...prev, specialtyOpen: open }))}
    setValue={(callback) => setFilters((prev) => ({ ...prev, specialty: callback(prev.specialty) }))}
    placeholder="Spécialité"
    style={styles.dropdown}
    dropDownContainerStyle={styles.dropdownMenu}
  />
</View>

<View style={{ zIndex: filters.locationOpen ? 5000 : 1 }}>
  <DropDownPicker
    open={filters.locationOpen}
    value={filters.location}
    items={locationsOptions}
    setOpen={(open) => setFilters((prev) => ({ ...prev, locationOpen: open }))}
    setValue={(callback) => setFilters((prev) => ({ ...prev, location: callback(prev.location) }))}
    placeholder="Lieu"
    style={styles.dropdown}
    dropDownContainerStyle={styles.dropdownMenu}
  />
</View>


        <GradientFiltreButton title="Filtrer" onPress={() => fetchComplaints(1)} style={styles.filterButton} />
      </View>
    </View>
  );

  const renderFooter = () => (
    <DynamicTable
      columns={columns}
      data={complaintData}
      pagination={pagination}
      CalledBy={"ComplaintScreen"}
      Actions={true}
    />
  );

  return (
    <FlatList
      style={styles.container}
      data={[{ key: 'header' }, ...complaintData, { key: 'footer' }]}
      renderItem={({ item }) => {
        if (item.key === 'header') return renderHeader();
        if (item.key === 'footer') return renderFooter();
        return null;
      }}
      keyExtractor={(item, index) => item.key || index.toString()}
      ListEmptyComponent={() => <Text style={styles.emptyText}>Aucune plainte trouvée</Text>}
      refreshing={loading}
      onRefresh={() => fetchComplaints(pagination.current)}
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
  autocomplete: { backgroundColor: '#fff', borderRadius: 8, padding: 10, fontSize: 14 },
  dropdown: { backgroundColor: '#fff', borderColor: '#ddd', marginTop: 9 },
  dropdownMenu: { borderColor: '#ddd' },
  filterButton: { alignSelf: 'center', marginTop: 20, width: '100%' },
  emptyText: { textAlign: 'center', marginTop: 20 },
});

export default ComplaintScreen;
