// src/screens/AddProductScreen.js
import React, { useState, useContext } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import { ItemsContext } from '../context/ItemsContext';
import { ioniconsList, colorList } from '../constants/IconsAndColors';

export default function AddProductScreen({ navigation, route }) {
  const { mode, product } = route.params || {}; // mode: 'new' o 'edit'
  const { addInventoryItem, updateInventoryItem } = useContext(ItemsContext);

  const [itemName, setItemName] = useState(product?.name || '');
  const [itemPrice, setItemPrice] = useState(product?.price?.toString() || '');
  const [itemQuantity, setItemQuantity] = useState(product?.quantity?.toString() || '');
  const [itemIcon, setItemIcon] = useState(product?.icon || 'cart-outline');
  const [iconColor, setIconColor] = useState(product?.color || '#F39C12');

  const handleSave = () => {
    if (!itemName || !itemPrice || !itemQuantity) {
      alert('Completa los campos');
      return;
    }
    const newItem = {
      id: product ? product.id : Date.now(),
      name: itemName,
      price: parseFloat(itemPrice),
      quantity: parseInt(itemQuantity, 10),
      icon: itemIcon,
      color: iconColor,
    };

    if (mode === 'edit') {
      updateInventoryItem(newItem);
    } else {
      addInventoryItem(newItem);
    }
    // Navega a la pantalla de Inventario
    navigation.navigate('Inventario');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        navigation={navigation}
        title={mode === 'edit' ? 'Editar Producto' : 'Nuevo Producto'}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Producto A"
          placeholderTextColor="#666"
          value={itemName}
          onChangeText={setItemName}
        />
        <Text style={styles.label}>Precio</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. 99.99"
          placeholderTextColor="#666"
          keyboardType="numeric"
          value={itemPrice}
          onChangeText={setItemPrice}
        />
        <Text style={styles.label}>Unidades</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. 24"
          placeholderTextColor="#666"
          keyboardType="numeric"
          value={itemQuantity}
          onChangeText={setItemQuantity}
        />

        <Text style={styles.label}>Ícono</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.row}>
          {ioniconsList.slice(0, 10).map((iconObj) => (
            <TouchableOpacity
              key={iconObj.name}
              style={styles.iconButton}
              onPress={() => setItemIcon(iconObj.name)}
            >
              <Ionicons
                name={iconObj.name}
                size={26}
                color={iconObj.name === itemIcon ? iconColor : '#fff'}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.label}>Color</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.row}>
          {colorList.slice(0, 8).map((c) => (
            <TouchableOpacity
              key={c}
              style={[styles.colorBox, { backgroundColor: c }]}
              onPress={() => setIconColor(c)}
            >
              {iconColor === c && <Ionicons name="checkmark" size={20} color="#000" />}
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: '#555' }]}
            onPress={() => navigation.navigate('Inventario')}
          >
            <Text style={styles.btnText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: '#F39C12' }]}
            onPress={handleSave}
          >
            <Text style={styles.btnText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 30,
  },
  container: {
    padding: 16,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
    marginTop: 10,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1C1C1C',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
    flexWrap: 'wrap',
  },
  iconButton: {
    marginRight: 12,
    marginBottom: 8,
  },
  colorBox: {
    width: 30,
    height: 30,
    marginRight: 12,
    marginBottom: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
