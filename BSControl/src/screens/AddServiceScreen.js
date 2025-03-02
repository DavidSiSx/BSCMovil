// src/screens/AddServiceScreen.js
import React, { useState, useContext } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import { ItemsContext } from '../context/ItemsContext';
import { ioniconsList, colorList } from '../constants/IconsAndColors';

export default function AddServiceScreen({ navigation, route }) {
  const { mode, service } = route.params || {}; // mode: 'new' o 'edit'
  const { addServiceItem, updateServiceItem } = useContext(ItemsContext);

  const [serviceName, setServiceName] = useState(service?.name || '');
  const [servicePrice, setServicePrice] = useState(service?.price?.toString() || '');
  const [serviceDuration, setServiceDuration] = useState(service?.duration || '');
  const [serviceDesc, setServiceDesc] = useState(service?.description || '');
  const [serviceIcon, setServiceIcon] = useState(service?.icon || 'cut-sharp');
  const [iconColor, setIconColor] = useState(service?.color || '#F39C12');

  const handleSave = () => {
    if (!serviceName || !servicePrice || !serviceDuration) {
      alert('Completa los campos obligatorios');
      return;
    }
    const newService = {
      id: service ? service.id : Date.now(),
      name: serviceName,
      price: parseFloat(servicePrice),
      duration: serviceDuration,
      description: serviceDesc,
      icon: serviceIcon,
      color: iconColor,
    };

    if (mode === 'edit') {
      updateServiceItem(newService);
    } else {
      addServiceItem(newService);
    }
    // Navega a la pantalla de Servicios
    navigation.navigate('Servicios');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        navigation={navigation}
        title={mode === 'edit' ? 'Editar Servicio' : 'Nuevo Servicio'}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Corte Moderno"
          placeholderTextColor="#666"
          value={serviceName}
          onChangeText={setServiceName}
        />

        <Text style={styles.label}>Precio</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. 59.99"
          placeholderTextColor="#666"
          keyboardType="numeric"
          value={servicePrice}
          onChangeText={setServicePrice}
        />

        <Text style={styles.label}>Duración</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. 45 min"
          placeholderTextColor="#666"
          value={serviceDuration}
          onChangeText={setServiceDuration}
        />

        <Text style={styles.label}>Descripción (opcional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Detalles del servicio..."
          placeholderTextColor="#666"
          value={serviceDesc}
          onChangeText={setServiceDesc}
        />

        {/* Selección de ícono */}
        <Text style={styles.label}>Ícono</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.row}>
          {ioniconsList.slice(10, 20).map((iconObj) => (
            <TouchableOpacity
              key={iconObj.name}
              style={styles.iconButton}
              onPress={() => setServiceIcon(iconObj.name)}
            >
              <Ionicons
                name={iconObj.name}
                size={26}
                color={iconObj.name === serviceIcon ? iconColor : '#fff'}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Selección de color */}
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

        {/* Botones */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: '#555' }]}
            onPress={() => navigation.navigate('Servicios')}
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
