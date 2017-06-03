/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactTimer extends Component {

  constructor(){
    super();
    this.state = {
      text: "Click the button to countdown",
      time: 5
    };
    this.timer = 0;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.text}
        </Text>
        <Button
            onPress={this.onButtonPress}
            title="Count Down Button"
            color="#841584"
            accessibilityLabel="click to count down"
        />
      </View>
    );
  }

  onButtonPress = () => {
    if (this.timer == 0) {
      this.setState({
        text: `Countdown, ${this.state.time}`
      });
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown = () =>  {
    var count = this.state.time - 1;
    if (count == -1) {
      this.setState({
        text: "Countdown finished\nClick the button to countdown again",
        time: 5
      });
      clearInterval(this.timer);
      this.timer = 0;
    }else {
      this.setState({
        text: `Countdown, ${count}`,
        time: count
      });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactTimer', () => ReactTimer);
