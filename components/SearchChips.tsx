import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Chips from './Chips';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';

const SearchChips = () => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <Chips
        title="IGTV"
        icon={<FeatherIcon name="tv" size={13} color="#000000" />}
      />
      <Chips
        title="Shop"
        icon={<FA5Icon name="shopping-bag" size={13} color="#000000" />}
      />
      <Chips title="Style" />
      <Chips title="Sports" />
      <Chips title="Auto" />
      <Chips title="Game" />
      <Chips title="Mobile" />
    </ScrollView>
  );
};

export default SearchChips;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});
