import React from 'react';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Auth Screens
import Login from './screens/Login';
import LoginForm from './screens/LoginForm';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import AntIcon from 'react-native-vector-icons/AntDesign';

// Bottom Navigation Screen
import Home from './screens/Home';
import Notification from './screens/Notification';
import Profile from './screens/Profile';
import Search from './screens/Search';
import Add from './screens/Add';
import Avatar from './components/Avatar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({size, focused, color}) => {
            return <FoundationIcon name="home" size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({size, focused, color}) => {
            return <AntIcon name="search1" size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name="add"
        component={Add}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({size, focused, color}) => {
            return <AntIcon name="plussquareo" size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name="notification"
        component={Notification}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({size, focused, color}) => {
            return <AntIcon name="hearto" size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({size, focused, color}) => {
            return <Avatar source={require('./assets/images/avatar.jpg')} height={30} width={30}/>;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login-form"
          component={LoginForm}
          options={{headerTitle: ''}}
        />
        <Stack.Screen
          name="bottom-navigation"
          component={BottomNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
