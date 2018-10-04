import React from "react";

import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Container } from "native-base";
import { Text as AnimatedText } from "react-native-animatable";
import { LinearGradient } from "expo";
import Button from "./NextStepButton";

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
                fontSize: 32,
                textAlign: "center",
                color: "#7E7F9A",
                marginBottom: 20
              }}
            >
              All set!
            </AnimatedText>
            <AnimatedText
              useNativeDriver={true}
              animation="fadeInUp"
              style={{ fontSize: 16, textAlign: "center", color: "#7E7F9A" }}
            >
              We'll check your phone's location occasionally over the next 7
              days to see if you went to gym {this.props.frequency} times. If
              you don't, we'll charge your account for a ${this.props.donation}{" "}
              donation!
            </AnimatedText>
            <Button
              text="I  understand and agree!"
              onPress={() => {
                this.props.navigation.navigate("ViewCommitment");
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
