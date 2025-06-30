import React, { useEffect, useState } from'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from'react-native';
import Assets from '../components/Assets';
import { DynamicTable } from '../components';

const FseDetailsScreen = ({ route }) => {
  const { id } = route.params || {};

  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [collapsedPharmacie, setCollapsedPharmacie] = useState(false);
  const [collapsedMedecin, setCollapsedMedecin] = useState(false);
  
  const columns_pharm = [
    { key: 'articleVendu', label: 'Article Vendu' },
    { key: 'presentation', label: 'Présentation' },
    { key: 'prix', label: 'Prix' },
    { key: 'quantite', label: 'Quantité' },
  ];

  const columns_med_1 = [
    { key: 'act', label: 'Acte' },
    { key: 'tnr', label: 'TNR' },
    { key: 'prix', label: 'Prix' },
    { key: 'br', label: 'BR' },
  ];
  const columns_med_2 = [
    { key: 'medi', label: 'Médicament' },
    { key: 'indic', label: 'Indication' },
    { key: 'qtotale', label: 'Qté totale' },
    { key: 'qdeliv', label: 'Qté délivrée' },
  ];
  



  // Fetch details based on the ID
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        // Simulate API call to fetch data by ID
        const mockData = {
          dossier: id,
          date: '2024-03-12',
          assure: 'Radi Amine',
          beneficiaire: 'Radi Amine',
          montant: '214.00 Dhs',
          dateinfo: '24/03/2024',
          status: 'Remboursement partiel',
          details: [
            {
              type: 'Pharmacie',
              professionnel: 'Dr Alami Karim',
              montant: '230.00 Dhs',
              tansmisLe: '12/03/2024',
              status: 'Demande',
              codeTOTP: '3989',
              data: [
                {
                  "articleVendu": "Doliprane",
                  "presentation": "Paracetamol 1000mg - Pain relief and fever reducer",
                  "prix": 4.99,
                  "quantite": 20
                },
                {
                  "articleVendu": "Amoxicillin",
                  "presentation": "Antibiotic 500mg - Used for bacterial infections",
                  "prix": 12.50,
                  "quantite": 50
                },
                {
                  "articleVendu": "Ibuprofen",
                  "presentation": "Anti-inflammatory 200mg - Pain relief for headaches and muscle pain",
                  "prix": 8.75,
                  "quantite": 30
                }
              ]
            },
            {
              type: 'Médecin',
              professionnel: 'Dr Alami Karim',
              montant: '230.00 Dhs',
              acte: 'Consultation',
              status: 'Demande',
              Service: [
                {
                  "act": "Consultation",
                  "tnr":150, 
                  "prix": 200,
                  "br": 70
                },
              ],
              Medication :[
                {
                  "medi": "DOLIPRANE Comprimé 1 g",
                  "indic":"Arthrose", 
                  "qtotale": 5,
                  "qdeliv": 10
                }
              ]

              
            },
          ],
        };

        if (id!== 'FSE080447') {
          throw new Error('Details not found for the provided ID:' + id);
        }
        
        setDetails(mockData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  const togglePharmacie = () => setCollapsedPharmacie(!collapsedPharmacie);
  const toggleMedecin = () => setCollapsedMedecin(!collapsedMedecin);

  if (loading) {
    return <ActivityIndicator style={styles.center} size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardPrimary}>
        <View style={styles.FolderSectionContainer}>
          <Assets.Svgs.FolderSvg />
          <View>
            <Text style={styles.primaryText}>{details.dossier}</Text>
            <View style={styles.FolderSectionContainer2}>
              <Assets.Svgs.calenderSvg />
              <Text style={styles.secondaryText}>Transmis le : {details.date}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <Assets.Svgs.Usersvg />
              <Text style={styles.infoLabel}>Assuré</Text>
            </View>
            <Text style={styles.infoValue}>{details.assure}</Text>
          </View>

          <View style={styles.separator} />

          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <Assets.Svgs.Usersvg />
              <Text style={styles.infoLabel}>Statut</Text>
            </View>
            <View style={styles.statusContainer}>
              <View style={styles.statusCircle} />
              <Text style={[styles.infoValue, styles.statusValue]}>{details.status}</Text>
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <Assets.Svgs.Usersvg />
              <Text style={styles.infoLabel}>Bénéficiaire</Text>
            </View>
            <Text style={styles.infoValue}>{details.beneficiaire}</Text>
          </View>

          <View style={styles.separator} />

          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <Assets.Svgs.Usersvg />
              <Text style={styles.infoLabel}>N° Assuré</Text>
            </View>
            <Text style={styles.infoValue}>080447</Text>
          </View>

          <View style={styles.separator} />

          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <Assets.Svgs.Usersvg />
              <Text style={styles.infoLabel}>Montant</Text>
            </View>
            <Text style={styles.infoValue}>{details.montant}</Text>
          </View>

          <View style={styles.separator} />

          <View style={styles.infoRow}>
            <View style={styles.labelContainer}>
              <Assets.Svgs.Usersvg />
              <Text style={styles.infoLabel}>Date</Text>
            </View>
            <Text style={styles.infoValue}>{details.dateinfo}</Text>
          </View>
        </View>
      </View>

      {details.details.map((detail, index) => (
        <View key={index} style={styles.detailCard}>
          {detail.type === 'Pharmacie' && (
            <View style={styles.pharmacieCard}>
              <TouchableOpacity style={styles.pharmacieHeader} onPress={togglePharmacie} activeOpacity={0.7}>
                <View style={styles.headerLeft}>
                  <Assets.Svgs.FolderSvg />
                  <Text style={styles.pharmacieTitle}>Pharmacie</Text>
                </View>
                <View style={[styles.chevron, collapsedPharmacie && styles.chevronUp]}>
                  <Assets.Action.UpdownIcon />

                </View>
              </TouchableOpacity>

              {collapsedPharmacie && (
                <View style={styles.pharmacieContent}>
                  <View style={styles.infoRow}>
                    <View style={styles.labelContainer}>
                      <Assets.Svgs.Usersvg />
                      <Text style={styles.infoLabel}>Professionnel</Text>
                    </View>
                    <Text style={styles.infoValue}>{detail.professionnel}</Text>
                  </View>

                  <View style={styles.separator} />

                  <View style={styles.infoRow}>
                    <View style={styles.labelContainer}>
                      <Assets.Svgs.Usersvg />
                      <Text style={styles.infoLabel}>Montant</Text>
                    </View>
                    <Text style={styles.infoValue}>{detail.montant}</Text>
                  </View>

                  <View style={styles.separator} />

                  <View style={styles.infoRow}>
                    <View style={styles.labelContainer}>
                      <Assets.Svgs.Usersvg />
                      <Text style={styles.infoLabel}>Transmis le</Text>
                    </View>
                    <Text style={styles.infoValue}>{detail.tansmisLe}</Text>
                  </View>

                  <View style={styles.separator} />

                  <View style={styles.infoRow}>
                    <View style={styles.labelContainer}>
                      <Assets.Svgs.Usersvg />
                      <Text style={styles.infoLabel}>Statut</Text>
                    </View>
                    <View style={styles.statusContainer}>
                      <View style={styles.statusCircleOrange} />
                      <Text style={[styles.infoValue, styles.statusValueOrange]}>{detail.status}</Text>
                    </View>
                  </View>

                <View style={styles.TableContainer}>
                    <DynamicTable
                        columns={columns_pharm}
                        data={detail.data}
                        Actions={false}
                        CalledBy="FseDetailsScreen"
                        shadowEffect={false}
                    />
                </View>

                </View>
              )}
         
            </View>
          )}

          {detail.type === 'Médecin' && (
            <View style={styles.medecinCard}>
              <TouchableOpacity style={styles.medecinHeader} onPress={toggleMedecin} activeOpacity={0.7}>
                <View style={styles.headerLeft}>
                  <Assets.Svgs.FolderSvg />
                  <Text style={styles.medecinTitle}>Médecin</Text>
                </View>
                <View style={[styles.chevron,!collapsedMedecin && styles.chevronUp]}>
                    <Assets.Action.UpdownIcon />
                </View>
              </TouchableOpacity>

              {collapsedMedecin && (
                <View style={styles.medecinContent}>
                  <View style={styles.infoRow}>
                    <View style={styles.labelContainer}>
                      <Assets.Svgs.Usersvg />
                      <Text style={styles.infoLabel}>Professionnel</Text>
                    </View>
                    <Text style={styles.infoValue}>{detail.professionnel}</Text>
                  </View>

                  <View style={styles.separator} />

                  <View style={styles.infoRow}>
                    <View style={styles.labelContainer}>
                      <Assets.Svgs.Usersvg />
                      <Text style={styles.infoLabel}>Acte</Text>
                    </View>
                    <Text style={styles.infoValue}>{detail.acte}</Text>
                  </View>

                  <View style={styles.separator} />

                  <View style={styles.infoRow}>
                    <View style={styles.labelContainer}>
                      <Assets.Svgs.Usersvg />
                      <Text style={styles.infoLabel}>Montant</Text>
                    </View>
                    <Text style={styles.infoValue}>{detail.montant}</Text>
                  </View>

                  <View style={styles.separator} />

                  <View style={styles.infoRow}>
                    <View style={styles.labelContainer}>
                      <Assets.Svgs.Usersvg />
                      <Text style={styles.infoLabel}>Acte</Text>
                    </View>
                    <Text style={styles.infoValue}>{detail.acte}</Text>
                  </View>

                  <View style={styles.separator} />

                    <View style={styles.infoRow}>
                      <View style={styles.labelContainer}>
                        <Assets.Svgs.Usersvg />
                        <Text style={styles.infoLabel}>Statut</Text>
                      </View>
                      <View style={styles.statusContainer}>
                        <View style={styles.statusCircleOrange} />
                        <Text style={[styles.infoValue, styles.statusValueOrange]}>{detail.status}</Text>
                      </View>
                    </View>

                      <View style={styles.TableContainer}>
                        <DynamicTable
                            columns={columns_med_1}
                            data={detail.Service}
                            Actions={false}
                            CalledBy="FseDetailsScreen"
                            shadowEffect={false}
                        />
                        <DynamicTable
                            columns={columns_med_2}
                            data={detail.Medication}
                            Actions={false}
                            CalledBy="FseDetailsScreen"
                            shadowEffect={false}
                        />
                    </View>
                </View>
              )}
   
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  TableContainer:{
    paddingTop:12,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardPrimary: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  primaryText: {
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
    marginBottom:3,
  },
  secondaryText: {
    color: '#667085',
    fontSize: 14,
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  infoLabel: {
    fontSize: 14,
    marginVertical: 8,
    color: '#667085',
  },
  infoValue: {
    fontSize: 13,
    color: '#333333',
  },
  statusLabel: {
    color: '#dc3545',
  },
  statusValue: {
    color: '#dc3545',
    fontWeight: '600',
  },
  statusValueOrange: {
    color: '#F3B414',
    fontWeight: '600',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  FolderSectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  FolderSectionContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    gap: 2,
  },  
  statusCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#E40D0D',
    borderWidth: 3,
    borderColor: 'rgba(228, 13, 13, 0.28)',
    marginRight: 8,
  },
  statusCircleOrange: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#F3B414',
    borderWidth: 3,
    borderColor: 'rgba(243,180,20,0.5)',
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  error: {
    color:'red',
    fontSize: 16,
  },
  articlesContainer: {
    paddingLeft: 20,
  },
  pharmacieCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  pharmacieHeader: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center', 
    gap: 12,
  },
  pharmacieTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  chevron: {
    padding: 4,
    transform: [{ rotate: '0deg' }],
  },
  chevronUp: {
    transform: [{ rotate: '180deg' }],
  },
 
  pharmacieContent: {
    padding: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 8,
  },
  medecinCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  medecinHeader: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  medecinTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  medecinContent: {
    padding: 16,
  },
});

export default FseDetailsScreen;
