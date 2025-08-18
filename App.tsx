import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/home/Home';

export default function App() {
  return (
    <Home />
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    backgroundColor : '#ffffff',
    alignItems : 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color:'#ffffff'
  }
});
