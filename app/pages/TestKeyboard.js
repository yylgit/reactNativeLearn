import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  DeviceEventEmitter

} from 'react-native';

class TestKeyboard extends Component {
	constructor (props) {
		super(props);
		
	}
	
		// Keyboard actions
	updateKeyboardSpace (frames) {
	    console.log('show');
	　　 const keyboardSpace =  frames.endCoordinates.height;//获取键盘高度
		this.refs.scrollView.scrollTo({y: keyboardSpace});
	}

	resetKeyboardSpace () {
		console.log('hide');
	　　
	 	this.refs.scrollView.scrollTo({y: 0});
	 	this.refs.text2.focus();
	}
  	render() {
	    return (
	      <ScrollView
			　ref='scrollView'
			　　keyboardDismissMode='interactive'
			　　showsVerticalScrollIndicator={true}
	      		style={{flex: 1,backgroundColor:'gray'}}>
	      		<View style={{height: 50,marginTop:300,flexDirection:'row'}}>
	      		<TextInput placeholder='nihao' style={{flex:1}}/>
	      		<TextInput ref='text2' placeholder='nihao2' style={{flex:1}}/>
	      		</View>
	      		
	      </ScrollView>
	    );
	  }
}

var styles = StyleSheet.create({

});


export default TestKeyboard;
