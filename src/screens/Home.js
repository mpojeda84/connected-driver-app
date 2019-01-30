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
        <View style={styles.rect2}>
          <Image
            style={styles.image}
            source={require("../assets/image3.png")}
          />
          <Text style={styles.text3}>Average Fuel</Text>
          <Text style={styles.text4}>Economy</Text>
        </View>
        <View style={styles.rect} />
        <Center horizontal>
          <Text style={styles.text2}>Odometer</Text>
        </Center>
        <View style={styles.rect3}>
          <Text style={styles.text5}>Economy</Text>
          <Text style={styles.text6}>Best Fuel</Text>
          <Image
            style={styles.image2}
            source={require("../assets/image3.png")}
          />
        </View>
        <Text style={styles.KRM5on}>32,498.45</Text>
        <Text style={styles.WEf4FD}>Average Fuel</Text>
        <Text style={styles.UPcFHZ}>mpg</Text>
        <Text style={styles.text10}>32</Text>
        <Text style={styles.text11}>mpg</Text>
        <Center horizontal>
          <View style={styles.rect4}>
            <Text style={styles.text12}>VIN #</Text>
            <Text style={styles.text13}>38474746920033999</Text>
          </View>
        </Center>
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
    left: "0%",
    height: 631,
    width: 375
  },
  text: {
    top: 155.47,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontFamily: "Oswald-Medium",
    fontSize: 40
  },
  rect: {
    height: 54,
    width: 296,
    top: 293,
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
    shadowOpacity: 1,
    left: "10.67%"
  },
  text2: {
    top: 358,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 22,
    fontFamily: "Oswald-Medium",
    color: "rgba(255,255,255,1)"
  },
  rect2: {
    height: 207,
    width: 135,
    top: 427,
    left: 37,
    position: "absolute"
  },
  image: {
    top: 0,
    left: 0,
    width: 135,
    height: 135,
    position: "absolute"
  },
  text3: {
    top: "74.88%",
    left: "10.37%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.65,
    fontSize: 22,
    fontFamily: "Oswald-Medium",
    color: "rgba(255,255,255,1)"
  },
  text4: {
    top: "89.37%",
    left: "22.96%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.65,
    fontSize: 22,
    fontFamily: "Oswald-Medium",
    color: "rgba(255,255,255,1)"
  },
  rect3: {
    height: 207,
    width: 135,
    top: 427,
    left: 211,
    position: "absolute"
  },
  text5: {
    top: "89.37%",
    left: "22.96%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.65,
    fontSize: 22,
    fontFamily: "Oswald-Medium",
    color: "rgba(255,255,255,1)"
  },
  text6: {
    top: "74.88%",
    left: "21.48%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.65,
    fontSize: 22,
    fontFamily: "Oswald-Medium",
    color: "rgba(255,255,255,1)"
  },
  image2: {
    top: 0,
    left: 0,
    width: 135,
    height: 135,
    position: "absolute"
  },
  KRM5on: {
    top: 302.5,
    left: "19.33%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 1,
    fontSize: 35,
    fontFamily: "ConthraxSb-Regular",
    color: "rgba(255,255,255,1)"
  },
  WEf4FD: {
    top: "56.03%",
    left: "20.53%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.65,
    fontSize: 35,
    fontFamily: "Oswald-Medium",
    color: "rgba(255,255,255,1)"
  },
  UPcFHZ: {
    top: "60.34%",
    left: "24.27%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.65,
    fontSize: 16,
    fontFamily: "Oswald-Medium",
    color: "rgba(255,255,255,1)"
  },
  text10: {
    top: "55.91%",
    left: "66.93%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 1,
    fontSize: 35,
    fontFamily: "ConthraxSb-Regular",
    color: "rgba(255,255,255,1)"
  },
  text11: {
    top: "60.22%",
    left: "70.67%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.65,
    fontSize: 16,
    fontFamily: "Oswald-Medium",
    color: "rgba(255,255,255,1)"
  },
  rect4: {
    height: 24,
    width: 238,
    top: 681,
    position: "absolute"
  },
  text12: {
    top: "4.17%",
    left: "0%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 0.65,
    fontSize: 22,
    fontFamily: "Oswald-Medium",
    color: "rgba(255,255,255,1)"
  },
  text13: {
    top: "0%",
    left: "22.27%",
    position: "absolute",
    backgroundColor: "transparent",
    opacity: 1,
    fontSize: 22,
    fontFamily: "Oswald-Medium",
    color: "rgba(255,255,255,1)"
  }
});
