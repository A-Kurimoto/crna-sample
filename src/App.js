import React from 'react';
import Root from './Root';
import {NativeModules} from 'react-native';

//エントリーポイント。app.json/entoryPointを使ってもこのディレクトリから動かすことはできない
// https://github.com/react-community/create-react-native-app/issues/152
// でもejectした後は不要
export default class App extends React.Component {
    render() {
        return (
            <Root></Root>
        );
    }
}
