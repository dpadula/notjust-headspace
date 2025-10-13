import { meditations } from '@/data';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
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
    <SafeAreaView className='flex-1 bg-orange-400 justify-between'>
      {/* Header */}
      <View className='flex-1'>
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
      </View>
      {/* Play and Pasuse Button */}
      <Pressable className='bg-zinc-800 self-center items-center justify-center w-20 aspect-square rounded-full mt-10'>
        <FontAwesome6 name='play' size={24} color='snow' />
      </Pressable>
      {/* Player */}
      <View className='flex-1'>
        <View className='p-10 mt-auto gap-5'>
          <View className='flex-row justify-between'>
            <MaterialCommunityIcons
              name='broadcast'
              size={32}
              color='#3A3937'
            />
            <MaterialCommunityIcons
              name='cog-outline'
              size={32}
              color='#3A3937'
            />
          </View>
          <View>
            <Slider
              style={{ width: '100%', height: 40 }}
              value={0.5}
              onSlidingComplete={(value) => {
                console.log(value);
              }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor='#3A3937'
              maximumTrackTintColor='#3A393755'
              thumbTintColor='#3A3937'
            />
          </View>
          <View className='flex-row justify-between p-1'>
            <Text className='text-zinc-800 font-semibold'>0:00</Text>
            <Text className='text-zinc-800 font-semibold'>
              {meditation?.duration}:00
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MeditationDetails;

const styles = StyleSheet.create({});
