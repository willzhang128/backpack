/* eslint-disable */

import React, { Component } from 'react';
import {
  colorRed500,
  colorBlue700,
  colorGray500,
  colorGreen500,
  colorYellow500,
} from 'bpk-tokens/tokens/base.react.native';
import { View, Platform, ProgressBarAndroid, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import CenterDecorator from '../../storybook/CenterDecorator';

import BpkText from './index';

class ProgressBarAdvanced extends Component {
  constructor(props) {
    super(props);
    this.interval;
    this.state = {
      progress: 0.01,
    };
  }
  componentDidMount() {
    this.initInterval();
  }
  incrementProgress() {
    if (parseInt(this.state.progress, 10) >= 1) {
      console.warn('done');
      this.cancelInterval();
    } else {
      // console.warn(0.55678 * (this.state.progress * this.state.progress) / 2);
      // console.warn(Math.pow(1 - this.state.progress, 2) * 0.55678);
      const k = 0.2835678;
      let progress;
      if (this.state.progress > 0.99) {
        progress = 1;
      } else {
        progress = this.state.progress +=
          Math.pow(1 - this.state.progress, 2) * (this.state.progress * k);
      }

      this.setState({
        // (target - current)^2)*k
        progress,
      });
    }
  }
  initInterval() {
    this.interval = setInterval(() => this.incrementProgress(), 16);
  }
  cancelInterval() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <View>
        <Text>{this.state.progress}</Text>
        <ProgressBarAndroid
          indeterminate={false}
          styleAttr="Horizontal"
          progress={this.state.progress}
        />
      </View>
    );
  }
}
class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.interval;
    this.state = {
      progress: 0.01,
    };
  }
  componentDidMount() {
    this.initInterval();
  }
  incrementProgress() {
    if (parseInt(this.state.progress, 10) >= 1) {
      console.warn('done');
      this.cancelInterval();
    } else {
      this.setState({
        progress: this.state.progress + 0.02,
      });
    }
  }
  initInterval() {
    this.interval = setInterval(() => this.incrementProgress(), 16);
  }
  cancelInterval() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <ProgressBarAndroid
        indeterminate={false}
        styleAttr="Horizontal"
        progress={this.state.progress}
      />
    );
  }
}
storiesOf('react-native-bpk-component-text', module)
  .addDecorator(CenterDecorator)
  .add('default', () => (
    <ProgressBarAndroid
      indeterminate={false}
      styleAttr="Horizontal"
      progress={0.7}
    />
  ))
  .add('ProgressbarAdvanced', () => (
    <View>
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
      <ProgressBarAdvanced />
    </View>
  ))
  .add('Progressbar', () => (
    <View>
      <ProgressBar />
    </View>
  ));
