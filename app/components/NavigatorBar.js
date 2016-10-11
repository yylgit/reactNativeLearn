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
            		<Text style={styles.leftArrow}>{'<'}</Text>
            	</TouchableOpacity>
			)
		} else {
			return (
				<View style={styles.leftBtn}>
				</View>
			);
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
            	<View style={styles.rightBtn}>
            	</View>
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
    	color: '#fff',
    	flex: 1
    },
    row: {
    	height: 40,
    	alignItems: 'center'
    },
    leftBtn: {
    	width: 40
    },
    rightBtn: {
    	width: 40
    },
    leftArrow: {
    	color: '#fff',
    	fontWeight: 'bold',
    	fontSize: 20
    }
});



export default NavigatorBar;