import {AppRegistry, NativeModules} from 'react-native';
import Root from './src/Root';

module.exports = NativeModules.ToastAndroid;
AppRegistry.registerComponent('crnasample', () => Root);
