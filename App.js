import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import KitScreen from './screens/KitScreen';
import GuiasScreen from './screens/GuiasScreen';
import FerramentasScreen from './screens/FerramentasScreen';
import ComunicacaoScreen from './screens/ComunicacaoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Início">
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Kit de Sobrevivência" component={KitScreen} />
        <Stack.Screen name="Guias" component={GuiasScreen} />
        <Stack.Screen name="Ferramentas" component={FerramentasScreen} />
        <Stack.Screen name="Comunicação Offline" component={ComunicacaoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
