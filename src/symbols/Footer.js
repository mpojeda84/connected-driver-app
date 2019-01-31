import React, { Component } from "react";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";

import { View, StyleSheet } from "react-native";

export default class Footer extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 88
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <View style={styles.rect} />
        <Icon
          style={styles.icon}
          name="home"
          type="FontAwesome"
          onPress={() => {
            this.props.navigation.push("Home");
          }}
        />
        <Icon
          style={styles.icon3}
          name="group"
          type="FontAwesome"
          onPress={() => {
            this.props.navigation.push("Community");
          }}
        />
        <Icon
          style={styles.icon4}
          name="bell"
          type="FontAwesome"
          onPress={() => {
            this.props.navigation.push("Alerts");
          }}
        />
        <Icon
          name="automobile"
          style={styles.icon5}
          type="FontAwesome"
          onPress={() => {
            this.props.navigation.push("Driving");
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rect: {
    top: "0%",
    left: 0,
    width: 375,
    height: 88,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1
  },
  icon: {
    top: 14,
    left: 49,
    position: "absolute",
    backgroundColor: "transparent",
    color: "grey",
    fontSize: 40
  },

  icon3: {
    top: 19,
    left: 203,
    position: "absolute",
    backgroundColor: "transparent",
    color: "grey",
    fontSize: 32
  },
  icon4: {
    top: 18,
    left: 287,
    position: "absolute",
    backgroundColor: "transparent",
    color: "grey",
    fontSize: 33
  },
  icon5: {
    left: 124,
    position: "absolute",
    backgroundColor: "transparent",
    color: "grey",
    fontSize: 32,
    top: "20.45%"
  }
});
