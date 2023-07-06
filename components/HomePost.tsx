import {StyleSheet, View} from 'react-native';
import React from 'react';
import HomePostHeader from '../screens/HomePostHeader';
import HomePostImageSlider from './HomePostImageSlider';
import HomePostLikes from './HomePostLikes';
import HomePostLikesCount from './HomePostLikesCount';
import HomePostComments from './HomePostComments';

const HomePost = ({images}) => {
  return (
    <View style={styles.container}>
      <HomePostHeader />
      <HomePostImageSlider images={images} />
      <HomePostLikes />
      <HomePostLikesCount />
      <HomePostComments />
    </View>
  );
};

export default HomePost;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0.5,
  },
});
