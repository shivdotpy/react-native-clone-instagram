import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <FeatherIcon name="camera" size={24} color="#262626" />
      </View>
      <View>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.shareContainer}>
        <View>
          <FeatherIcon name="tv" size={24} color="#262626" />
        </View>
        <View style={styles.shareIcon}>
          <FeatherIcon name="send" size={24} color="#262626" />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-between',
    padding: 12,
    height: 48,
    alignItems: 'center',
  },
  logo: {
    width: 104,
    height: 28,
    resizeMode: 'contain',
  },
  shareContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  shareIcon: {
    marginLeft: 16,
  },
});
