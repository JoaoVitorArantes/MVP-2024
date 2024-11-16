import React from 'react';
//import { View, Image, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import CadastroScreen from './screens/Cadastro';
import NivelScreen from './screens/Nivel';
import ModuloScreen from './screens/Modulo';
import ExercicioScreen from './screens/Exercicios';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={CadastroScreen} 
          options={{ title: 'Criar Conta' }} 
        />
        <Stack.Screen 
          name="SelectLevel" 
          component={NivelScreen} 
          options={{ title: 'Seleção de Nível' }} 
        />
        <Stack.Screen 
          name="Module" 
          component={ModuloScreen} 
          options={{ title: 'Módulo de Conteúdo' }} 
        />
        <Stack.Screen 
          name="Exercise" 
          component={ExercicioScreen} 
          options={{ title: 'Exercícios' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}



