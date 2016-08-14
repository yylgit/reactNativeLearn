import React, { Component } from 'react';
import {
    View,
    Navigator,
    PushNotificationIOS,
    AlertIOS
} from 'react-native';

import Router from '../Router/Router';
const INIT_ROUTE = {
    name: 'Home'
}


export default class Index extends Component {

    componentWillMount() {
        this._checkPermission();
        // Add listener for push notifications
        PushNotificationIOS.addEventListener('notification', this._onNotification);
        // Add listener for local notifications
        PushNotificationIOS.addEventListener('localNotification', this._onLocalNotification);
        PushNotificationIOS.addEventListener('register', this._onRegister);
    }


    componentWillUnmount() {
        // Remove listener for push notifications
        PushNotificationIOS.removeEventListener('notification', this._onNotification);
        // Remove listener for local notifications
        PushNotificationIOS.removeEventListener('localNotification', this._onLocalNotification);
    }

    _onRegister (token) {
        console.log(token);
    }   
    _checkPermission () {
        PushNotificationIOS.checkPermissions((permissions)=>{
            let nopermissions = {};
            Object.keys(permissions).forEach((key)=>{
                if(permissions[key] == 0) {
                    nopermissions[key] = true;
                }
            })
            if(nopermissions === {}) {
                PushNotificationIOS.requestPermissions(nopermissions);
            }
            
        });
    }
    _onNotification(notification) {
        console.log('_onNotification');
        console.log(notification);
        console.log(notification.getData());
        var data = notification.getData();
        AlertIOS.alert(
            'Push Notification Received',
            'Alert message: ' + data.title, 
            [{
                text: 'Dismiss',
                onPress: null,
            }]
        );
    }

    _onLocalNotification(notification) {
        console.log('_onLocalNotification');
        console.log(notification);
        console.log(notification.getData());
        var data = notification.getData();
        AlertIOS.alert(
            'Local Notification Received',
            'Alert message: ' + data.title, 
            [{
                text: 'Dismiss',
                onPress: null,
            }]
        );
    }
    _renderScene(route, navigator) {
        let props = {
            data: route.data,
            navigator: navigator
        }
        return Router(route.name, props);
    }
    render() {
        return ( 
            < View style = {{ flex: 1 }} >
                < Navigator initialRoute = { INIT_ROUTE }
                    renderScene = { this._renderScene.bind(this) }
                />  
            < /View>

        );
    }
}
