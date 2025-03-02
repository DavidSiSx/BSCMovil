// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';

// Para Reanimated (en proyectos con CLI). Con Expo suele bastar:
import 'react-native-gesture-handler';

// Importa el Provider
import { AppointmentsProvider } from './src/context/AppointmentsContext';
import { ItemsProvider } from './src/context/ItemsContext';

export default function App() {
  return (
    <AppointmentsProvider>
      <ItemsProvider>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </ItemsProvider>
    </AppointmentsProvider>
  );
}
