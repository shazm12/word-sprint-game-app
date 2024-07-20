import React from 'react';
import { Stack } from 'expo-router/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LinearGradBg from './components/LinearGradBg';
import game from './game';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack
      screenOptions={{
        headerShown: false,
      }}

    >
      <Stack.Screen name="game"options={{ animation:"fade", gestureEnabled: false, headerLeft: () => null }} />  
    </Stack>
    </GestureHandlerRootView>
  );
}