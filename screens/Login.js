import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen({ navigation }) {
  return (
    <>
    
    <View style={styles.container}>
    <SafeAreaView>
    <Image
        style={styles.containerlogo}
        source={require('./Imagens/logo2.png')}
      />
      
      <Text style={styles.title}>Login</Text>
      
      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        style={styles.input}
        keyboardType="email-address"
      />
      
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#888"
        style={styles.input}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('SelectLevel')}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpText}>Ainda não tem conta?    Criar conta</Text>
      </TouchableOpacity>
      </SafeAreaView>
    </View>
    
    </>
  );
}


const styles = StyleSheet.create({
  containerlogo: {
    flex: 1,
    alignItems: 'flex-end',
    alignSelf: 'center', 
    justifyContent: 'center',
    width: 100, 
    height: 100,
    padding: 100,
    marginBottom: 50,
    backgroundColor: '#f5f5f5',
    
  },
  

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#f5f5f5', // Fundo claro
    position: "relative"
    
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333', // Cor de título
    textAlign: 'left',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc', // Borda leve
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  forgotPasswordButton: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#007BFF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#f69e02',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 25,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpText: {
    color: '#555',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
});
