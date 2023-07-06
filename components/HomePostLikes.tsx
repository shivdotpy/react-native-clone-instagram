import {StyleSheet, View} from 'react-native';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

const HomePostLikes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.likeIconContainers}>
        <FeatherIcon name="heart" size={24} color="#000000" />
        <IonIcon name="md-chatbubble-outline" size={24} color="#000000" />
        <FeatherIcon name="send" size={24} color="#000000" />
      </View>
      <View>
        <FeatherIcon name="bookmark" size={24} color="#000000" />
      </View>
    </View>
  );
};

export default HomePostLikes;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 14,
  },
  likeIconContainers: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
  },
});
