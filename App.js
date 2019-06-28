import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components';

export default function App() {
  return (
    <View>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});