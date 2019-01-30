import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default class Background extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 631
  };
  render() {
    return <View style={[styles.root, this.props.style]} />;
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(27,30,63,1)",
    opacity: 1
  }
});
