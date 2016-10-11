import React, { Component } from 'react';
import {
    View,
    Navigator,
    PushNotificationIOS,
    AlertIOS,
    StatusBar,
    StyleSheet,
    Platform
} from 'react-native';

import Router from '../Router/Router';
const INIT_ROUTE = {
    name: 'PageList'
}


export default class Index extends Component {


    _renderScene(route, navigator) {
        let props = {
            data: route.data,
            navigator: navigator
        }
        return Router(route.name, props);
    }


    _configureScene(route) {
        if (Platform.OS === 'android' && route.name === 'BarcodeScannerPage') {
            return Navigator.SceneConfigs.HorizontalSwipeJump;
        }
        return Navigator.SceneConfigs.FloatFromRight;
    }


    render() {
        return ( 
            <View style = {{ flex: 1 }} >
                <Navigator initialRoute = { INIT_ROUTE }
                    configureScene={this._configureScene.bind(this)}
                    renderScene = { this._renderScene.bind(this) }
                />  
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#2e3944'
    },
    navBarIOS: {
        height: 60,
        paddingTop: 20,
    },
    navBarAndroid: {
        height: 50
    },
    left: {
        width: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 5
    },
    title: {
        color: 'white',
        fontSize: 18
    },
    right: {
        width: 50
    }
});
