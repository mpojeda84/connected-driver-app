import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, StyleSheet } from "react-native";

export default class Navigation extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 40,
    height: 40
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Icon
          style={styles.icon2}
          name="car"
          type="MaterialCommunityIcons"
          onPress={() => {
            this.props.navigation.push("Driving");
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon2: {
    backgroundColor: "transparent",
    color: "grey",
    fontSize: 40
  }
});
