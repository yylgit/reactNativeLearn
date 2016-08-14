import React from 'react';
//=========引入页面模块=========
import Home from '../pages/Home';
import TestKeyboard from '../pages/TestKeyboard';
import TestPush from '../pages/TestPush';

//=============================

let RouteList = {
	Home,
	TestKeyboard,
	TestPush
}

module.exports = function (name, props) {
	let component = RouteList[name];
	return React.createElement(component, props);
}