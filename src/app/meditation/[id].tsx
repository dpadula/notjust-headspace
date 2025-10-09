import { meditations } from '@/data';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView className='flex-1 bg-orange-400'>
      {/* Header */}

      <View className='flex-row items-center justify-between px-10 mt-4'>
        <AntDesign name='info-circle' size={24} color='black' />
        <View className='bg-zinc-700 rounded-md p-2'>
          <Text className='text-zinc-100 font-bold'>Today's meditation</Text>
        </View>
        <AntDesign
          onPress={() => {
            router.back();
          }}
          name='close'
          size={22}
          color='black'
        />
      </View>
      <Text className='text-3xl text-center text-zinc-800 font-semibold mt-10'>
        {meditation?.title}
      </Text>
    </SafeAreaView>
  );
};

export default MeditationDetails;

const styles = StyleSheet.create({});
