import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import IMCApp from './src/IMCApp';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Cálculo de IMC</Text>
      </View>
      <IMCApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 100,
    marginHorizontal: 20
  },
  textHeader: {
    alignSelf: 'center'
  },
  
});
