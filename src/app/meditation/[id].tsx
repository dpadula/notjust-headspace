import { meditations } from '@/data';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useLocalSearchParams } from 'expo-router';
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
        <Text className='text-2xl font-bold mt-16'>Meditation not found</Text>
      </View>
    );
  }
  return (
    <>
      <Text className='text-2xl font-bold mt-16'>{meditation?.title}</Text>
      <AntDesign
        onPress={() => {
          router.back();
        }}
        className='absolute top-16 right-4'
        name='close'
        size={24}
        color='black'
      />
    </>
  );
};

export default MeditationDetails;

const styles = StyleSheet.create({});
