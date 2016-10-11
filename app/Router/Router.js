import React from 'react';
//=========引入页面模块=========
import Home from '../pages/Home';
import TestKeyboard from '../pages/TestKeyboard';
import TestPush from '../pages/TestPush';
import TestButton from '../pages/TestButton';
import TestDateTimePicker from '../pages/TestDateTimePicker';
import TestDatePicker from '../pages/TestDatePicker';
import PageList from '../pages/PageList';
//=============================

let RouteList = {
	Home,
	TestKeyboard,
	TestPush,
	TestButton,
	TestDateTimePicker,
	TestDatePicker,
	PageList
}

module.exports = function (name, props) {
	let component = RouteList[name];
	return React.createElement(component, props);
}