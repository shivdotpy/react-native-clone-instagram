import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';

const HomePostImageSlider = ({images}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        {images.map((image: ImageSourcePropType, index: number) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default HomePostImageSlider;
