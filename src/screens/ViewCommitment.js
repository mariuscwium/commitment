import React from "react";

import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Container } from "native-base";
import { Text as AnimatedText } from "react-native-animatable";
import { LinearGradient } from "expo";
import Button from "./onboarding/NextStepButton";

class ViewCommitment extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <LinearGradient colors={["#EB9486", "#CAE7B9"]} style={{ padding: 20 }}>
          <Container style={styles.container}>
            <AnimatedText
              delay={500}
              animation="fadeInUp"
              useNativeDriver={true}
              style={{
                fontSize: 16,
                textAlign: "center",
                marginTop: 20,
                color: "#7E7F9A"
              }}
            >
              You have
            </AnimatedText>
            <AnimatedText
              useNativeDriver={true}
              animation="fadeInUp"
              style={{ fontSize: 32, textAlign: "center", color: "#7E7F9A" }}
            >
              {this.props.daysLeft} days left
            </AnimatedText>
            <AnimatedText
              delay={500}
              animation="fadeInUp"
              useNativeDriver={true}
              style={{
                fontSize: 16,
                textAlign: "center",
                marginTop: 20,
                color: "#7E7F9A"
              }}
            >
              to go to gym {this.props.frequency - this.props.timesMet} more
              time(s), or you will have to pay
            </AnimatedText>
            <AnimatedText
              useNativeDriver={true}
              animation="fadeInUp"
              style={{ fontSize: 32, textAlign: "center", color: "#7E7F9A" }}
            >
              ${this.props.donation}
            </AnimatedText>
            <Button
              text="Cancel my commitment
              "
              onPress={() => {
                this.props.navigation.navigate("EditCommitment");
              }}
            />
          </Container>
        </LinearGradient>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  }
  // https://coolors.co/cae7b9-f3de8a-eb9486-7e7f9a-97a7b3
});
function mapStateToProps(state) {
  var { timesMet, daysLeft, donation, frequency } = state.commitments;
  return {
    timesMet,
    daysLeft,
    donation,
    frequency
  };
}

export default connect(
  mapStateToProps,
  null
)(ViewCommitment);
