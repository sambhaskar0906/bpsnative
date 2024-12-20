// index.js
import 'react-native-gesture-handler';  // Add this import
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);