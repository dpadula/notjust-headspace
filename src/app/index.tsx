import MeditationListItem from '@/components/MeditationListItem';
import { meditations } from '@/data';
import { FlatList } from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <FlatList
        data={meditations}
        className='bg-white'
        contentContainerClassName='gap-8 p-4' //NativeWind
        renderItem={({ item }) => <MeditationListItem meditation={item} />}
      />
    </>
  );
}
