import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ModuleScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Ana Helena! Seja bem vinda,</Text>
      <Text style={styles.title}>Módulo I - Conteúdos</Text>
      <Text style={styles.subtitle}>O que é porcentagem? Vamos descobrir!</Text>
      <Button
        title="Exercícios"
        onPress={() => navigation.navigate('Exercise')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  welcome: { fontSize: 18, marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 20 },
});
