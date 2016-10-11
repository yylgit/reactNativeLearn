'use strict';

import React, { Component } from 'react';

import {
  	StyleSheet,
  	View,
  	Platform,
  	TouchableOpacity,
  	Text,
  	StatusBar
} from 'react-native';

class NavigatorBar extends Component {
	static  propTypes = {
	  	back: React.PropTypes.bool,
	  	leftPress: React.PropTypes.func,

	}

	_leftBtn() {
		let {leftPress, navigator} = this.props;
		if(leftPress && leftPress instanceof Function) {
			leftPress();
		} else {
			navigator && navigator.pop();
		}
	}

	_renderLeftBtn() {
		let {back} = this.props;
		if(back) {
			return (
				<TouchableOpacity style={styles.leftBtn} onPress={this._leftBtn.bind(this)}>
            		<Text>{'<'}</Text>
            	</TouchableOpacity>
			)
		} else {
			return null;
		}
	}

  	render() {
  		let {name} = this.props;
    	let navBarStyle = styles.navBarIOS;
        if (Platform.OS === 'android') {
            navBarStyle = styles.navBarAndroid;
        }
        return (
            <View style={[styles.navBar, navBarStyle]}>
            	<StatusBar
                    hidden={false}
                    barStyle="light-content"/>
            	{this._renderLeftBtn()}
            	<Text style={styles.navBarText}>{name}</Text>
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
    navBarText: {
    	textAlign: 'center', 
    	color: '#fff'
    },
    row: {
    	height: 40,
    	alignItems: 'center'
    },
    leftBtn: {

    }
});



export default NavigatorBar;