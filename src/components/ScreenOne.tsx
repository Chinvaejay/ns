import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { FrameNavigationProp } from 'react-nativescript-navigation';

import { MainStackParamList } from '../NavigationParamList';

type ScreenOneProps = {
  route: RouteProp<MainStackParamList, 'One'>;
  navigation: FrameNavigationProp<MainStackParamList, 'One'>;
};

export function ScreenOne({ navigation }: ScreenOneProps) {
  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl mb-4 font-bold text-center">
        Hello World!
      </label>
      <button style={styles.button} onTap={() => Dialogs.alert('Tapped!')}>
        Tap me for an alert
      </button>
      <button
        style={styles.button}
        onTap={() => navigation.navigate('Two', { message: 'Hello, world!' })}
      >
        Go to next screen
      </button>
      <button style={styles.button} onTap={() => navigation.navigate('Three')}>
        Go to three screen
      </button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    fontSize: 24,
    color: '#2e6ddf',
  },
});
