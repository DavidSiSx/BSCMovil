// src/screens/ServiciosScreen.js
import React, { useContext, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import { ItemsContext } from '../context/ItemsContext';

export default function ServiciosScreen({ navigation }) {
  const { serviceItems, deleteServiceItem } = useContext(ItemsContext);
  const [search, setSearch] = useState('');

  const filteredServices = serviceItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name={item.icon} size={28} color={item.color} style={{ marginRight: 8 }} />
        <View>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDetails}>
            {item.duration} | ${item.price}
          </Text>
          {item.description ? (
            <Text style={styles.itemDesc}>{item.description}</Text>
          ) : null}
        </View>
      </View>
      <View style={styles.cardActions}>
        <TouchableOpacity onPress={() => navigation.navigate('AddService', { mode: 'edit', service: item })}>
          <Ionicons name="create-outline" size={22} color="#fff" style={{ marginRight: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteServiceItem(item.id)}>
          <Ionicons name="trash-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        navigation={navigation}
        title="Servicios"
      />

      {/* Barra de búsqueda */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#ccc" />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar servicios"
          placeholderTextColor="#666"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Lista de servicios */}
      <FlatList
        data={filteredServices}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
      />

      {/* Botón Agregar */}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddService', { mode: 'new' })}>
        <Text style={styles.addButtonText}>Agregar Servicio</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
    margin: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    marginLeft: 8,
  },
  itemCard: {
    backgroundColor: '#1C1C1C',
    borderRadius: 8,
    marginBottom: 10,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDetails: {
    color: '#ccc',
    fontSize: 13,
  },
  itemDesc: {
    color: '#999',
    fontSize: 12,
    marginTop: 2,
  },
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#F39C12',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
