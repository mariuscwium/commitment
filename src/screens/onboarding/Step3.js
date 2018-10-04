import React from 'react';

import OnboardingStep from './OnboardingStep';
import { Picker } from 'native-base';

import { connect } from 'react-redux';
import { update } from '../../modules/commitments';

class Step3 extends React.Component {
    changeFrequency = value => {
        this.props.updateFrequency(value);
        this.props.navigation.navigate('Step4');
    };

    render() {
        return (
            <OnboardingStep
                hero="How many times will you go to gym this week?"
                description="This is where you decide your level of commitment!"
            >
                <Picker
                    style={{ position: 'absolute', bottom: 40, left: 40, right: 40 }}
                    selectedValue={this.props.frequency}
                    onValueChange={this.changeFrequency}
                    placeholder="Select your commitment level"
                >
                    <Picker.Item label="Once a week" value="1" />
                    <Picker.Item label="Twice a week" value="2" />
                    <Picker.Item label="Three times a week" value="3" />
                    <Picker.Item label="Four times a week" value="4" />
                </Picker>
            </OnboardingStep>
        );
    }
}

function mapStateToProps(state) {
    var { frequency } = state.commitments;
    return {
        frequency
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateFrequency: value =>
            dispatch(
                update({
                    field: 'frequency',
                    value
                })
            )
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Step3);
