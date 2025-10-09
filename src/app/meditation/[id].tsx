import { meditations } from '@/data';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const MeditationDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { top } = useSafeAreaInsets();

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
    <SafeAreaView className='flex-1 bg-white px-4'>
      <Text className='text-2xl font-bold mt-16'>{meditation?.title}</Text>
      <AntDesign
        onPress={() => {
          router.back();
        }}
        className='absolute right-4'
        style={{ top: top + 16 }}
        name='close'
        size={24}
        color='black'
      />
    </SafeAreaView>
  );
};

export default MeditationDetails;

const styles = StyleSheet.create({});
