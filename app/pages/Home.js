import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import MtButton from '../components/MtButton';
export default class Home extends Component {
	_goPush () {
		this.props.navigator.push({name:'TestPush'});
	}
	render () {
		return (
			<View style={styles.container}>
				<Text style={{backgroundColor:'red',alignSelf:'center',width:100,textAlign:'center',borderWidth:2,borderColor:'black',paddingTop:5}}>alignSelf</Text>
				<Text style={{backgroundColor:'red',alignSelf:'flex-end'}}>flex-end</Text>
				<MtButton text='发送消息页' disabled={true} isLoading={false} containerStyle={{width: 100}} onPress={this._goPush.bind(this)} />
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor:'orange',
		marginTop:50,
		flex: 1
	},
	text1: {
		marginTop: 50,
		backgroundColor: '#747474',
		textAlign: 'center',
		height:100,
		fontSize:20,
		paddingTop:40,
		width:100,
		marginRight:10
	},
	text2: {
		flex: 2,
		marginTop: 50,
		backgroundColor: '#747474',
		textAlign: 'center',
		height:100,
		fontSize:20,
		paddingTop:40,
		marginLeft: 120
	}
});
