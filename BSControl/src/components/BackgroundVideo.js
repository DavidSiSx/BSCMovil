// src/components/BackgroundVideo.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export default function BackgroundVideo() {
  return (
    <Video
      source={require('../../assets/video/BackgroundVideo.mp4')}
      style={StyleSheet.absoluteFillObject}
      resizeMode="cover"
      shouldPlay
      isLooping
      // isMuted // Descomenta si lo prefieres sin sonido
      pointerEvents="none"  // <-- Para que NO intercepte toques
    />
  );
}
