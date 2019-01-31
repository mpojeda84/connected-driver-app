import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, Image, StyleSheet } from "react-native";

export default class Background extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 631
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image style={styles.image} source={require("../assets/arch.png")} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(27,30,63,1)",
    opacity: 1
  },
  image: {
    top: "13.31%",
    width: 384,
    height: 118,
    position: "absolute",
    left: "-1.07%"
  }
});
