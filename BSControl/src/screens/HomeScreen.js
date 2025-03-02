// src/screens/HomeScreen.js
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';

export default function HomeScreen({ navigation }) {
  // Datos ficticios
  const totalGanancias = 45231.89;
  const variacionGanancias = '+20.1%';
  const totalInventario = 2345;
  const cantidadProductos = 145;

  const servicios = [
    {
      id: 1,
      nombre: 'Corte Clásico',
      desc: 'Corte de cabello profesional adaptado a tu estilo y gusto, incluye lavado y styling.'
    },
    {
      id: 2,
      nombre: 'Barba Tradicional',
      desc: 'Afeitado y arreglo de barba con productos de calidad.'
    },
    {
      id: 3,
      nombre: 'Corte Moderno',
      desc: 'Estilos de vanguardia, degradados y técnicas actuales.'
    }
  ];

  const productos = [
    { id: 1, nombre: 'Producto A', sku: 'PRD-001', stock: 24, precio: 99.99 },
    { id: 2, nombre: 'Producto B', sku: 'PRD-002', stock: 10, precio: 59.99 },
    { id: 3, nombre: 'Producto C', sku: 'PRD-003', stock: 0,  precio: 79.99 },
    { id: 4, nombre: 'Producto D', sku: 'PRD-004', stock: 12, precio: 129.99 },
    { id: 5, nombre: 'Producto E', sku: 'PRD-005', stock: 15, precio: 89.99 },
    { id: 6, nombre: 'Producto F', sku: 'PRD-006', stock: 6,  precio: 49.99 }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Reutilizamos el header */}
      <Header
        navigation={navigation}
        title="Inicio"
       
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Tarjetas superiores: Ganancias e Inventario */}
        <View style={styles.topCardsContainer}>
          <View style={styles.topCard}>
            <Ionicons name="cash-outline" size={24} color="#fff" />
            <Text style={styles.topCardLabel}>Ganancias totales</Text>
            <Text style={styles.topCardValue}>
              ${totalGanancias.toLocaleString()}
              <Text style={{ color: 'green', fontSize: 14 }}> {variacionGanancias}</Text>
            </Text>
          </View>

          <View style={styles.topCard}>
            <Ionicons name="archive-outline" size={24} color="#fff" />
            <Text style={styles.topCardLabel}>Inventario</Text>
            <Text style={styles.topCardValue}>
              {totalInventario.toLocaleString()}
              <Text style={{ color: '#ccc', fontSize: 14 }}> ({cantidadProductos} productos)</Text>
            </Text>
          </View>
        </View>

        {/* Sección SERVICIOS */}
        <Text style={styles.sectionTitle}>Servicios</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {servicios.map((serv) => (
            <View key={serv.id} style={styles.serviceCard}>
              <View style={styles.serviceHeader}>
                <Text style={styles.serviceTitle}>{serv.nombre}</Text>
                <Ionicons name="cut-sharp" size={18} color="#fff" style={{ marginLeft: 5 }} />
              </View>
              <Text style={styles.serviceDesc}>{serv.desc}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Sección INVENTARIO */}
        <Text style={styles.sectionTitle}>Inventario</Text>
        <View style={styles.inventoryContainer}>
          {productos.map((prod) => (
            <View key={prod.id} style={styles.productCard}>
              <View style={styles.productHeader}>
                <Text style={styles.productName}>{prod.nombre}</Text>
                <Ionicons name="cube-outline" size={18} color="#fff" style={{ marginLeft: 5 }} />
              </View>
              <Text style={styles.productSku}>{prod.sku}</Text>
              <Text style={styles.productStock}>Stock: {prod.stock}</Text>
              <Text style={styles.productPrice}>${prod.precio.toFixed(2)}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 30 // Ajusta este valor según el margen que necesites
  },
  scrollContent: {
    padding: 16
  },
  topCardsContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  topCard: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    borderRadius: 8,
    padding: 16,
    marginRight: 10,
    alignItems: 'flex-start'
  },
  topCardLabel: {
    color: '#ccc',
    marginTop: 8,
    fontSize: 14
  },
  topCardValue: {
    color: '#fff',
    marginTop: 4,
    fontSize: 18,
    fontWeight: 'bold'
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold'
  },
  serviceCard: {
    width: 180,
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    padding: 12,
    marginRight: 10
  },
  serviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6
  },
  serviceTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  serviceDesc: {
    color: '#ccc',
    fontSize: 13
  },
  inventoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  productCard: {
    width: '48%',
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    padding: 10,
    margin: '1%'
  },
  productHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4
  },
  productName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },
  productSku: {
    color: '#ccc',
    fontSize: 12
  },
  productStock: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 2
  },
  productPrice: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 2
  }
});
