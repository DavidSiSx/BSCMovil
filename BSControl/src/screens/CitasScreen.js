import React, { useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import { AppointmentsContext } from '../context/AppointmentsContext';

export default function CitasScreen({ navigation }) {
  const { appointments, deleteAppointment } = useContext(AppointmentsContext);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.cardName}>{item.nombreCompleto}</Text>
        <Text style={styles.cardInfo}>Barbero: {item.barbero}</Text>
        <Text style={styles.cardInfo}>Servicio: {item.servicio}</Text>
        <Text style={styles.cardInfo}>Tel: {item.telefono}</Text>
        <Text style={styles.cardInfo}>Fecha/Hora: {item.horario}</Text>
      </View>
      <View style={styles.cardActions}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => alert('Funcionalidad de editar pendiente')}
        >
          <Ionicons name="create-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => deleteAppointment(item.id)}
        >
          <Ionicons name="trash-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header reutilizable */}
      <Header
        navigation={navigation}
        title="Citas"
      />

      <View style={styles.container}>
        <Text style={styles.title}>Lista de citas</Text>
        {appointments.length === 0 ? (
          <Text style={styles.noCitas}>No hay citas agendadas</Text>
        ) : (
          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 30, // Mismo margen que en HomeScreen
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    color: '#F39C12',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  noCitas: {
    color: '#fff',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#1C1C1C',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
  },
  cardName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardInfo: {
    color: '#ccc',
    fontSize: 13,
    marginBottom: 3,
  },
  cardActions: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10,
  },
  iconButton: {
    marginVertical: 4,
  },
});
