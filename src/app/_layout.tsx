import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'Meditations' }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
