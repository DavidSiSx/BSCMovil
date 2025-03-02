// src/navigation/AppNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Pantallas principales
import HomeScreen from '../screens/HomeScreen';
import AgendarScreen from '../screens/AgendarScreen';
import ServiciosScreen from '../screens/ServiciosScreen';
import InventarioScreen from '../screens/InventarioScreen';
import CitasScreen from '../screens/CitasScreen';

// Drawer personalizado
import DrawerContent from './DrawerContent';

// Pantallas adicionales (para agregar/editar), que no se mostrarán en el Drawer
import AddProductScreen from '../screens/AddProductScreen';
import AddServiceScreen from '../screens/AddServiceScreen';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        // Puedes ajustar el ancho del Drawer si lo deseas:
        // drawerStyle: { width: 280 }
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Agendar" component={AgendarScreen} />
      <Drawer.Screen name="Servicios" component={ServiciosScreen} />
      <Drawer.Screen name="Inventario" component={InventarioScreen} />
      <Drawer.Screen name="ListaCitas" component={CitasScreen} />

      {/* Rutas ocultas en el Drawer */}
      <Drawer.Screen 
        name="AddProduct" 
        component={AddProductScreen}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen 
        name="AddService" 
        component={AddServiceScreen}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
          drawerItemStyle: { height: 0 },
        }}
      />
    </Drawer.Navigator>
  );
}
