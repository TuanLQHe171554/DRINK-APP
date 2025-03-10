import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { loginUserAPI } from '../../redux/user/userSlice';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [errorPassword, setErrorPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const dispath = useDispatch()

  const handleLogin = async () => {
    setErrorEmail('');
    setErrorPassword('');
    if (!email) {
      setErrorEmail('Email is required');
    } else if (!password) {
      setErrorPassword('Password is required');
    } else {
      dispath(loginUserAPI({ email, password }))
        .then(() => navigation.navigate('Home'))
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://chupanh.vn/wp-content/uploads/2017/12/concept-chup-anh-mon-an-chum-anh-banh-ngot-nhin-la-me-ma00133.jpg' }} style={styles.logo} />
      <Text style={styles.title}>Loging</Text>


      <Text style={styles.subtitle}>Enter your emails and password</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        autoFocus
        onChangeText={setEmail}
      />
      {errorEmail && <Text style={styles.error}>{errorEmail}</Text>}

      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}

        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.eyeIcon}>
          <Ionicons name={secureText ? "eye-off" : "eye"} size={20} color="gray" />
        </TouchableOpacity>
      </View>
      {errorPassword && <Text style={styles.error}>{errorPassword}</Text>}


      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don't have an account?
        <Text style={styles.signupText} onPress={() => navigation.navigate('SignUp')}> Signup</Text>
      </Text>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center'
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 5
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: '#007BFF',
    fontSize: 14,
    marginBottom: 20
  },
  loginButton: {
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  loginText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    color: '#666'
  },
  signupText: {
    color: '#28A745',
    fontWeight: 'bold'
  }, error: {
    color: 'red',
  }
});

