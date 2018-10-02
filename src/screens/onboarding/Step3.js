import React from 'react';

import OnboardingStep from './OnboardingStep';
import { Picker } from 'native-base';

export default class Step3 extends React.Component {
    state = {
        frequency: 0
    };

    changeFrequency = value => {
        this.setState({ frequency: value });
    };

    render() {
        return (
            <OnboardingStep
                hero="How many times will you go to gym this week?"
                description="This is where you decide your level of commitment!"
                nextStep={{
                    label: 'Select number of times',
                    action: () => {
                        this.props.navigation.navigate('Step2');
                    }
                }}
            >
                <Picker
                    selectedValue={this.state.frequency}
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
