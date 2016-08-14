'use strict';

import React, {
    Component
} from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
    BackAndroid,
    StatusBar
} from 'react-native';


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
    left: {
        width: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 5
    },
    title: {
        color: 'white',
        fontSize: 18
    },
    right: {
        width: 50
    }
});

export default class BaseContainer extends Component {
    constructor(props) {
        super(props);
        this._onBackPress = this._onBackPress.bind(this);
    }

    componentWillMount() {
        this._addBackPressListener();
    }

    componentWillUnmount() {
        this._removeBackPressListener();
    }

    _goBack() {
        if(this.props.navBar) {
            let onBackPress = this.props.navBar.onBackPress;
            if (onBackPress) {
                onBackPress();
            } else {
                this.props.navigator.pop();
            }
        } else {
            this.props.navigator.pop();
        }
        
    }


    _addBackPressListener() {
        BackAndroid.addEventListener('hardwareBackPress', this._onBackPress);
    }

    _removeBackPressListener() {
        BackAndroid.removeEventListener('hardwareBackPress', this._onBackPress);
    }

    _onBackPress() {
        const routers = this.props.navigator.getCurrentRoutes();
        if (routers.length > 1 &&
            this.props.currentName === routers[routers.length - 1].name) {
            this._goBack();
            return true;
        }
        return false;
    }


    _defaultRenderNabBar(navBarStyle) {
        const {navBar} = this.props;
        return (
            <View style={[styles.navBar, navBarStyle]}>
                <TouchableOpacity
                    onPress={this._goBack.bind(this)}
                    hitSlop={{top: 6, left: 6, bottom: 6, right: 6}}
                    style={styles.left}>
                    <Text style={styles.leftText}>返回</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{navBar.title || '美团便利店'}</Text>
                <View style={styles.right}>{navBar.rightComponent}</View>
            </View>
        );
    }


    render() {
        const {renderNavBar, style} = this.props;
        let navBarStyle = styles.navBarIOS;
        if (Platform.OS === 'android') {
            navBarStyle = styles.navBarAndroid;
        }

        return (
            <View style={[styles.container, style]}>
                <StatusBar
                    hidden={false}
                    barStyle="light-content"/>
                {typeof renderNavBar === 'function' ? renderNavBar(navBarStyle) : this._defaultRenderNabBar(navBarStyle)}
                {this.props.children}
            </View>
        );
    }
}
