import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, FlatList } from 'react-native';

import DynamicTable from '../components/DynamicTable'; // Ensure this is correctly imported
import { GradientButton, GradientFiltreButton } from '../components';
import Assets from '../components/Assets';
import DropDownPicker from 'react-native-dropdown-picker';
import { useModal } from '../components/Modals/ModalContext';
import { Patients } from '../services/Patients';



export default function MyPatientsScreen() {
  const { showModal } = useModal();
  const patientsService = new Patients();

    // Fetch patients from the API
    const fetchPatients = async (page = 1) => {
      setLoading(true);
      try {
        const response = await patientsService.getByPage(page);
        console.log(response);
        
        if (response) {
          const { data, currentPage, totalPages } = response;
  
          setPatientsData(data[0]); // Adjust data structure
          setPagination({
            current: currentPage,
            total: totalPages,
            prev: currentPage > 1,
            next: currentPage < totalPages,
          });
        }
      } catch (error) {
        console.error('Error fetching patients:', error);
      } finally {
        setLoading(false);
      }
    };
  
    
    useEffect(() => {
      fetchPatients();
    }, []);


  const [open, setOpen] = useState(false);
  const [statusOptions, setStatusOptions] = useState([
    { label: 'Pending', value: 'pending' },
    { label: 'Completed', value: 'completed' },
  ]);

  const [filters, setFilters] = useState({
    startDate: null,
    endDate: null,
    status: '',
  });

  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const [patientsData, setPatientsData] = useState([
    {
      id: '1',
      name: 'Rodi Amin',
      age: '29',
      gender: 'Homme',
      phone: '0561437621',
    },
    {
      id: '2',
      name: 'Rodi Amin',
      age: '29',
      gender: 'Homme',
      phone: '0561437621',
    },
    {
      id: '3',
      name: 'Rodi Amin',
      age: '29',
      gender: 'Homme',
      phone: '0561437621',
    },
  ]);

  const [pagination, setPagination] = useState({
    current: 1,
    total: 6,
    prev: false,
    next: true,
  });

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Nom complet' },
    { key: 'age', label: 'Age' },
    { key: 'gender', label: 'Sexe' },
    { key: 'phone', label: 'Téléphone' },
  ];

  const handleNextPage = async () => {
    if (pagination.next) {
      console.log('Fetching next page...');
      setPagination((prev) => ({
        ...prev,
        current: prev.current + 1,
        prev: true,
        next: prev.current + 1 < prev.total,
      }));
    }
  };

  const handlePrevPage = async () => {
    if (pagination.prev) {
      console.log('Fetching previous page...');
      setPagination((prev) => ({
        ...prev,
        current: prev.current - 1,
        prev: prev.current - 1 > 1,
        next: true,
      }));
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
            />
            
            {/* Filter Section */}
            <View style={styles.filters}>
                <TouchableOpacity
                style={styles.filterItem}
                onPress={() => setShowStartDatePicker(true)}
                >
                <Text style={styles.filterText}>
                    {filters.startDate
                    ? filters.startDate.toLocaleDateString()
                    : 'Date du début'}
                </Text>
                <Assets.Inputs.DatepickerIcon />
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.filterItem}
                onPress={() => setShowEndDatePicker(true)}>

                <Text style={styles.filterText}>
                    {filters.endDate
                    ? filters.endDate.toLocaleDateString()
                    : 'Date de fin'}
                </Text>
                <Assets.Inputs.DatepickerIcon />
                </TouchableOpacity>

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
                    onPress={() => {     
                        console.log('Filters:', filters);
                    }}
                    style={{ alignSelf: 'center', marginTop: 20 ,width :'100%'}} 
                    />
                    
            </View>
            </>
        );
        }

        if (item.key === 'footer') {
        return (
            <>
            {/* Dynamic Table */}
            <DynamicTable
                columns={columns}
                data={patientsData}
            
                pagination={{
                ...pagination,
                next: handleNextPage,
                prev: handlePrevPage,
                }}
                onActionClick={(key, row) => console.log(key ,' clicked for', row)}
            />
            </>
        );
        }

        return null; // Use null for any unused items
    }}
    keyExtractor={(item, index) => item.key || index.toString()} // Ensure unique keys
    />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  filters: {
    marginBottom: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  filterItem: {
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "space-between", 
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  filterLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  filterText: {
    fontSize: 14,
    color: "#333",
    flex: 1, 
  },
  dropdown: {
    marginTop: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    backgroundColor: '#fff',
  },

dropdown: {
  width: '100%',
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 6,
  paddingHorizontal: 15,
  backgroundColor: '#fff',
},
dropdownMenu: {
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 6,
  backgroundColor: '#fff',
},

});