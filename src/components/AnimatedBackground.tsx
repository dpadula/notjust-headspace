import React from 'react';
import { StyleSheet, View } from 'react-native';

const AnimatedBackground = () => {
  return (
    <View className='absolute top-0 left-0 right-0 bottom-0 items-center'>
      <View className='w-[400%] absolute aspect-square bg-yellow-400 rounded-full' />
      <View className='w-[400%] absolute aspect-square top-[50%] bg-yellow-300 rounded-full' />
      <View className='w-[400%] absolute aspect-square top-[70%] bg-orange-500 rounded-full' />
    </View>
  );
};

export default AnimatedBackground;

const styles = StyleSheet.create({});
