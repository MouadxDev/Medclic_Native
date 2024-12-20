// sidebarData.js

const sidebarData = [
    { icon: 'Dashboard', route: 'Home' },
    {
      section: 'Administration',
      items: [
        { icon: 'Patients', route: 'MyPatientsScreen' },
        { icon: 'Agenda', route: 'Agenda' },
        { icon: 'Documents', route: 'Documents' },
        { icon: 'Calendriers', route: 'Calendriers' },
        { icon: 'Suivis', route: 'Suivis' },
        { icon: 'Prescriptions', route: 'Prescriptions' },
        { icon: 'Absences', route: 'Absences' },
        { icon: 'Réclamations', route: 'Reclamations' },
        { icon: 'DMP', route: 'DMP' },
        { icon: 'FSE', route: 'FSE' },
        { icon: 'Paiements', route: 'Paiements' },
        { icon: 'Statistiques', route: 'Statistiques' },
        { icon: 'Consultation', route: 'ConsultationScreen' },
      ],
    },
    {
      section: 'Communauté',
      items: [
        { icon: 'Forum', route: 'Forum' },
        { icon: 'Annonces', route: 'Annonces' },
        { icon: 'Evénements', route: 'Evenements' },
        { icon: 'Blog', route: 'Blog' },
        { icon: 'Avis', route: 'Avis' },
        { icon: 'Market', route: 'Market' },
        { icon: 'Emploi', route: 'Emploi' },
        { icon: 'Elearning', route: 'E-learning' },
      ],
    },
  ];
  
  export default sidebarData;
  