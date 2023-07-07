import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';

const SearchHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <AntIcon name="search1" size={14} color="#3C3C43" />
        <TextInput placeholder="Search" style={styles.input} />
      </View>
      <AntIcon name="scan1" size={20} color="#000000" style={styles.icon} />
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    height: 36,
    flex: 1,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  input: {
    width: '100%',
  },
  icon: {
    marginLeft: 8,
  },
});
