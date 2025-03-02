// src/screens/InventarioScreen.js
import React, { useContext, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import { ItemsContext } from '../context/ItemsContext';

export default function InventarioScreen({ navigation }) {
  const { inventoryItems, deleteInventoryItem } = useContext(ItemsContext);
  const [search, setSearch] = useState('');

  const filteredItems = inventoryItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name={item.icon} size={28} color={item.color} style={{ marginRight: 8 }} />
        <View>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDetails}>
            ${item.price} | {item.quantity} unidades
          </Text>
        </View>
      </View>
      <View style={styles.cardActions}>
        <TouchableOpacity onPress={() => navigation.navigate('AddProduct', { mode: 'edit', product: item })}>
          <Ionicons name="create-outline" size={22} color="#fff" style={{ marginRight: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteInventoryItem(item.id)}>
          <Ionicons name="trash-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        navigation={navigation}
        title="Inventario"
        username="David"
        role="Admin"
        avatarUri="https://via.placeholder.com/40"
      />

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#ccc" />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar productos"
          placeholderTextColor="#666"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddProduct', { mode: 'new' })}>
        <Text style={styles.addButtonText}>Agregar Producto</Text>
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
