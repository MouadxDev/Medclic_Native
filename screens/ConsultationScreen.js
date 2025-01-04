import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated, FlatList, TextInput } from 'react-native';
import { GradientButton, GradientFiltreButton } from '../components';
import Assets from '../components/Assets';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { LinearGradient } from 'expo-linear-gradient';

export default function ConsultationScreen() {
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState('');
  const [formData, setFormData] = useState({
    o2Consumption: '',
    hb: '',
    saO2: '',
    paO2: '',
    svO2: '',
    pvO2: '',
    caO2: '',
    cvO2: '',
    dc: ''
  });

  const EQUATIONS = [
    {
      title: 'CaO2',
      formula: 'CaO2 = ( Hb * 13.4 * SaO2 / 100 ) + ( PaO2 * 0.031 )',
    },
    {
      title: 'DC',
      formula: 'DC = O2Consommation / (CaO2 - CvO2)',
    },
    {
      title: 'CvO2',
      formula: 'CvO2 = ( Hb * 13.4 * SvO2 / 100 ) + ( PvO2 * 0.031 )',
    },
  ];
  const EquationDisplay = ({ title, formula }) => (
    <View style={styles.equationContainer}>
      <Assets.Icons.FunctionIcon />
      <Text style={styles.equationFormula}>{formula}</Text>
    </View>
  );

  const Patients = [
    { id: '1', title: 'John Doe' },
    { id: '2', title: 'Jane Smith' },
    { id: '3', title: 'Amin Radi' },
    { id: '4', title: 'Hakim Belefdil' },
  ];
  
  const [rotateAnims] = useState(() => ({
    informationsPatient: new Animated.Value(0),
    dmp: new Animated.Value(0),
    avisIA: new Animated.Value(0),
    observations: new Animated.Value(0),
    prescription: new Animated.Value(0),
    facturation: new Animated.Value(0),
  }));
  
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
  
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const patientData = {
    name: 'RADI Amin',
    age: 29,
    gender: 'Male', // Change this to "Female" for testing conditional fields
    phone: '0661318810',
    email: 'belefdil.abdelhakim@gmail.com',
    weight: '90 kg',
    height: '180 cm',
    bloodGroup: 'O+',
    creatinine: '90',
    liverCondition: 'Insuffisance hépatique',
    doctor: 'Dr ADLAOUI Yassine',
    cin: 'BE12546',
    insurance: 'Assu',
  };
  const DmpData = {
    Pathologies: 0,
    Allergies: 0,
    Prescriptions: 2,
    Délivrances: 1,
    Vaccins: 0,
    Examens: 3,
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => {
      const newValue = !prev[section];
      Animated.spring(rotateAnims[section], {
        toValue: newValue ? 1 : 0,
        useNativeDriver: true,
      }).start();
      return { ...prev, [section]: newValue };
    });
  };
  const onStartDateChange = (event, selectedDate) => {
    setShowStartPicker(Platform.OS === 'ios'); 
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
  

  const sections = [
    {
      id: 'informationsPatient',
      title: 'Informations patient',
      icon: <Assets.Consultation.UserInfoIcon />,
      content: (
        <View style={styles.cardGrid}>
     
          <Card label="Nom complet" value={patientData.name} icon={<Assets.Consultation.Cards.UserIcon />} />
          <Card label="Téléphone" value={patientData.phone} icon={<Assets.Consultation.Cards.PhoneIcon />} />
          <Card label="Email" value={patientData.email} icon={<Assets.Consultation.Cards.MailIcon />} />

          
          <Card label="Âge" value={`${patientData.age} ans`} icon={<Assets.Consultation.Cards.AgeIcon />} />
          <Card label="Sexe" value={patientData.gender} icon={<Assets.Consultation.Cards.SexIcon />} />

          <Card label="Taille" value={patientData.height} icon={<Assets.Consultation.Cards.TailleIcon />} />
          <Card label="Poids" value={patientData.weight} icon={<Assets.Consultation.Cards.PoidsIcon />} />
          <Card label="GS" value={patientData.bloodGroup} icon={<Assets.Consultation.Cards.GrpSangIcon />} />
          <Card label="Créatinine" value={patientData.creatinine} icon={<Assets.Consultation.Cards.CreatinIcon />} />
          
          {/* Static cards */}
            <Card label="Sem" value="-" disabled={patientData.gender === 'Male'} icon={<Assets.Consultation.Cards.Sem />} />
            <Card label="Allaitement" value="-" disabled={patientData.gender === 'Male'} icon={<Assets.Consultation.Cards.Allait />}/>
          {/* Dynamic cards */}

          <Card label="Médecin traitant" value={patientData.doctor} icon={<Assets.Consultation.Cards.Doc />} />
          <Card label="CIN" value={patientData.cin} icon={<Assets.Consultation.Cards.Cin />} />
          <Card label="Assurance" value={patientData.insurance} icon={<Assets.Consultation.Cards.Assu />} />

        </View>
      ),
    },
    {
      id: 'dmp',
      title: 'DMP',
      icon: <Assets.Consultation.DmpIcon />,
      content: (
        <View style={styles.dmpSection}>
          <DMPCard label="Pathologies" value={DmpData.Pathologies} onPress={() => console.log('Pathologies pressed')} />
          <DMPCard label="Allergies" value={DmpData.Allergies} onPress={() => console.log('Allergies pressed')} />
          <DMPCard label="Prescriptions" value={DmpData.Prescriptions} onPress={() => console.log('Prescriptions pressed')} />
          <DMPCard label="Délivrances" value={DmpData.Délivrances} onPress={() => console.log('Délivrances pressed')} />
          <DMPCard label="Vaccins" value={DmpData.Vaccins} onPress={() => console.log('Vaccins pressed')} />
          <DMPCard label="Examens" value={DmpData.Vaccins} onPress={() => console.log('Examens pressed')} />
        </View>
      ),
    },
    {
      id: 'avisIA',
      title: 'Avis IA',
      icon: <Assets.Consultation.AiIcon />,
      content: <Text style={styles.sectionContent}>Analyse IA en cours...</Text>,
    },
    {
      id: 'observations',
      title: 'Observations',
      icon: <Assets.Consultation.ObIcon />,
      content: (
        <View style={styles.infoGrid}>
          {/* Section 1: Choose a Questionnaire */}
          <View style={styles.choiqustion}>
            <View style={styles.oberTitle}>
              <Text style={styles.numberText}>1</Text>
              <Text style={styles.titleText}>Choisir un questionnaire</Text>
            </View>
      
            <DropDownPicker
              open={open}
              setOpen={setOpen}
              value={selectedQuestionnaire}
              items={[
                { label: "Correction de l'intervalle QT (ECG)", value: 'qtCorrection' },
              ]}
              setValue={(callback) => setSelectedQuestionnaire(callback(selectedQuestionnaire))}
              placeholder="Select questionnaire"
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownMenu}
            />
      
            <View style={styles.containerBtn}>
              {/* Bordered Button */}
              <TouchableOpacity style={styles.borderedButton}>
                <Text style={styles.borderedButtonText}>Voir l'historique</Text>
              </TouchableOpacity>
      
              {/* Filled Button */}
              <TouchableOpacity style={styles.filledButton}>
                <Text style={styles.filledButtonText}>+ Passer le questionnaire</Text>
              </TouchableOpacity>
            </View>
          </View>
      
          {/* Section 2: Questionnaire */}
          <View style={styles.formContainer}>
            <View style={styles.oberTitle}>
              <Text style={styles.numberText}>2</Text>
              <Text style={styles.titleText}>Questionnaire</Text>
            </View>
      
            <View style={styles.gridContainer}>
              {Object.keys(formData).slice(0, 6).map((key, index) => (
                <View
                  key={key}
                  style={[
                    styles.gridItem,
                    (index === 0 || index === 5) && styles.fullWidthItem,
                  ]}
                >
                  <Text style={styles.label}>
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())} (mL/min)
                  </Text>
                  <TextInput
                    style={styles.input}
                    height={35}
                    value={formData[key]}
                    onChangeText={(text) => setFormData({ ...formData, [key]: text })}
                    keyboardType="numeric"
                  />
                </View>
              ))}
            </View>
          </View>
      
          {/* Section 3: Results */}
          <View>
            <View style={styles.oberTitle}>
              <Text style={styles.numberText}>3</Text>
              <Text style={styles.titleText}>Résultats</Text>
            </View>
            <View style={styles.gridContainer}>
              {Object.keys(formData).slice(6, 9).map((key, index) => (
                <View
                  key={key}
                  style={[
                    styles.gridItem,
                    (index === 0 || index === 5) && styles.fullWidthItem,
                  ]}
                >
                  <Text style={styles.label}>
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())} (mL/min)
                  </Text>
                  <TextInput
                    style={styles.input}
                    height={35}
                    value={formData[key]}
                    onChangeText={(text) => setFormData({ ...formData, [key]: text })}
                    keyboardType="numeric"
                  />
                </View>
              ))}
            </View>
          </View>
      
          {/* Section 4: Note */}
          <View>
            <View style={styles.oberTitle}>
              <Text style={styles.numberText}>4</Text>
              <Text style={styles.titleText}>Note</Text>
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.paragraph}>
                • Dans cette calculatrice, <Text style={styles.bold}>mcg</Text> est l'abbréviation de microgrammes.
              </Text>
              <Text style={styles.paragraph}>
                • Dans ce calcul, le contenu artériel en oxygène <Text style={styles.bold}>CaO2</Text> et le contenu veineux en oxygène <Text style={styles.bold}>CvO2</Text> sont calculés en utilisant la saturation en oxygène et la pression en oxygène des deux échantillons sanguins.
              </Text>
              <Text style={styles.paragraph}>• La consommation d'O2 peut être déterminée par :</Text>
              <Text style={styles.bulletPoint}>- Calcul séparé</Text>
              <Text style={styles.bulletPoint}>- Mesure d'un appareil</Text>
              <Text style={styles.bulletPoint}>
                - Estimation/hypothèse d'environ 250 cc/min chez un individu sain
              </Text>
            </View>
          </View>
      
          {/* Section 5: Equations Used */}
          <View style={styles.Equations}>
            <View style={styles.oberTitle}>
              <Text style={styles.numberText}>5</Text>
              <Text style={styles.titleText}>Equations utilisées</Text>
            </View>
            
            <View >
                {EQUATIONS.map((eq, index) => (
                  <EquationDisplay key={index} title={eq.title} formula={eq.formula} />
                ))}
              </View>
          </View>
      
          {/* Calculate Button */}
          <TouchableOpacity
            style={styles.calculateButton}
            onPress={() => {
              /* Add calculation logic */
            }}
          >
            <Text style={styles.calculateButtonText}>Calculer</Text>
          </TouchableOpacity>
        </View>
      )
      ,
      
    },
    {
      id: 'prescription',
      title: 'Prescription',
      icon: <Assets.Consultation.PreIcon />,
      content: <Text style={styles.sectionContent}>Prescriptions récentes...</Text>,
    },
    {
      id: 'facturation',
      title: 'Facturation',
      icon: <Assets.Consultation.UserInfoIcon />,
      content: (
        <View style={styles.infoGrid}>
          <InfoItem label="Montant" value="1500 €" />
          <InfoItem label="Status" value="Payé" highlight />
        </View>
      ),
    },
  ];

  return (
    <FlatList
      style={styles.container}
      data={sections} 
      keyExtractor={(item) => item.id} 
      renderItem={({ item }) => (
        <Section
          key={item.id}
          {...item}
          expanded={expandedSections[item.id]}
          rotateAnim={rotateAnims[item.id]}
          onPress={() => toggleSection(item.id)}
        />
      )}
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <GradientButton title="Consultation" onButtonPress={() => showModal('NewPatientModal')} />

          <View>
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
                        fontSize:15,
                        paddingLeft: 15
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

            {/* Start Date Picker */}
            <TouchableOpacity style={styles.filterItem} onPress={() => setShowStartPicker(true)}>
              <Text style={styles.filterText}>
                {filters.startDate ? filters.startDate.toLocaleDateString() : 'Date du début'}
              </Text>
              <Assets.Inputs.DatepickerIcon />
            </TouchableOpacity>

            {/* End Date Picker */}
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

            {/* Filter Button */}
            <GradientFiltreButton
              title="Filtrer"
              onPress={() => {
                console.log('Filters applied:', filters);
              }}
              style={{ alignSelf: 'center', marginTop: 20, width: '100%' }}
            />
          </View>
        </View>
      }
    />

  );
}

