import React, { Component } from "react";
import Header from "../symbols/Header";
import Footer from "../symbols/Footer";
import Background from "../symbols/Background";
import { Center } from "@builderx/utils";

import { View, StyleSheet, Text, Image } from "react-native";

export default class Driving extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Header style={styles.header} />
        <Footer style={styles.footer} navigation={this.props.navigation} />
        <Background style={styles.background} />
        <Text style={styles.text3}>Last Week</Text>
        <View style={styles.rect} />
        <Text style={styles.text4}>Today</Text>
        <Center horizontal>
          <Text style={styles.text5}>My Driving</Text>
        </Center>
        <Center horizontal>
          <View style={styles.rect3} />
        </Center>
        <Center horizontal>
          <Text style={styles.text6}>42.3</Text>
        </Center>
        <Center horizontal>
          <Text style={styles.text7}>Miles Driven</Text>
        </Center>
        <Image style={styles.image} source={require("../assets/image11.png")} />
        <Text style={styles.text8}>87</Text>
        <Text style={styles.text9}>mph</Text>
        <Center horizontal>
          <Text style={styles.text10}>Highest Speed</Text>
        </Center>
        <View style={styles.rect4} />
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
    height: 632,
    position: "absolute"
  },

  text3: {
    top: 283.5,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 22,

    color: "rgba(255,255,255,1)",
    left: "54.16%",
    fontFamily: "Arial-BoldMT"
  },
  rect: {
    height: 41,
    width: 148,
    left: 40,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 0,
    top: "33.87%",
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    opacity: 1
  },
  text4: {
    top: 284,
    left: "22.67%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 22,
    fontFamily: "Arial-BoldMT",
    color: "rgba(27,30,63,1)"
  },

  text5: {
    top: 151,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 40,
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,255,255,1)"
  },
  rect3: {
    top: 364.5,
    width: 296,
    height: 54,
    position: "absolute",
    elevation: 15,
    backgroundColor: "rgba(33,42,87,1)",
    opacity: 1,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 5
  },
  text6: {
    top: 374.5,
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 1,
    fontSize: 35,
    fontFamily: "Verdana-Bold",
    color: "rgba(255,255,255,1)"
  },
  text7: {
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.75,
    fontSize: 22,
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,255,255,1)",
    top: "53.82%"
  },
  image: {
    top: "61.82%",
    width: 171,
    height: 171,
    position: "absolute",
    left: "27.2%",
    fontSize: 35
  },
  text8: {
    top: "73.4%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 1,
    fontSize: 35,
    fontFamily: "Verdana-Bold",
    color: "rgba(255,255,255,1)",
    left: "43.47%"
  },
  text9: {
    top: "77.46%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.75,
    fontSize: 18,
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,255,255,1)",
    left: "44.8%"
  },
  text10: {
    top: "84.36%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.75,
    fontSize: 22,
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,255,255,1)"
  },
  rect4: {
    top: "33.87%",
    left: "49.87%",
    width: 149,
    height: 41,
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 7,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 0
  }
});
