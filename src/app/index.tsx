import { FlatList, Text, View } from 'react-native';
import { meditations } from '../data';

const meditation = meditations[0];

type MeditationListItemProps = {
  item: typeof meditation;
};

const MeditationListItem = ({ item: meditation }: MeditationListItemProps) => {
  return (
    <View className='p-5 m-5 border border-gray-300 rounded-2xl '>
      <Text className='text-xl font-semi-bold'>{meditation.title}</Text>
    </View>
  );
};
export default function HomeScreen() {
  return (
    <>
      <FlatList data={meditations} renderItem={MeditationListItem} />
    </>
  );
}
