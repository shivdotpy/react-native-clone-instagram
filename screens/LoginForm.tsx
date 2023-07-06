import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

const LoginForm = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput style={styles.input} placeholder="Password" />
          <View style={styles.forgotContainer}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('bottom-navigation')}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.loginFacebookContainer}>
          <View style={styles.facebookContainer}>
            <IoniconsIcon name="logo-facebook" color="#3797EF" size={17} />
            <Text
              style={styles.loginFacebookText}
              onPress={() => navigation.navigate('login-form')}>
              Login with Facebook
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>Instagram of Facebook</Text>
      </View>
    </View>
  );
};

export default LoginForm;

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
  form: {
    marginTop: 38,
  },
  forgotContainer: {
    marginBottom: 30,
  },
  forgotText: {
    color: '#3797EF',
    textAlign: 'right',
  },
  loginFacebookContainer: {
    marginTop: 38,
  },
  loginFacebookText: {
    color: '#3797EF',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  facebookContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    color: '#262626',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 344,
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
  input: {
    width: 343,
    height: 44,
    borderRadius: 5,
    backgroundColor: '#FAFAFA',
    borderColor: 'rgba(0, 0, 0, 0.10)',
    borderWidth: 0.5,
    marginBottom: 12,
    paddingHorizontal: 15,
  },
});
