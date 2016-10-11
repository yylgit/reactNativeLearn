'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  DatePickerIOS
} from 'react-native';

import Button from '@scfe/react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNDatePicker from '../components/RNDatePicker';
class TestButton extends Component {
  constructor(props) {
    super(props);
    
    var minDate = new Date(1990, 1, 1);
    var maxDate = new Date(2016, 12, 12)
    console.log(minDate);
    console.log(maxDate);
    this.state = {
      selectedDate: new Date(),
      minDate: minDate,
      maxDate: maxDate,
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60
    };

  }

  _onDone() {

  }

  _onCancel() {

  }

  _onSetDate(date) {
    this.setState({
      selectedDate: date
    });
  }

  render() {
    let dateprops = {
      cancelText: '取消',
      doneText: '确定',
      ...this.state,
      onDone: this._onDone.bind(this),
      onCancel: this._onCancel.bind(this),
      onSetDate: this._onSetDate.bind(this)
    }

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <RNDatePicker  {...dateprops}>
            <Text>选择时间</Text>
          </RNDatePicker>

          <View style={styles.picker}>
              <DatePickerIOS
                  date={this.state.selectedDate ? this.state.selectedDate : new Date()}
                  mode='date'
                  timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                  onDateChange={this._onSetDate.bind(this)}
                  minuteInterval={10}
              />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  row: {
    marginTop: 5
  },
  picker: {
    flex: 1
  }
});


export default TestButton;