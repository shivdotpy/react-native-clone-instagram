import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

const AvatarStatus = ({
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
    <View style={styles.avatarWrapper}>
      <View style={styles.container}>
        <Image
          source={source}
          style={{...styles.avatar, height: height, width: width}}
        />
      </View>
      {name ? (
        <View>
          <Text style={styles.name}>{name}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default AvatarStatus;

const styles = StyleSheet.create({
  avatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    borderWidth: 3,
    borderRadius: 50,
    borderColor:
      'rgba(226, 3, 55, 1), rgba(198, 1, 136, 1), rgba(119, 0, 195, 1)',
  },
  avatar: {
    borderRadius: 50,
  },
  name: {
    fontSize: 12,
  },
});
