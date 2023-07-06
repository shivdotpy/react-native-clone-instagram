import {ScrollView, View} from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import HomeStatus from '../components/HomeStatus';
import HomePost from '../components/HomePost';

const Home = () => {

  const images = [
    require('../assets/images/post1.jpg'),
    require('../assets/images/post2.jpg'),
    require('../assets/images/post3.jpg'),
  ];

  return (
    <ScrollView>
      <HomeHeader />
      <HomeStatus />
      <HomePost images={images}/>
      <HomePost images={images}/>
    </ScrollView>
  );
};

export default Home;
