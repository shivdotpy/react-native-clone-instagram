import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomePostHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Avatar
          source={require('../assets/images/p3.jpg')}
          height={32}
          width={32}
        />
      </View>
      <View style={styles.nameContainer}>
        <View style={styles.verifyContainer}>
          <Text style={{...styles.textBlack, ...styles.textBold}}>Avinash</Text>
          <MaterialIcons name="verified" color="#3897F0" style={styles.verifyIcon}/>
        </View>
        <Text style={styles.textBlack}>Delhi, India</Text>
      </View>
      <View>
        <EntypoIcon name="dots-three-horizontal" size={14} color="black" />
      </View>
    </View>
  );
};

export default HomePostHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  nameContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  verifyContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifyIcon: {
    marginLeft: 4
  },
  textBlack: {
    color: 'black',
    fontSize: 11
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 13
  }
});
