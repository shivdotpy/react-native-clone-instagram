import {StyleSheet, View} from 'react-native';
import React from 'react';
import SearchHeader from '../components/SearchHeader';
import SearchChips from '../components/SearchChips';
import SearchGallary from '../components/SearchGallary';

const Search = () => {
  const images = [
    {
      id: 'f7a1d6a8-1a8d-4b6d-9e10-0489738a410a',
      value: require('../assets/images/g1.jpg'),
    },
    {
      id: '4384c75c-17e3-4f2d-a953-33598e79b577',
      value: require('../assets/images/g2.jpg'),
    },
    {
      id: '79b46f63-11ad-4a7a-aa7e-5d0900e59421',
      value: require('../assets/images/g3.jpg'),
    },
    {
      id: 'e4915a12-23ff-4d5b-996d-1d49c36a1d74',
      value: require('../assets/images/g4.jpg'),
    },
    {
      id: '11bce67e-7f9a-4ad2-9f9d-783f52db7e14',
      value: require('../assets/images/g5.jpg'),
    },
    {
      id: '6655ae84-9e3e-4071-97c0-d1b96ed0e9ef',
      value: require('../assets/images/g6.jpg'),
    },
    {
      id: '9c563d97-8051-4d6e-a3b1-276b75f85e0e',
      value: require('../assets/images/g7.jpg'),
    },
    {
      id: 'c5374e37-47a1-4b70-8b99-01c348ff0a45',
      value: require('../assets/images/g8.jpg'),
    },
    {
      id: '2d6f649a-5e25-4d7d-bff1-00b0faffde4f',
      value: require('../assets/images/g9.jpg'),
    },
    {
      id: 'f4c2b725-1de9-4f68-a0af-2937861b2535',
      value: require('../assets/images/g10.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      <SearchHeader />
      <SearchChips />
      <SearchGallary images={images} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {flex: 1},
});
