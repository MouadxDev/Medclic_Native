import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import DynamicTable from '../components/DynamicTable';  // Assuming this is your table component
import { GradientButton, GradientFiltreButton } from '../components';
import DropDownPicker from 'react-native-dropdown-picker';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import Assets from '../components/Assets';

const MyDocumentsScreen = () => {
  const [documentData, setDocumentData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, total: 1, prev: false, next: true });
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [filters, setFilters] = useState({
    patient: '',
    service: '',
    professional: '',
    specialty: '',
    location: ''
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

  const columns = [
    { key: 'nom', label: 'Nom' },
    { key: 'type', label: 'Type' },
    { key: 'addedBy', label: 'Ajouté par' },
    { key: 'date', label: 'Date' },
    { key: 'patient', label: 'Patient' },
    { key: 'service', label: 'Service' },
    { key: 'professional', label: 'Professionnel' },
    { key: 'specialty', label: 'Spécialité' },
    { key: 'location', label: 'Lieu' },
  ];

  // Dummy data for the table (you can fetch from an API if needed)
  const fetchDocuments = async (page = 1) => {
    setLoading(true);
    try {
      const data = [
        {
          nom: 'vidal-vidal_report_id-1_(1).pdf',
          type: 'Ordonnance de médicaments',
          addedBy: 'Dr Alami Karim',
          date: '01-08-23 05:43',
          patient: 'Radi Amin',
          service: 'Consultation',
          professional: 'Dr Alami Karim',
          specialty: 'Généraliste',
          location: 'Cabinet médical',
        },
        {
          nom: 'vidal-vidal_report_id-2_(1).pdf',
          type: 'Rapport médical',
          addedBy: 'Dr Salma Idrissi',
          date: '02-08-23 06:30',
          patient: 'Hakim Belefdil',
          service: 'Consultation',
          professional: 'Dr Salma Idrissi',
          specialty: 'Cardiologue',
          location: 'Clinique Anfa',
        },
      ];
      
      setDocumentData(data);
      setPagination({
        current: page,
        total: 1,
        prev: page > 1,
        next: page < 1,
      });
    } catch (error) {
      console.error('Error fetching documents:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, [filters]);

  // Filters Section
  const renderHeader = () => (
    <View>
      <GradientButton title="Mes Documents" onButtonPress={() => console.log('New Document')} Actions={true} />
      <View style={styles.filters}>
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
                    marginVertical:3
                
                }
            }}
            
            containerStyle={styles.dropdownContainer}
            inputContainerStyle={{
                backgroundColor: '#fff',
                borderRadius: 8,
                borderColor: '#ddd',
                borderWidth: 1,  // Add border width here as well
            }}

            ChevronIconComponent={
                <Assets.Action.UpdownIcon
                  style={{
                    paddingTop: 28,
                    height: 0, 
                    width: 0, 
                    transform: [{ rotate: '180deg' }], // Rotate the icon by 180 degrees
                  }}
                />
              }
            
            />
        
        {/* Example Dropdowns */}
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

        {/* Add more filters as needed */}
        
        <GradientFiltreButton title="Filtrer" onPress={() => fetchDocuments(1)} style={styles.filterButton} />
      </View>
    </View>
  );

  const renderFooter = () => (
    <DynamicTable
      columns={columns}
      data={documentData}
      pagination={pagination}
      CalledBy={"MyDocumentsScreen"}
      Actions={true}
    />
  );

  return (
    <FlatList
      style={styles.container}
      data={[{ key: 'header' }, ...documentData, { key: 'footer' }]}
      renderItem={({ item }) => {
        if (item.key === 'header') return renderHeader();
        if (item.key === 'footer') return renderFooter();
        return null;
      }}
      keyExtractor={(item, index) => item.key || index.toString()}
      ListEmptyComponent={() => <Text style={styles.emptyText}>Aucun document trouvé</Text>}
      refreshing={loading}
      onRefresh={() => fetchDocuments(pagination.current)}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f9f9f9' },
  filters: { marginBottom: 16 },
  autocomplete: { backgroundColor: '#fff', borderRadius: 8, padding: 10, fontSize: 14 },
  dropdown: { backgroundColor: '#fff', borderColor: '#ddd', marginTop: 9 },
  dropdownMenu: { borderColor: '#ddd' },
  filterButton: { alignSelf: 'center', marginTop: 20, width: '100%' },
  emptyText: { textAlign: 'center', marginTop: 20 },
});

export default MyDocumentsScreen;
