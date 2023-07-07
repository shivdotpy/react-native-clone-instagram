import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Chips = ({title, icon}:{title: string, icon: React.Component}) => {
  return (
    <View style={styles.container}>
      {icon ? icon : null}
      <Text style={styles.textBlack}>{title}</Text>
    </View>
  );
};

export default Chips;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderColor: 'lightgrey',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginRight: 6,
    lineHeight: 30
  },
  textBlack: {
    color: '#000000',
    fontWeight: 'bold',
  },
});
