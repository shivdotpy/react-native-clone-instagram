import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 50,
  },
});

const Avatar = ({
  source,
  height = 85,
  width = 85,
  name,
}: {
  source: string;
  height?: number;
  width?: number;
  name?: string;
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={source}
        style={{...styles.avatar, height: height, width: width}}
      />
      {name ? <Text>{name}</Text> : null}
    </View>
  );
};

export default Avatar;