const Card = ({ label, value, disabled, icon }) => (
  <View style={[styles.card, disabled && styles.cardDisabled]}>
    <View style={styles.cardContent}>
      {/* Render Icon if provided */}
      {icon && <View style={styles.cardIcon}>{icon}</View>}
      <View style={styles.cardText}>
        <Text style={[styles.cardValue, disabled && styles.cardValueDisabled]}>{value}</Text>
        <Text style={styles.cardLabel}>{label}</Text>
      </View>
    </View>
  </View>
  
);

const DMPCard = ({ label, value, onPress }) => (
  <View style={styles.dmpCard}>
    <View style={styles.dmpCardContent}>
      <Text style={styles.dmpCardLabel}>{label}</Text>
      <Text style={styles.dmpCardValue}>({value})</Text>
    </View>
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['rgba(22, 120, 242, 1)', 'rgba(64, 228, 173, 1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientButton}
      >
        <Assets.Action.PlusIconFigma />
        <Text style={styles.dmpCardButtonText}>Voir</Text>
        
      </LinearGradient>
    </TouchableOpacity>
  </View>
);


const InfoItem = ({ label, value, highlight }) => (
  <View style={styles.infoItem}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={[styles.infoValue, highlight && styles.highlightedValue]}>{value}</Text>
  </View>
);

const Section = ({ title, icon, expanded, rotateAnim, onPress, content }) => {
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.section}>
      <TouchableOpacity
        style={[styles.sectionHeader, expanded && styles.sectionHeaderActive]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.headerContent}>
          <View style={styles.iconContainer}>{icon}</View>
          <Text style={styles.sectionTitle}>{title}</Text>
        </View>
        <Animated.View style={{ transform: [{ rotate }] }}>
          
          <Assets.Action.UpdownIcon/>
        </Animated.View>
      </TouchableOpacity>
      {expanded && <View style={styles.sectionBody}>{content}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 10,
  },
  FilterContainer: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingVertical: 10,
  },
  headerContainer: {
    marginBottom: 24,
  },
  patientButton: {
    marginBottom: 8,
  },
  section: {
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
  },
  sectionHeaderActive: {
    backgroundColor: '#F0F7FF',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 12,
    opacity: 0.8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A2138',
  },

  sectionBody: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  cardDisabled: {
    backgroundColor: '#F5F5F5',
  },
  cardLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign:'center',
  },
  cardValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A2138',
    textAlign:'center'
  },

  cardContent: {
    flexDirection: 'column', 
    alignItems: 'center',   
    justifyContent: 'center', 
  },
  cardText:{
    paddingTop:10,
  },

  cardValueDisabled: {
    color: '#9CA3AF',
  },

  sectionContent: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
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
  filterText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  dropdownContainer: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      backgroundColor: '#fff',
    },
    inputContainer: {
      paddingHorizontal: 5,
    },
    input: {
      height: 40,
      fontSize: 16,
    },
    dmpSection: {
      flexDirection: 'column',
      gap: 12,
    },
    
    dmpSection: {
      flexDirection: 'column',
      gap: 12,
    },
    dmpCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    dmpCardContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dmpCardLabel: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
    },
    dmpCardValue: {
      fontSize: 14,
      color: '#666',
      marginLeft: 8,
    },
    gradientButton: {
      borderRadius: 4,
      paddingVertical: 8,
      paddingHorizontal: 16,
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'center', 
      gap: 8, 
    },
    dmpCardButtonText: {
      fontSize: 14,
      color: '#fff',
      textAlign: 'center',
      fontWeight:'bold',
      flexDirection: 'row',
      
    },

    dropdown: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 6,
      backgroundColor: '#fff',
    },
    dropdownMenu: {
      borderWidth: 1,
      borderColor: '#ddd',
    },
    ObserTitle: {
      flexDirection:'row'
    },
    infoGrid: {
      padding: 5,
    },
    choiqustion: {
      marginBottom: 20,
    },
    oberTitle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    numberText: {
      marginRight: 8,
      fontWeight: '500',
      backgroundColor: 'rgba(108, 135, 174, 0.1)', 
      color: '#6C87AE', 
      height: 30,
      width: 30, 
      borderRadius: 20, 
      textAlign: 'center', 
      textAlignVertical: 'center', 
      overflow: 'hidden', 
    },
    titleText: {
      fontSize: 16,
      color: '#666',
    },
    dropdown: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
    },
    dropdownMenu: {
      backgroundColor: 'white',
      borderColor: '#ddd',
    },
    formContainer: {
      marginTop: 20,
    },
    sectionTitle: {
      fontSize: 16,
      marginBottom: 16,
      color: '#666',
    },
    inputContainer: {
      marginBottom: 16,
    },
    label: {
      marginBottom: 8,
      color: '#333',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      padding: 12,
      backgroundColor: 'white',
    },
    calculateButton: {
      backgroundColor: '#3B82F6',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 16,
    },
    calculateButtonText: {
      color: 'white',
      fontWeight: '500',
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between', // Adds spacing between items in a row
    },
    gridItem: {
      width: '48%', // Each item takes up roughly half the width of the container
      marginBottom: 20,
    },
    fullWidthItem: {
      width: '100%', // First item spans the entire width
    },
    label: {
      fontSize: 14,
      marginBottom: 5,
    },
    input: {
      height: 35,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 8,
      borderRadius: 4,
    },
    containerBtn: {
      flex: 1,
      flexDirection: 'row',
      gap:5,
      paddingTop:5,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    borderedButton: {
      borderWidth: 2,
      borderColor: '#4285F4',
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 5,
      
    },
    borderedButtonText: {
      color: '#4285F4',
      fontSize: 12,
      fontWeight:'bold'
    },
    filledButton: {
      backgroundColor: '#4285F4',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 5,

    },
    filledButtonText: {
      color: '#fff',
      fontSize: 12,
      fontWeight:'bold'

    },
    textBlock: {
      backgroundColor: '#EAF1FC',
      borderRadius: 8,
      fontSize:13,
      padding: 16,
      width: '100%',
    },
    paragraph: {
      fontSize: 14,
      color: '#6C87AE',
      marginBottom: 8,
      lineHeight: 20,
    },
    bold: {
      fontWeight: 'bold',
    },
    bulletPoint: {
      fontSize: 13,
      color: '#6C87AE',
      lineHeight: 20,
      marginLeft: 16, // Indent for bullets
    },

    Equations:{
      paddingTop:13
    },

    equationContainer: {
      backgroundColor: '#f4f4f4',
      flexDirection:'row',
      gap:10,
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },

    equationFormula: {
      fontSize: 12,
      color: '#555',
    },
  
});
