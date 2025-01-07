import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Platform, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DynamicTable from '../components/DynamicTable';
import { GradientButton, GradientFiltreButton } from '../components';
import Assets from '../components/Assets';
import DropDownPicker from 'react-native-dropdown-picker';

import { useModal } from '../components/Modals/ModalContext';

const FseScreen = () => {
  const { showModal } = useModal();
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // State management
  const [fseData, setFseData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, total: 1, prev: false, next: true });
  const [loading, setLoading] = useState(false);
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const [filters, setFilters] = useState({
    startDate: null,
    endDate: null,
    dossier: '',
    beneficiaire: '',
    demande: '',
    paiementMutuelle: '',
    mutuelle: '',
  });

  const columns = [
    { key: 'dossier', label: 'Dossier' },
    { key: 'date', label: 'Date' },
    { key: 'assure', label: 'Assuré' }, 
    { key: 'beneficiaire', label: 'Bénéficiaire' },
    { key: 'montantTotal', label: 'Montant Total' }, 
    { key: 'amoStatut', label: 'AMO Statut' }, 
    { key: 'amoRembourse', label: 'AMO Remboursé' }, 
    { key: 'amoReste', label: 'AMO Reste' }, 
    { key: 'amcStatut', label: 'AMC Statut' }, 
    { key: 'amcRembourse', label: 'AMC Remboursé' }, 
    { key: 'amcReste', label: 'AMC Reste' }, 
    { key: 'details', label: 'Details' } 
  ];
  

  const handleDateChange = (type, selectedDate) => {
    if (type === 'start') {
      setShowStartPicker(Platform.OS === 'ios');
      setFilters((prev) => ({ ...prev, startDate: selectedDate }));
    } else {
      setShowEndPicker(Platform.OS === 'ios');
      setFilters((prev) => ({ ...prev, endDate: selectedDate }));
    }
  };

  const fetchFseData = async (page = 1) => {
    setLoading(true);
    try {
      // Simulate API call
      const data = [
        {
            dossier: 'FSE080447',
            date: '2023-12-15',
            assure: 'John Doe',
            beneficiaire: 'Jane Doe',
            montantTotal: '5000',
            amoStatut: 'A rembourser',
            amoRembourse: '3000',
            amoReste: '2000',
            amcStatut: 'Remboursé',
            amcRembourse: '2000',
            amcReste: '0',
            details: 'Details here',
          },
          {
            dossier: 'FSE080448',
            date: '2023-12-16',
            assure: 'Alice Smith',
            beneficiaire: 'Bob Smith',
            montantTotal: '4000',
            amoStatut: 'Demande',
            amoRembourse: '2000',
            amoReste: '2000',
            amcStatut: 'Remboursée',
            amcRembourse: '1000',
            amcReste: '1000',
            details: 'Details here',
          },
          {
            dossier: 'FSE080449',
            date: '2023-12-17',
            assure: 'Michael Brown',
            beneficiaire: 'Sarah Brown',
            montantTotal: '6000',
            amoStatut: 'Remboursé',
            amoRembourse: '6000',
            amoReste: '0',
            amcStatut: 'Remboursé',
            amcRembourse: '6000',
            amcReste: '0',
            details: 'Details here',
          },

      ]; 
      setFseData(data);
      setPagination({
        current: page,
        total: 1, // Replace with actual total pages from API
        prev: page > 1,
        next: page < 1 // Replace with actual next page check from API
      });
    } catch (error) {
      console.error('Error fetching FSE data:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFseData();
  }, [filters]);

  const renderHeader = () => (
    <View>
      <GradientButton
        title="Suivi des dossiers"
        Filters={true}
        onFiltersPress={() => setIsFilterVisible(!isFilterVisible)}
      />
      {isFilterVisible && (
        <View style={styles.filters}>
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

          <TextInput
            placeholder="Dossier"
            style={styles.input}
            value={filters.dossier}
            onChangeText={(text) => setFilters((prev) => ({ ...prev, dossier: text }))}
          />

          <TextInput
            placeholder="Bénéficiaire"
            style={styles.input}
            value={filters.beneficiaire}
            onChangeText={(text) => setFilters((prev) => ({ ...prev, beneficiaire: text }))}
          />

          <DropDownPicker
            open={false}
            value={filters.demande}
            items={[{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }]}
            placeholder="Demande"
            onChangeValue={(value) => setFilters((prev) => ({ ...prev, demande: value }))}
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownMenu}
          />

          <DropDownPicker
            open={false}
            value={filters.paiementMutuelle}
            items={[{ label: 'Oui', value: 'oui' }, { label: 'Non', value: 'non' }]}
            placeholder="Paiement Mutuelle"
            onChangeValue={(value) => setFilters((prev) => ({ ...prev, paiementMutuelle: value }))}
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownMenu}
          />

          <DropDownPicker
            open={false}
            value={filters.mutuelle}
            items={[{ label: 'Mutuelle A', value: 'mutuelleA' }, { label: 'Mutuelle B', value: 'mutuelleB' }]}
            placeholder="Mutuelle"
            onChangeValue={(value) => setFilters((prev) => ({ ...prev, mutuelle: value }))}
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownMenu}
          />

          <GradientFiltreButton
            title="Filtrer"
            onPress={() => fetchFseData(1)}
            style={{ alignSelf: 'center', marginTop: 20, width: '100%' }}
          />
        </View>
      )}
    </View>
  );

  const renderFooter = () => (
    <DynamicTable
      columns={columns}
      data={fseData}
      pagination={{
        current: pagination.current,
        total: pagination.total,
        next: () => fetchFseData(pagination.current + 1),
        prev: () => fetchFseData(pagination.current - 1)
      }}
      Actions={false}
      CalledBy="FseScreen"
    />
  );

  return (
    <FlatList
      style={styles.container}
      data={[{ key: 'header' }, ...fseData, { key: 'footer' }]}
      renderItem={({ item }) => {
        if (item.key === 'header') return renderHeader();
        if (item.key === 'footer') return renderFooter();
        return null;
      }}
      keyExtractor={(item, index) => item.key || index.toString()}
      ListEmptyComponent={() => <Text style={{ textAlign: 'center' }}>Aucune donnée trouvée</Text>}
      refreshing={loading}
      onRefresh={() => fetchFseData(pagination.current)}
    />
  );
};

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
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: '#fff',
    flex: 1,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  dropdownMenu: { borderColor: '#ddd', backgroundColor: '#fff' },
  filters: {
    marginBottom: 16,
    gap: 10, 
  },
  
});

export default FseScreen;
