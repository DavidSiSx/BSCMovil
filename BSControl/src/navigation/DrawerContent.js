// src/navigation/DrawerContent.js
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Pressable 
} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DrawerContent(props) {
  const { navigation, state } = props;

  // Función auxiliar para saber si un DrawerItem está activo
  const isFocused = (routeName) => {
    // routeNames[state.index] es la pantalla actual
    return state.routeNames[state.index] === routeName;
  };

  return (
    <View style={styles.drawerContainer}>
      
      {/* Encabezado del Drawer (barra superior con "X") */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.closeDrawer()} style={styles.closeButton}>
          <Ionicons name="close" size={30} color="#fff" />
        </Pressable>
      </View>

      {/* Scroll con los items del Drawer */}
      <DrawerContentScrollView 
        {...props}
        contentContainerStyle={styles.contentScroll}
      >
        {/* Inicio */}
        <DrawerItem
          label="Inicio"
          icon={() => <Ionicons name="home-outline" size={20} color="#fff" />}
          onPress={() => navigation.navigate('Home')}
          // Estilos dinámicos según si está activo:
          style={[
            styles.menuItem, 
            isFocused('Home') && styles.activeItem
          ]}
          labelStyle={[
            styles.drawerLabel,
            isFocused('Home') && styles.activeLabel
          ]}
        />

        {/* Agendar */}
        <DrawerItem
          label="Agendar"
          icon={() => <Ionicons name="document-text-outline" size={20} color="#fff" />}
          onPress={() => navigation.navigate('Agendar')}
          style={[
            styles.menuItem, 
            isFocused('Agendar') && styles.activeItem
          ]}
          labelStyle={[
            styles.drawerLabel,
            isFocused('Agendar') && styles.activeLabel
          ]}
        />

        {/* Servicios */}
        <DrawerItem
          label="Servicios"
          icon={() => <Ionicons name="cut-sharp" size={20} color="#fff" />}
          onPress={() => navigation.navigate('Servicios')}
          style={[
            styles.menuItem, 
            isFocused('Servicios') && styles.activeItem
          ]}
          labelStyle={[
            styles.drawerLabel,
            isFocused('Servicios') && styles.activeLabel
          ]}
        />

        {/* Inventario */}
        <DrawerItem
          label="Inventario"
          icon={() => <Ionicons name="archive-outline" size={20} color="#fff" />}
          onPress={() => navigation.navigate('Inventario')}
          style={[
            styles.menuItem, 
            isFocused('Inventario') && styles.activeItem
          ]}
          labelStyle={[
            styles.drawerLabel,
            isFocused('Inventario') && styles.activeLabel
          ]}
        />

        {/* Lista de citas */}
        <DrawerItem
          label="Lista de citas"
          icon={() => <Ionicons name="list-circle-outline" size={20} color="#fff" />}
          onPress={() => navigation.navigate('ListaCitas')}
          style={[
            styles.menuItem, 
            isFocused('ListaCitas') && styles.activeItem
          ]}
          labelStyle={[
            styles.drawerLabel,
            isFocused('ListaCitas') && styles.activeLabel
          ]}
        />
      </DrawerContentScrollView>

      {/* Botón "Cerrar sesión" al final */}
      <Pressable 
        style={styles.logoutButton}
        onPress={() => {
          // Ejemplo: reinicia navegación para ir a Login
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        }}
      >
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#111' // Fondo oscuro
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,   // Ajusta según quieras bajarlo
    paddingHorizontal: 16,
    // Podrías añadir algo de margenBottom si deseas separarlo de los DrawerItems
  },
  closeButton: {
    width: 40,
    height: 40,
    justifyContent: 'center'
  },
  contentScroll: {
    marginTop: 10
  },
  menuItem: {
    // Estilo base para cada item
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 4
  },
  drawerLabel: {
    color: '#fff',  // Texto blanco por defecto
    fontSize: 16
  },
  activeItem: {
    backgroundColor: '#F39C12' // Fondo naranja si está activo
  },
  activeLabel: {
    color: '#fff',    // Texto blanco
    fontWeight: 'bold'
  },
  logoutButton: {
    backgroundColor: '#F39C12',
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 8,
    alignItems: 'center',
    padding: 14
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
