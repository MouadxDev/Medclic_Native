// Import all SVG components from /assets/sidebar
import Absences from '../assets/sidebar/Absences';
import Agenda from '../assets/sidebar/Agenda';
import Annonces from '../assets/sidebar/Annonces';
import Avis from '../assets/sidebar/Avis';
import Blog from '../assets/sidebar/Blog';
import Calendriers from '../assets/sidebar/Calendriers';
import DMP from '../assets/sidebar/DMP';
import Documents from '../assets/sidebar/Documents';
import Elearning from '../assets/sidebar/E-learning';
import Emploi from '../assets/sidebar/Emploi';
import Evenements from '../assets/sidebar/Evénements';
import Forum from '../assets/sidebar/Forum';
import FSE from '../assets/sidebar/FSE';
import Market from '../assets/sidebar/Market';
import Paiements from '../assets/sidebar/Paiements';
import Patients from '../assets/sidebar/Patients';
import Prescriptions from '../assets/sidebar/Prescriptions';
import Reclammations from '../assets/sidebar/Réclamations';
import Statistiques from '../assets/sidebar/Statistiques';
import Suivis from '../assets/sidebar/Suivis';
import Dashboard from '../assets/sidebar/Dashboard';

import Menu from '../assets/action/Menu';
import Dotes from '../assets/action/Dotes';


import PatientstatIcon from '../assets/statCards/PatientstatCards';
import PrescriptionstatIcon from '../assets/statCards/PrescriptionstatCards';
import AbsencestatIcon from '../assets/statCards/AbsencestatCards';
import ReclamationstatIcon from '../assets/statCards/ReclamationstatCards';

// Export all assets
export const Assets = {
  Logo: require('../assets/logo/logo.png'), // Example PNG logo

  Icons: {
    Dashboard,
    Absences,
    Agenda,
    Annonces,
    Avis,
    Blog,
    Calendriers,
    DMP,
    Documents,
    Elearning,
    Emploi,
    Evenements,
    Forum,
    FSE,
    Market,
    Paiements,
    Patients,
    Prescriptions,
    Reclammations,
    Statistiques,
    Suivis,
  },

  statCards  :{
    PatientstatIcon,
    PrescriptionstatIcon,
    AbsencestatIcon,
    ReclamationstatIcon,
  },

  Action:{
    Menu,
    Dotes
  },
};

export default Assets;
