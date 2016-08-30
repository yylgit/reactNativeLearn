import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import MtButton from '../components/MtButton';
export default class Home extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isLoading: false
		}
	}
	_goPush () {
		this.props.navigator.push({name:'TestPush'});
	}

	_testDisabled () {
		this.setState({
			isLoading: true
		});
		setTimeout(()=>{
			this.setState({
				isLoading: false
			});
		},1000);
	}
	render () {
		return (
			<View style={styles.container}>
				<Text style={{backgroundColor:'red',alignSelf:'center',width:100,textAlign:'center',borderWidth:2,borderColor:'black',paddingTop:5}}>alignSelf</Text>
				<Text style={{backgroundColor:'red',alignSelf:'flex-end'}}>flex-end</Text>
				<MtButton size="lg" text='发送消息页' disabled={true} isLoading={false} containerStyle={{width: 100}} onPress={this._goPush.bind(this)} />
				<MtButton size="default" text='发送消息页' disabled={false} isLoading={false} containerStyle={{width: 100}} onPress={this._goPush.bind(this)} />
				<MtButton size="sm" text='发送消息页' disabled={false} isLoading={false} containerStyle={{width: 100}} onPress={this._goPush.bind(this)} />
				<MtButton size="xs" type="primary" text='发送消息页' disabled={false} isLoading={false} containerStyle={{width: 100}} onPress={this._goPush.bind(this)} />
				<MtButton size="xs" type="success" text='发送消息页' disabled={false} isLoading={true} containerStyle={{width: 100}} onPress={this._goPush.bind(this)} />
				<MtButton size="xs" type="success" text='发送消息页' disabled={false} isLoading={false} containerStyle={{width: 100}} onPress={this._goPush.bind(this)} />
				<MtButton size="xs" type="info" text='发送消息页' disabled={false} isLoading={false} containerStyle={{width: 100}} onPress={this._goPush.bind(this)} />
				<MtButton size="xs" type="warning" text='发送消息页' disabled={false} isLoading={false} containerStyle={{width: 100}} onPress={this._goPush.bind(this)} />
				<MtButton size="xs" type="danger" text='发送消息页' disabled={false} isLoading={false} containerStyle={{width: 100}} onPress={this._goPush.bind(this)} />
				<MtButton size="xs" type="link" text='发送消息页' disabled={true} isLoading={false} containerStyle={{width: 100}} onPress={this._goPush.bind(this)} />
				<MtButton size="lg" type="main" text='美团主色' disabled={false} isLoading={this.state.isLoading} containerStyle={{width: 100}} onPress={this._testDisabled.bind(this)} />
				<MtButton size="lg" type="default"  containerStyle={{width: 100,height: 60}} onPress={this._goPush.bind(this)}>
					<View>
						<Text>ssdfssdf</Text>
					</View>
					<View>
						<Text>ssdfssdf</Text>
					</View>
					<View>
						<Text>ssdfssdf</Text>
					</View>
				</MtButton>
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor:'orange',
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
