import {
  StyleSheet,
  Image,
  FlatList,
  View,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');
const imageWidth = width / 2;

const SearchGallary = ({images}) => {
  const renderItem = ({item}) => (
    <TouchableHighlight>
      <Image source={item.value} style={styles.image} resizeMode="cover" />
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.id}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

export default SearchGallary;

const styles = StyleSheet.create({
  container: {
    height: 610,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  image: {
    width: imageWidth,
    height: imageWidth,
  },
});
