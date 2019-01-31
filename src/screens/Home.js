import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Header from "../symbols/Header";
import Footer from "../symbols/Footer";
import Background from "../symbols/Background";
import { View, StyleSheet, Text, Image } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Footer style={styles.footer} navigation={this.props.navigation} />
        <Header style={styles.header} />
        <Background style={styles.background} />
        <Center horizontal>
          <Text style={styles.text}>2018 Honda</Text>
        </Center>
        <Center horizontal>
          <View style={styles.rect} />
        </Center>
        <Center horizontal>
          <Text style={styles.text2}>Odometer</Text>
        </Center>
        <Center horizontal>
          <Text style={styles.KRM5on}>32,498.45</Text>
        </Center>
        <Text style={styles.text3}>Average Fuel</Text>
        <Text style={styles.text4}>Economy</Text>
        <Text style={styles.text5}>Economy</Text>
        <Text style={styles.text6}>Best Fuel</Text>
        <Text style={styles.text12}>VIN #</Text>
        <Text style={styles.text13}>38474746920033999</Text>
        <Image style={styles.image} source={require("../assets/image3.png")} />
        <Image style={styles.image2} source={require("../assets/image3.png")} />
        <Text style={styles.text14}>32</Text>
        <Text style={styles.text15}>mpg</Text>
        <Text style={styles.text16}>36</Text>
        <Text style={styles.text17}>mpg</Text>
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
    position: "absolute",
    top: 0,
    left: 0,
    height: 103,
    width: 375
  },
  footer: {
    position: "absolute",
    top: 725,
    left: 0,
    height: 88,
    width: 375
  },
  background: {
    position: "absolute",
    top: "12.68%",

    height: 632,
    width: 375,
    left: "0%"
  },
  text: {
    top: 150.72,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontFamily: "Arial-BoldMT",
    fontSize: 40
  },
  rect: {
    height: 54,
    width: 296,
    top: 293.5,
    position: "absolute",
    backgroundColor: "rgba(33,42,87,1)",
    opacity: 1,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    elevation: 15,
    shadowOpacity: 1
  },
  text2: {
    top: 363,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 22,
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,255,255,1)",
    opacity: 0.75
  },

  KRM5on: {
    top: 302.5,

    position: "absolute",
    backgroundColor: "transparent",
    opacity: 1,
    fontSize: 35,
    fontFamily: "Verdana-Bold",
    color: "rgba(255,255,255,1)"
  },

  text3: {
    top: "71.67%",
    left: "10.13%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.75,
    fontSize: 22,
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,255,255,1)"
  },
  text4: {
    top: "75.37%",
    left: "15.2%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.75,
    fontSize: 22,
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,255,255,1)"
  },
  text5: {
    top: "75.49%",
    left: "61.87%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.75,
    fontSize: 22,
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,255,255,1)"
  },
  text6: {
    top: "71.67%",
    left: "61.6%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.75,
    fontSize: 22,
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,255,255,1)"
  },
  text12: {
    top: "83.87%",
    left: "15.2%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.75,
    fontSize: 22,
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,255,255,1)"
  },
  text13: {
    top: "83.87%",
    left: "30.93%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 1,
    fontSize: 22,
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,255,255,1)"
  },
  image: {
    top: 426,
    left: 40,
    width: 135,
    height: 135,
    position: "absolute"
  },
  image2: {
    top: 426,
    left: 213.5,
    width: 135,
    height: 135,
    position: "absolute"
  },
  text14: {
    top: "55.42%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 1,
    fontSize: 35,
    fontFamily: "Verdana-Bold",
    color: "rgba(255,255,255,1)",
    left: "22.27%"
  },
  text15: {
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.75,
    fontSize: 18,
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,255,255,1)",
    left: "23.47%",
    top: "59.73%"
  },
  text16: {
    top: "55.42%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 1,
    fontSize: 35,
    fontFamily: "Verdana-Bold",
    color: "rgba(255,255,255,1)",
    left: "68.27%"
  },
  text17: {
    top: "59.73%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.75,
    fontSize: 18,
    fontFamily: "Arial-BoldMT",
    color: "rgba(255,255,255,1)",
    left: "69.6%"
  }
});
