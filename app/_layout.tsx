import React from "react";
import { Stack } from "expo-router/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { UserProvider } from "./contexts/userContext";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="game"
            options={{
              animation: "fade",
              gestureEnabled: false,
              headerLeft: () => null,
            }}
          />
        </Stack>
      </UserProvider>
    </GestureHandlerRootView>
  );
}
