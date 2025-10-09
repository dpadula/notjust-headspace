import { meditations } from '@/data';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MeditationDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const meditation = meditations.find(
    (meditation) => meditation.id === Number(id)
  );
  if (!meditation) {
    return (
      <View>
        <Text className='text-2xl font-bold'>Meditation not found</Text>
      </View>
    );
  }
  return (
    <View>
      <Text className='text-2xl font-bold'>{meditation?.title}</Text>
    </View>
  );
};

export default MeditationDetails;

const styles = StyleSheet.create({});
