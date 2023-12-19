import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Card from './components/Card';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Eddard Stark" text="Winter is coming!!" />
      <Card title="Arif Işık" text="Halı kilim travel" />
      <Card title="Arıf Işık" text="Çıkarayımda savaş çıkarın demi" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
  },
});

export default App;
