import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MeditationDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Meditation Details: {id}</Text>
    </View>
  );
};

export default MeditationDetails;

const styles = StyleSheet.create({});
