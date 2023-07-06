import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Avatar from './Avatar';

const HomePostLikesCount = () => {
  return (
    <View style={styles.container}>
      <Avatar
        source={require('../assets/images/avatar.jpg')}
        height={17}
        width={17}
      />
      <Text style={styles.textBlack}>
        Liked by <Text style={styles.textBold}>craig_love</Text> and{' '}
        <Text style={styles.textBold}>44,686 others</Text>{' '}
      </Text>
    </View>
  );
};

export default HomePostLikesCount;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  textBlack: {
    color: '#000000',
    fontSize: 13,
    marginLeft: 8,
  },
  textBold: {
    fontWeight: 'bold',
  },
});
