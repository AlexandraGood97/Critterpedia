import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Insect from './components/insects';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Insects */}
      <View style={styles.insectWrapper}>
        <View style={styles.items}>
          {/* This is where insect list will go */}
          <Insect text={'Common Butterfly'}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3ECC1',
  },
insectWrapper: {
  paddingTop: 80,
},
sectionTitle: {
  fontSize: 24,
}
});
