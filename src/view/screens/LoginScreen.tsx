import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {useAppDispatch, useAppSelector, loginActions} from '../../redux';
const LoginScreen = () => {
  const tailwind = useTailwind();
  const {users} = useAppSelector(state => state.login);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const checkEmptyField = (field: string) => {
    return field.length;
  };
  const handleSignIn = () => {
    const isUserAuthenticated = users.some(
      creds =>
        checkEmptyField(email) &&
        creds.email === email &&
        checkEmptyField(password) &&
        creds.password === password,
    );
    if (isUserAuthenticated) {
      dispatch(loginActions.setLoggedIn(true));
    } else {
      Alert.alert('Incorrect email and password!', '', [{text: 'OK'}]);
      setEmail('');
      setPassword('');
    }
  };
  const handleSingUp = () => {
    if (email && password) {
      dispatch(
        loginActions.addUser({
          email,
          password,
        }),
      );
      Alert.alert('Your account has been successfully created!', '', [
        {text: 'OK'},
      ]);
    } else {
      Alert.alert('Enter email and password!', '', [{text: 'OK'}]);
    }
  };

  return (
    <SafeAreaView style={tailwind('flex-1 justify-center items-center')}>
      <View style={tailwind('relative pb-8')}>
        <TextInput
          style={tailwind('border rounded-lg p-3 m-2 w-64')}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={tailwind('border rounded-lg p-3 m-2 w-64')}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={tailwind('flex-row  justify-between')}>
          <TouchableOpacity
            style={tailwind('bg-blue-500 p-2 m-2 rounded flex-1')}
            onPress={handleSignIn}>
            <Text style={tailwind('text-white text-center')}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind('bg-gray-300 p-2 m-2 rounded flex-1')}
            onPress={handleSingUp}>
            <Text style={tailwind('text-black text-center')}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
