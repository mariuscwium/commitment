import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";

class EditCommitment extends React.Component {
  static navigationOptions = {
    title: "Edit your commitment"
  };

  Location = () => {
    if (this.props.commitmentLocation) {
      return (
        <View>
          <Text>Gym location selected!</Text>
          <Button
            title="Change location"
            onPress={() => this.props.navigation.navigate("FindGym")}
          />
        </View>
      );
    } else {
      return (
        <Button
          title="Find your gym"
          onPress={() => this.props.navigation.navigate("FindGym")}
        />
      );
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>{this.Location()}</View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  var { commitmentLocation } = state.commitments;
  return {
    commitmentLocation
  };
}

export default connect(
  mapStateToProps,
  null
)(EditCommitment);
