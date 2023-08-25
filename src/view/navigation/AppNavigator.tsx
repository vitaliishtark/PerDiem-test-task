import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import {useAppSelector} from '../../redux';

export const AppNavigator = () => {
  const {loggedIn} = useAppSelector(state => state.login);

  return <>{loggedIn ? <HomeScreen /> : <LoginScreen />}</>;
};
