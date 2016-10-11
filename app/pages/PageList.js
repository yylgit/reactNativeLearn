'use strict';

import React, { Component } from 'react';

import {
  	StyleSheet,
  	View,
  	ScrollView,
  	ListView,
  	TouchableOpacity,
  	Text,
  	StatusBar,
  	Platform
} from 'react-native';
import NavigatorBar from '../components/NavigatorBar';
import MtButton from '../components/MtButton';
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


	_renderNavBar() {
        let navBarStyle = styles.navBarIOS;
        if (Platform.OS === 'android') {
            navBarStyle = styles.navBarAndroid;
        }
        return (
            <View style={[styles.navBar, navBarStyle]}>
            	<Text style={styles.navBarText}>pageList</Text>
            </View>
        );
    }

  	render() {
    	return (
      		<View style={styles.container}>
      			<StatusBar
                    hidden={false}
                    barStyle="light-content"/>
	            <NavigatorBar name="pageList" />
      			<ListView
			        dataSource={this.state.dataSource}
			        renderRow={this._renderRow.bind(this)}
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
        justifyContent: 'center',
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
    	alignItems: 'center',
    }
});


export default PageList;