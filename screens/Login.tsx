import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';
import Avatar from '../components/Avatar';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <View style={styles.userContainer}>
          <Avatar source={require('../assets/images/avatar.jpg')} />
          <Text style={[styles.boldText, styles.textCenter]}>navya_01</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('bottom-navigation')}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.switchAccountsContainer}>
          <Text
            style={styles.switchAccounts}
            onPress={() => navigation.navigate('login-form')}>
            Switch Accounts
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <View>
            <Text>Don't have an account?</Text>
          </View>
          <View>
            <Text style={styles.boldText}>Sign up.</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 49,
    resizeMode: 'contain',
  },
  userContainer: {
    marginBottom: 12,
    marginTop: 52,
  },
  switchAccountsContainer: {
    marginTop: 38,
  },
  switchAccounts: {
    color: '#3797EF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    color: '#262626',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  normalText: {
    color: '#262626',
  },
  boldText: {
    color: '#262626',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3797EF',
    padding: 10,
    borderRadius: 5,
    width: 300,
    display: 'flex',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textTransform: 'none',
    textAlign: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
});
