import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

export default class Header extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 103
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.rect2} />
        <Image style={styles.image} source={require("../assets/logo.png")} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rect2: {
    top: "0%",
    left: 0,
    width: 375,
    height: 103,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1
  },
  image: {
    top: "50.49%",
    left: "9.87%",
    width: 300,
    height: 32,
    position: "absolute"
  }
});
