'use strict';

import React, { Component } from 'react';

import {
  	StyleSheet,
  	View,
  	ScrollView,
  	ListView,
  	TouchableOpacity,
  	Text,
  	StatusBar
} from 'react-native';

class PageList extends Component {
	constructor(props) {
	  	super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.pageList = [];
	  	this.state = {
	      	dataSource: this.ds.cloneWithRows(this.pageList),
	    };
	}


	componentDidMount() {
		this.pageList = [{
			name: 'react-native-datepicker',
			router: 'TestDatePicker'
		}];
		this.setState({
			dataSource: this.ds.cloneWithRows(this.pageList)
		});
	}


	_rowPress(page) {
		this.props.navigator.push({name:page.router});
	}


	_renderRow(page) {
		return (
			<TouchableOpacity style={styles.row} onPress={this._rowPress.bind(this, page)}>
				<Text style={styles.rowText}>{page.name}</Text>
			</TouchableOpacity>
		);
	}


  	render() {
    	return (
    		
      		<View style={styles.container}>
      			<StatusBar
	                hidden={false}
	                backgroundColor="blue"
	                barStyle="light-content"
	            />
      			<ListView
			        dataSource={this.state.dataSource}
			        renderRow={this._renderRow.bind(this)}
			    />
      		</View>
    	);
  	}
}

const styles = StyleSheet.create({
	row: {
		height: 40,
		alignItems: 'center'
	},
	container: {
		flex: 1
	}
});


export default PageList;