import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import AvatarStatus from './AvatarStatus';

const HomeStatus = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <AvatarStatus
        source={require('../assets/images/avatar.jpg')}
        name="Navya"
        height={56}
        width={56}
      />
      <AvatarStatus
        source={require('../assets/images/p1.jpg')}
        name="Vijay"
        height={56}
        width={56}
      />
      <AvatarStatus
        source={require('../assets/images/p2.jpg')}
        name="Divya"
        height={56}
        width={56}
      />
      <AvatarStatus
        source={require('../assets/images/p3.jpg')}
        name="Avinash"
        height={56}
        width={56}
      />
      <AvatarStatus
        source={require('../assets/images/p4.jpg')}
        name="Riya"
        height={56}
        width={56}
      />
      <AvatarStatus
        source={require('../assets/images/p5.jpg')}
        name="David"
        height={56}
        width={56}
      />
    </ScrollView>
  );
};

export default HomeStatus;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0.5,
  },
});
