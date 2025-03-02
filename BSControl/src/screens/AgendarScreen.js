import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Header from '../components/Header';
import { AppointmentsContext } from '../context/AppointmentsContext';

export default function AgendarScreen({ navigation }) {
  const { addAppointment } = useContext(AppointmentsContext);

  // Campos del formulario
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [barbero, setBarbero] = useState('');
  const [servicio, setServicio] = useState('');
  const [horario, setHorario] = useState('');

  const handleAgendar = () => {
    if (!nombreCompleto || !correo || !telefono || !barbero || !servicio || !horario) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Crear objeto de cita (usando Date.now() como ID simple)
    const newAppointment = {
      id: Date.now(),
      nombreCompleto,
      correo,
      telefono,
      barbero,
      servicio,
      horario,
    };

    // Agregar la cita al contexto
    addAppointment(newAppointment);

    // Resetear campos
    setNombreCompleto('');
    setCorreo('');
    setTelefono('');
    setBarbero('');
    setServicio('');
    setHorario('');

    // Navegar a la pantalla de Citas
    navigation.navigate('ListaCitas');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header reutilizable */}
      <Header
        navigation={navigation}
        title="Agendar"
      />

      <ScrollView style={styles.form} contentContainerStyle={{ paddingBottom: 20 }}>
        <Text style={styles.label}>Nombre Completo</Text>
        <TextInput
          style={styles.input}
          value={nombreCompleto}
          onChangeText={setNombreCompleto}
          placeholder="Ej. Ana García"
          placeholderTextColor="#666"
        />

        <Text style={styles.label}>Correo</Text>
        <TextInput
          style={styles.input}
          value={correo}
          onChangeText={setCorreo}
          placeholder="Ej. ana@example.com"
          placeholderTextColor="#666"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Teléfono</Text>
        <TextInput
          style={styles.input}
          value={telefono}
          onChangeText={setTelefono}
          placeholder="Ej. 998252789"
          placeholderTextColor="#666"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Barbero</Text>
        <TextInput
          style={styles.input}
          value={barbero}
          onChangeText={setBarbero}
          placeholder="Ej. Ángel Gabriel"
          placeholderTextColor="#666"
        />

        <Text style={styles.label}>Servicio</Text>
        <TextInput
          style={styles.input}
          value={servicio}
          onChangeText={setServicio}
          placeholder="Ej. Corte Completo"
          placeholderTextColor="#666"
        />

        <Text style={styles.label}>Horario</Text>
        <TextInput
          style={styles.input}
          value={horario}
          onChangeText={setHorario}
          placeholder="Ej. 08/10/25 - 10:00 AM"
          placeholderTextColor="#666"
        />

        <TouchableOpacity style={styles.button} onPress={handleAgendar}>
          <Text style={styles.buttonText}>Agendar cita</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 30 // Usa el mismo padding que en HomeScreen
  },
  form: {
    flex: 1,
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
  button: {
    backgroundColor: '#F39C12',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
