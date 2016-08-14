'use strict';

import React, { Component,PropTypes } from 'react';

import {
  	StyleSheet,
  	View,
  	TouchableOpacity,
  	Text,
  	ActivityIndicator
} 	from 'react-native';

export default class MtButton extends Component {
	static propTypes = {
        text: PropTypes.string,
        onPress: PropTypes.func,
        containerStyle: View.propTypes.style,
        textStyle: Text.propTypes.style,
        disabled: PropTypes.func
    };

    _onPress () {
		let {
  			onPress,
  			disabled,
  			isLoading
  		} = this.props;
  		if(disabled || isLoading) {
  			return;
  		}
  		if(typeof onPress === 'function') {
  			onPress();
  		}
    }
  	render() {
  		let {
  			text,
  			onPress,
  			containerStyle,
  			textStyle,
  			disabled,
  			isLoading
  		} = this.props;
  		let finalContainerStyle = [];
  		finalContainerStyle.push(styles.containerStyle);
  		finalContainerStyle.push(containerStyle);
  		if(disabled) {
  			// finalContainerStyle.push(styles.disabledContainerStyle);
  		}
  		let finalTextStyle = [];
  		finalTextStyle.push(styles.textStyle);
  		finalTextStyle.push(textStyle);
  		if(disabled) {
  			// finalTextStyle.push(styles.disabledTextStyle);
  		}
  		let loadingDom = null,
  			disabledDom = null;
  		if(isLoading) {
  			loadingDom = (
  				<View style={styles.loading}>
	  				<ActivityIndicator
	                	animating={true}
	                	color="white"
	                	size="small" />
                </View>
                );
  		}
  		if(disabled) {
  			disabledDom = <View style={styles.loading}></View>;
  		}
  		
	    return (
	    	<TouchableOpacity style={finalContainerStyle}  onPress={this._onPress.bind(this)}>
				<Text style={finalTextStyle}>{text}</Text>
				{loadingDom}	    
				{disabledDom}		
	    	</TouchableOpacity>
	    );
  	}
}
let btnHeight = 30;

const styles = StyleSheet.create({
	containerStyle: {
		height: btnHeight,
		backgroundColor: '#06c1ae',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 3
	},
	textStyle: {
		color: '#fff',
		fontSize: 14,
		fontWeight: 'bold'
	},
	disabledTextStyle: {
		color: '#333'
	},
	disabledContainerStyle: {
		backgroundColor: '#d4d4d4',
	},
	loading: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(51, 51, 51, 0.2)',
        paddingTop: (btnHeight-20)/2
    }
});

