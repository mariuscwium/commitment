import React from "react";

import OnboardingStep from "./OnboardingStep";
import { Picker } from "native-base";

import { connect } from "react-redux";
import { update } from "../../modules/commitments";

class Step4 extends React.Component {
  changeDonation = value => {
    this.props.updateDonation(value);
    this.props.navigation.navigate("Step5");
  };

  render() {
    return (
      <OnboardingStep
        hero="If you don't, how much are you willing to donate?"
        description="Put your money where your mouth is!"
      >
        <Picker
          style={{
            position: "absolute",
            bottom: 40,
            left: 40,
            right: 40,
            borderColor: "#000000"
          }}
          selectedValue={this.props.donation}
          onValueChange={this.changeDonation}
          placeholder="Select your donation"
        >
          <Picker.Item label="$2" value="2" />
          <Picker.Item label="$5" value="5" />
          <Picker.Item label="$10" value="10" />
          <Picker.Item label="$20" value="20" />
        </Picker>
      </OnboardingStep>
    );
  }
}

function mapStateToProps(state) {
  var { donation } = state.commitments;
  return {
    donation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateDonation: value =>
      dispatch(
        update({
          field: "donation",
          value
        })
      )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step4);
