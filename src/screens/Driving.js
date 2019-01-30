import React, { Component } from "react";
import Header from "../symbols/Header";
import Footer from "../symbols/Footer";
import Background from "../symbols/Background";
import { View, StyleSheet } from "react-native";

export default class Driving extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Header style={styles.header} />
        <Footer style={styles.footer} navigation={this.props.navigation} />
        <Background style={styles.background} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  header: {
    top: 0,
    left: 0,
    width: 375,
    height: 103,
    position: "absolute"
  },
  footer: {
    top: 725,
    left: 0,
    width: 375,
    height: 88,
    position: "absolute"
  },
  background: {
    top: "12.68%",
    left: "0%",
    width: 375,
    height: 631,
    position: "absolute"
  }
});
