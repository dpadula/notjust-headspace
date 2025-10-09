import { Meditation } from '@/types';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type MeditationListItemProps = {
  meditation: Meditation;
};

const MeditationListItem = ({ meditation }: MeditationListItemProps) => {
  return (
    <Link href={`/meditation/${meditation.id}`} asChild>
      <Pressable className='flex-row items-center gap-5'>
        <View className='bg-green-700 p-2 rounded-full'>
          <FontAwesome name='check' size={16} color='white' />
        </View>
        <View className='flex-1 p-10 border border-gray-300 rounded-2xl '>
          <Text className='text-xl font-semi-bold mb-3'>
            {meditation.title}
          </Text>
          <View className='flex-row items-center gap-2 mt-2'>
            <AntDesign name='clock-circle' size={18} color='#6B7280' />
            <Text className='text-gray-600 font-semi-bold'>
              {meditation.duration} min
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export default MeditationListItem;

const styles = StyleSheet.create({});
