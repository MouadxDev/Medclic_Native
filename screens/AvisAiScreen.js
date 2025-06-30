import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions, 
  TextInput
} from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring 
} from 'react-native-reanimated';
import { 
  User, 
  ClipboardList, 
  FileText, 
  CheckCircle2, 
  Lightbulb 
} from 'lucide-react-native';
import { WebView } from 'react-native-webview';
import Assets from '../components/Assets';
import { GradientButton } from '../components';
import DropDownPicker from 'react-native-dropdown-picker';

import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

const AvisAiScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const stepScale = useSharedValue(1);
  const steps = [
    { id: 1, title: 'Patient', icon: User },
    { id: 2, title: 'Symptômes', icon: ClipboardList },
    { id: 3, title: 'Questionnaire', icon: FileText },
    { id: 4, title: 'Synthèse', icon: CheckCircle2 },
    { id: 5, title: 'Hypothèses', icon: Lightbulb }
  ];
  const patients_proche = [
    { label: 'Patient 1', value: 'patient_1' },
    { label: 'Patient 2', value: 'patient_2' },
    { label: 'Patient 3', value: 'patient_3' },
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      animateStepTransition();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      animateStepTransition();
    }
  };

  const animateStepTransition = () => {
    stepScale.value = withSpring(1.1, { damping: 2, stiffness: 300 }, () => {
      stepScale.value = withSpring(1);
    });
  };

  const animatedStepStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: stepScale.value }]
    };
  });

  const [selected, setSelected] = useState('');
  const [selectedsec, setSelectedsec] = useState('');

  const [sectionTitle , setSectionTilte]=useState('Vous souhaitez avoir un avis sur :');


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  let t_mod = '';



  const handleSelect = (value) => {
  
    if (value === "vous_meme" || value === "un_proche") {
      setSelectedsec(value);
    }
  
    if (value === "txt" || value === "humBody" || value === "audio") {
      setSelectedsec(value);
      nextStep(); 
      return;
    }
  
    t_mod = value;
    setSelected(value);
  
    if (value === "symp") {
      setSectionTilte("Vous demandez un avis pour :");
    }
  };<Text style={styles.sectionTextualTitle}>Veuillez renseigner l'âge, le sexe et décrire au mieux les symptômes, leur contexte, les allergies, les maladies, l'historique médical, les antécédents familiaux et tout autre élément pertinent concernant le patient.</Text>



  const renderContent = () => {
    switch (currentStep) {
      case 1:
        const buttons = selected === 'symp' && selectedsec !='vous_meme' 
          ? [
              { key: 'vous_meme', icon: <Assets.AvisAi.vouMemeIcon />, label: 'Vous Même' },
              { key: 'un_proche', icon: <Assets.AvisAi.procheIcon />, label: 'Un Proche' },
            ]
          : selectedsec !='vous_meme' ? [
              { key: 'symp', icon: <Assets.AvisAi.symptIcon />, label: 'Des Symptomes' },
              { key: 'ordo', icon: <Assets.AvisAi.ordoIcon />, label: 'Une Ordonnace' },
              { key: 'analy', icon: <Assets.AvisAi.analyIcon />, label: 'Une Analyse' },
            ] : 
            [
              { key: 'txt', icon: <Assets.AvisAi.textualIcon />, label: 'Textuel' },
              { key: 'humBody', icon: <Assets.AvisAi.humBodyIcon />, label: 'Sur un corps humain' },
              { key: 'audio', icon: <Assets.AvisAi.audioIcon />, label: 'Vocalement' },
            ]
            ;
      
        return (
          <View style={styles.containerActionPatient}>
            
            <Text style={styles.cardTitle}>{sectionTitle}</Text>

          {buttons.map((item) => (
            <TouchableOpacity
              key={item.key}
              style={[
                styles.button,
                selected === item.key && styles.selectedButton,
              ]}
              onPress={() => handleSelect(item.key)}
            >
              {item.icon}
              <Text style={styles.buttonText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          
          {selectedsec === 'un_proche' && (
            <View style={styles.procheContainer}>

            <View style={styles.dropdownContainer}>
              <DropDownPicker
                open={open}
                value={value}
                items={patients_proche}
                setOpen={setOpen}
                setValue={setValue}
                setItems={() => {}}
                placeholder="Selectionnez un proche"
                containerStyle={styles.dropdown}
                dropDownStyle={styles.dropdownList}
                style={styles.dropdown}
               dropDownContainerStyle={styles.dropdownMenu}

              />
            </View>
           <GradientButton Actions={true} onButtonPress={() => console.log("Add New Patient !")}/>  
          </View>
          
          )}
    
        </View>
        );
      
        case 2:
          let sectionContent;
          switch (selectedsec) {
            case "txt":
              sectionContent = (
                <View >
                <View style={styles.lockIconGlobalContainer}>
                <View style={styles.lockIconContainer}>
                  <Assets.AvisAi.lockIcon style={styles.lockIcon} /> 
                </View>
                </View>

                  <Text style={styles.sectionTextualTitle}>Veuillez renseigner l'âge, le sexe et décrire au mieux les symptômes, leur contexte, les allergies, les maladies, l'historique médical, les antécédents familiaux et tout autre élément pertinent concernant le patient.</Text>
                  <Text style={styles.sectionTextualContent}>
                  Il a des douleurs abdominales sévères, des nausées et des vomissements depuis 48 heures. Il a également constaté une diminution de l'appétit et une légère fièvre. Il n'a pas voyagé dernièrement, et il n'y a pas de contexte d'intoxication alimentaire autour de lui. Il n'a pas d'allergie. Il est obèse et diabétique.
                    </Text>
                  <TextInput
                    style={styles.TextualInput}
                    placeholder="Describe the symptoms here..."
                  />
                </View>
              );
              break;
  
            case "humBody":
              sectionContent = (
                <View style={styles.sectionView}>
                  <Text style={styles.sectionTitle}>Human Body Symptoms Collection</Text>
                  <Text style={styles.sectionContent}>Select the affected body part.</Text>
                  {/* Add your UI component for selecting body parts */}
                  <Assets.body.bodyManFront/>
                </View>
              );
              break;
  
            case "audio":
              sectionContent = (
                <View >
                   <View style={styles.lockIconGlobalContainer}>
                      <View style={styles.lockIconContainer}>
                        <Assets.AvisAi.lockIcon style={styles.lockIcon} /> 
                      </View>
                   </View>
                   <Text style={styles.sectionTextualTitle}>Veuillez renseigner l'âge, le sexe et décrire au mieux les symptômes, leur contexte, les allergies, les maladies, l'historique médical, les antécédents familiaux et tout autre élément pertinent concernant le patient.</Text>
                   <TouchableOpacity style={styles.audioTrigerContainer}>

                        <LottieView
                          source={{ uri: "https://lottie.host/800d6fea-9be9-4c5c-9235-bc086a9743f7/m9Ky2C2JoL.lottie" }}
                          autoPlay
                          loop
                          style={{ width: 200, height: 200 }}
                          />
                    </TouchableOpacity>

                </View>
              );
              break;
  
            default:
              sectionContent = (
                <View style={styles.sectionView}>
                  <Text style={styles.sectionTitle}>Unknown Section</Text>
                </View>
              );
          }
  
          return (
            <View>
              {sectionContent}
            </View>
          );
      case 3:
        return (
          <View style={styles.sectionView}>
            <Text style={styles.sectionTitle}>Medical Questionnaire Section</Text>
            <Text style={styles.sectionContent}>Answer detailed medical questions about the patient.</Text>
          </View>
        );
      case 4:
        return (
          <View style={styles.sectionView}>
            <Text style={styles.sectionTitle}>Clinical Summary Section</Text>
            <Text style={styles.sectionContent}>Review and summarize the patient's clinical information.</Text>
          </View>
        );
      case 5:
        return (
          <View style={styles.sectionView}>
            <Text style={styles.sectionTitle}>Preliminary Hypotheses Section</Text>
            <Text style={styles.sectionContent}>Explore possible diagnostic hypotheses.</Text>
          </View>
        );
      default:
        return <View><Text>Unknown Section</Text></View>;
    }
  };

  return (
    <View style={styles.container}>
      {/* Step Indicators */}
      <View style={styles.stepsIndicatorContainer}>
        {steps.map((step) => {
          const StepIcon = step.icon;
          const isActive = currentStep === step.id;

          return (
            <View key={step.id} style={styles.stepContainer}>
              <Animated.View 
                style={[
                  styles.stepIconContainer,
                  isActive && styles.activeStepIcon,
                  animatedStepStyle
                ]}
              >
                <StepIcon color={isActive ? '#3B82F6' : '#A1A1AA'} size={24} />
              </Animated.View>
              <Text style={[styles.stepTitle, isActive && styles.activeStepTitle]}>
                {step.title}
              </Text>
            </View>
          );
        })}
      </View>

      {/* Content Area */}
      <Animated.View style={[styles.contentContainer, animatedStepStyle]}>
        {renderContent()}
      </Animated.View>

      {/* Navigation Buttons */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity 
          style={[styles.navigationButton, currentStep === 1 && styles.disabledButton]}
          onPress={prevStep}
          disabled={currentStep === 1}
        >
          <Text style={styles.navigationButtonText}>Précédent</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navigationButton, styles.nextButton, currentStep === steps.length && styles.disabledButton]}
          onPress={nextStep}
          disabled={currentStep === steps.length}
        >
          <Text style={styles.navigationButtonText} >Suivant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16
  },
  stepsIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32
  },
  stepContainer: {
    alignItems: 'center'
  },
  stepIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8
  },
  activeStepIcon: {
    backgroundColor: '#3B82F6/20',
    borderWidth: 2,
    borderColor: '#3B82F6'
  },
  stepTitle: {
    fontSize: 12,
    color: '#A1A1AA'
  },
  activeStepTitle: {
    color: '#3B82F6',
    fontWeight: 'bold'
  },
  contentContainer: {
    marginBottom: 16,
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionView: {
    padding: 20,
    backgroundColor: '#E0F7FA',
    borderRadius: 12,
    width: '100%',
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00796B'
  },
  sectionContent: {
    fontSize: 16,
    color: '#004D40'
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    display:'none',

  },
  navigationButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 8
  },
  nextButton: {
    backgroundColor: '#3B82F6'
  },
  navigationButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  disabledButton: {
    opacity: 0.5
  },
  containerActionPatient: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexWrap: 'wrap', 
    marginTop: 16,
    gap:10,
    width:"100%"
  },

  button: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOpacity: 0.2, 
    shadowRadius: 4, 
    shadowOffset: { width: 0, height: 2 }, 
    elevation: 5, 
    width:"100%"

  },
  selectedButton: {
    backgroundColor: '#007BFF',
  },
  buttonText: {
    marginTop: 8,
    color: '#333',
  },
  
  procheContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    width: '100%',
  },
  dropdownContainer: {
    flex: 1, 
    marginBottom:20,
    
  },

  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  dropdownMenu: { borderColor: '#ddd', backgroundColor: '#fff' },
  
  cardTitle:{
    color:'#333333',
    textAlign:'center',
    paddingBottom:10

  },

  sectionTextualTitle:{
    textAlign:'center',
    color:'#555555',
    marginBottom:10

  },
  sectionTextualContent:{
    backgroundColor:'#a9a9a926',
    borderColor:'#ddd',
    marginTop:12,
    padding:20,
    borderRadius:12,
    borderWidth: 1, 
    borderColor: '#B5B5B5', 
    marginBottom:10

  },
  TextualInput:{
    borderWidth: 1, 
    borderRadius:10,
    height:150,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    textAlignVertical: 'top', 
    borderRadius: 5,

  },
  lockIcon:{

  },
  lockIconContainer:{
    backgroundColor: 'rgba(58, 142, 246, 0.15)',
    padding: 20,
    justifyContent:'center',
    alignItems:'center',
    width:60,
    height:60,
    borderRadius:100

  },
  lockIconGlobalContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:15
  },
  audioTrigerContainer:{
    justifyContent:'center',
    alignItems:'center',
  }
});

export default AvisAiScreen;
