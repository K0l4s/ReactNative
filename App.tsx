import React, { useEffect, useState } from 'react';
import {  StatusBar } from 'react-native';
import { SplashScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const [accessToken, setAccessToken] = useState('');

  const { getItem, setItem } = useAsyncStorage('assetToken');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
  const checkLogin = async () => {
    const token = await getItem();
    console.log(token);
    // if (token) setAccessToken(token);
    token && setAccessToken(token);
  };
  useEffect(() => {
    checkLogin();
  }, []);

  

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <AuthNavigator/>
          {/* {accessToken ? <MainNavigator /> : <AuthNavigator />} */}
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
