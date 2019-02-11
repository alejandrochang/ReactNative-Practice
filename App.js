import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {

  onPressLearnMore = () => {
    return(
      <Text>Hello There</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.row1}>Select a pick-up location</Text>
        <Text style={styles.row2}>Ecstatic Again?</Text>
        <Text style={styles.row1}>
          Large, Light Cream, Light Sugar, Iced
        </Text>
        <Button
          style={styles.button}
          onPress={this.onPressLearnMore}
          title="Click on Me!"
          color="white"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255, 138, 30)",
    alignItems: "center",
    justifyContent: "center"
  },
  row1: {
    color: "rgb(79, 41, 22)",
    fontSize: 10,
    fontWeight: "400"
  },
  row2: {
    color: "rgb(79, 41, 22)",
    fontWeight: "bold",
    fontSize: 30
  },
  row3: {
    color: "red"
  }
});
