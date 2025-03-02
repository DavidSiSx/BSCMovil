// src/screens/LoginScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';
import BackgroundVideo from '../components/BackgroundVideo';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      navigation.replace('App'); 
    } else {
      alert('Por favor ingresa email y contraseña.');
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Video de fondo, sin interceptar toques */}
      <BackgroundVideo />

      {/* Capa semitransparente para oscurecer */}
      <View style={styles.overlay} />

      <View style={styles.formContainer}>
        {/* LOGO arriba */}
        <Image
          source={require('../../assets/logo.png')} // Ajusta la ruta
          style={styles.logo}
        />

        <Text style={styles.title}>BSControl</Text>

        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#ccc"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#ccc"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkText}>¿No tienes cuenta? Regístrate</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  formContainer: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 120,
    marginBottom: 20,
    // Ajusta a tu gusto
  },
  title: {
    fontSize: 26,
    color: '#fff',
    marginBottom: 30,
    fontWeight: 'bold'
  },
  input: {
    width: '80%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8
  },
  button: {
    width: '80%',
    backgroundColor: '#F39C12',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  linkText: {
    color: '#F39C12',
    marginTop: 15,
    textDecorationLine: 'underline'
  }
});

