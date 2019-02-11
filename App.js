import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class App extends Component {

  onPressLearnMore = () => {
    return(
      <Text>Hello There</Text>
    );
  }

  render() {
    let pic = {
      uri:
        "https://s3-media4.fl.yelpcdn.com/bphoto/FWYFokAvSSWnN2Stgr0kjw/o.jpg"
    };
    return (
      <View style={styles.container}>
        <Text style={styles.row1}>Select a pick-up location</Text>
        <Text style={styles.row2}>Ecstatic Again?</Text>
        <Text style={styles.row1}>
          Large, Light Cream, Light Sugar, Iced
        </Text>
        <Image source={pic} style={{ width: 250, height: 250, borderRadius: "5%"}} />
        <Button
          style={styles.button}
          onPress={this.onPressLearnMore}
          title="I'LL TAKE IT!"
          color="#fff"
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
    fontWeight: "400",
    alignItems: "baseline"
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
