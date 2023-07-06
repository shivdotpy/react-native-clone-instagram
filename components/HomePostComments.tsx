import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomePostComments = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBlack}>
        <Text style={styles.textBold}>joshua_l</Text> The game in Japan was amazing and I want to share some photos
      </Text>
    </View>
  );
};

export default HomePostComments;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    marginTop: 4,
    marginBottom: 8
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
