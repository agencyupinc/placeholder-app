import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Internal Validation Build</Text>
      <Text style={styles.subtitle}>Status: Active development testing phase.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f2f5' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1a73e8', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#4a4a4a' },
});
