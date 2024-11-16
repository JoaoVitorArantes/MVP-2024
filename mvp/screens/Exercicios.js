import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ExercicioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercícios</Text>
      <Text style={styles.question}>
        (IFAL 2017) O salário mínimo previsto para 2017 será de R$ 946,00. Qual
        é o percentual de reajuste em relação ao salário mínimo de 2016 sabendo
        que neste ano seu valor é de R$ 880,00?
      </Text>
      <Button title="A) 5,5%" onPress={() => alert('Resposta incorreta')} />
      <Button title="B) 6,5%" onPress={() => alert('Resposta incorreta')} />
      <Button title="C) 7,5%" onPress={() => alert('Resposta correta!')} />
      <Button title="D) 8,5%" onPress={() => alert('Resposta incorreta')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  question: { fontSize: 16, marginBottom: 20 },
});
