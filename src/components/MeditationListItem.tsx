import { Meditation } from '@/types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type MeditationListItemProps = {
  meditation: Meditation;
};

const MeditationListItem = ({ meditation }: MeditationListItemProps) => {
  return (
    <View className='p-5 border border-gray-300 rounded-2xl '>
      <Text>HOA</Text>
      <Text className='text-xl font-semi-bold'>{meditation.title}</Text>
    </View>
  );
};

export default MeditationListItem;

const styles = StyleSheet.create({});
