'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Switch,
  AlertIOS,
  PushNotificationIOS
} from 'react-native';
import MtButton from '../components/MtButton';
import BaseContainer from '../components/BaseContainer';

export default class PoiNotice extends Component {
	constructor(props) {
	  	super(props);
	  	this.state = {permissions: null};
	}
	

  	_sendNotification() {
  	    require('RCTDeviceEventEmitter').emit('remoteNotificationReceived', {
  	      // alertBody: '远程通知',
         //  soundName: 'default',
         //  category: 'REACT_NATIVE',
          userInfo: {title: '只有data', name: '杨益良'},
          // applicationIconBadgeNumber: 2
  	    });
  	}

  	_sendLocalNotification() {
  	    // require('RCTDeviceEventEmitter').emit('localNotificationReceived', {
  	    //   	aps: {
  	    //     	alert: 'Sample local notification',
  	    //     	badge: '+1',
  	    //     	sound: 'default',
  	    //     	category: 'REACT_NATIVE'
  	    //   	},
  	    // });
  	    
  	    PushNotificationIOS.presentLocalNotification({
  	    	// alertBody: '本地通知',
  	    	// soundName: 'default',
  	    	// category: 'REACT_NATIVE',
  	    	userInfo: {title: '只有data', name: '杨益良'}
  	    	// applicationIconBadgeNumber: 2
  	    });
  	}

  	

	_showPermissions () {
	   	PushNotificationIOS.checkPermissions((permissions) => {
	     	this.setState({permissions});
	   	});
	}

	_setPermissions () {
		PushNotificationIOS.requestPermissions();
	}

	_setBadgeNumber () {
		PushNotificationIOS.setApplicationIconBadgeNumber(5);
	}

	_getBadgeNumber () {
		PushNotificationIOS.getApplicationIconBadgeNumber(function (num) {
			AlertIOS.alert(
				'Local Notification Received',
				'Alert message: ' + num,
				[{
					text: 'Dismiss',
					onPress: null,
				}]
			);
		});
	}

  	render() {
    
	    return (
            <BaseContainer
               {...this.props}
                navBar={{title:'testPush'}} style={styles.container}>
            	<MtButton text='发送本地消息' onPress={this._sendLocalNotification.bind(this)} />
            	<MtButton text='发送远程消息' onPress={this._sendNotification.bind(this)} />
            	<MtButton text='显示权限' onPress={this._showPermissions.bind(this)} />
            	<Text>
		          	{JSON.stringify(this.state.permissions)}
		        </Text>
            	<MtButton text='设置权限' onPress={this._setPermissions.bind(this)} />
            	<MtButton text='设置角标数' onPress={this._setBadgeNumber.bind(this)} />
            	<MtButton text='获取角标数' onPress={this._getBadgeNumber.bind(this)} />
            </BaseContainer>
	    );
  	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgb(239,239,239)',
		flex: 1,
		paddingTop: 50
	}
});
