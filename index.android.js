/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Index from './app/pages/Index.js';

class reactNativeLearn extends Component {
  render() {
    return (
       <Index />
    );
  }
}

AppRegistry.registerComponent('reactNativeLearn', () => reactNativeLearn);
