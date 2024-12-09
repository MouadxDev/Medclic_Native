import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Assets from '../Assets';


export default function StatCards({ cards }) {
  return (
    <View style={styles.container}>
      {cards.map((card, index) => {
        const IconComponent = Assets.statCards[card.icon]; // Dynamically retrieve the icon component
        return (
          <View key={index} style={[styles.card, { backgroundColor: card.color }]}>
            {IconComponent && (
              <IconComponent width={40} height={40} color="#fff" style={styles.icon} />
            )}
            <View>
              <Text style={styles.count}>{card.count}</Text>
              <Text style={styles.label}>{card.label}</Text>
              
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Arrange cards vertically
    padding: 10,
  },
  card: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Center items vertically
    marginVertical: 5, // Add spacing between cards
    padding: 15,
    borderRadius: 8,
  },
  icon: {
    marginRight: 15, // Space between icon and text
  },
  count: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  label: {
    fontSize: 14,
    color: '#fff',
  },
});



// old code
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Assets from '../Assets';

// export default function StatCards({ cards }) {
//   return (
//     <View style={styles.container}>
//       {cards.map((card, index) => {
//         const IconComponent = Assets.statCards[card.icon]; // Dynamically retrieve the icon component
//         return (
//           <View key={index} style={[styles.card, { backgroundColor: card.color }]}>
//             {IconComponent && (
//               <IconComponent width={31} height={35} color="#fff" style={styles.icon} />
//             )}
//             <View>
//               <Text style={styles.count}>{card.count}</Text>
//               <Text style={styles.label}>{card.label}</Text>
//             </View>
//           </View>
//         );
//       })}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row', // Arrange cards horizontally
//     flexWrap: 'wrap', // Allow wrapping to the next row
//     justifyContent: 'space-between', // Add spacing between items
//     padding: 10,
//   },
//   card: {
//     width: '48%', // Two cards per row with a small gap
//     flexDirection: 'row', // Align icon and text horizontally
//     alignItems: 'center', // Center items vertically
//     marginBottom: 10, // Space between rows
//     padding: 10,
//     borderRadius: 8,
//   },
//   icon: {
//     marginRight: 8, // Space between icon and text
//   },
//   count: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   label: {
//     fontSize: 14,
//     color: '#fff',
//   },
// });
