// src/components/Header.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AnimatedHamburger from './AnimatedHamburger';

export default function Header({
  navigation,
  title = "",
  username = "David",
  role = "Admin",
  avatarUri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_EE6fFG_tUQj2Muma72t4gtzwlzAghTUkQ&s'
}) {
  return (
    <View style={styles.header}>
      <AnimatedHamburger navigation={navigation} />
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.userContainer}>
        <View style={styles.userText}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.userRole}>{role}</Text>
        </View>
        <Image source={{ uri: avatarUri }} style={styles.avatar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 60,
    paddingHorizontal: 16,
    justifyContent: 'space-between'
  },
  headerTitle: {
    color: '#F39C12',
    fontSize: 20,
    fontWeight: 'bold'
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userText: {
    alignItems: 'flex-end',
    marginRight: 8
  },
  username: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  userRole: {
    color: '#ccc',
    fontSize: 12
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  }
});
