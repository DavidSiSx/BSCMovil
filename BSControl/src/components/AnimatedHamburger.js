// src/components/AnimatedHamburger.js
import React, { useState, useEffect } from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated';

export default function AnimatedHamburger({ navigation }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const progress = useSharedValue(0);

  const handlePress = () => {
    if (!drawerOpen) {
      navigation.openDrawer();
      setDrawerOpen(true);
      progress.value = withTiming(1, { duration: 300 });
    } else {
      navigation.closeDrawer();
      setDrawerOpen(false);
      progress.value = withTiming(0, { duration: 300 });
    }
  };

  useEffect(() => {
    const openSub = navigation.addListener('drawerOpen', () => {
      if (!drawerOpen) {
        setDrawerOpen(true);
        progress.value = withTiming(1, { duration: 300 });
      }
    });

    const closeSub = navigation.addListener('drawerClose', () => {
      if (drawerOpen) {
        setDrawerOpen(false);
        progress.value = withTiming(0, { duration: 300 });
      }
    });

    return () => {
      openSub();
      closeSub();
    };
  }, [navigation, drawerOpen, progress]);

  const topBarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: progress.value * 6 },
        { rotateZ: `${progress.value * 45}deg` }
      ]
    };
  });

  const middleBarStyle = useAnimatedStyle(() => {
    return {
      opacity: 1 - progress.value,
      transform: [{ scaleX: 1 - progress.value }]
    };
  });

  const bottomBarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: progress.value * -6 },
        { rotateZ: `${progress.value * -45}deg` }
      ]
    };
  });

  return (
    <Pressable onPress={handlePress} style={styles.pressArea}>
      <View style={styles.container}>
        <Animated.View style={[styles.bar, topBarStyle]} />
        <Animated.View style={[styles.bar, middleBarStyle]} />
        <Animated.View style={[styles.bar, bottomBarStyle]} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressArea: {
    width: 40,
    height: 40,
    justifyContent: 'center'
  },
  container: {
    width: 30,
    height: 30,
    justifyContent: 'center'
  },
  bar: {
    height: 3,
    width: 30,
    backgroundColor: '#fff',
    marginVertical: 3,
    borderRadius: 2
  }
});
