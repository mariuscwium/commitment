import React from 'react';

import OnboardingStep from './OnboardingStep';
import Button from './NextStepButton';

export default class Step2 extends React.Component {
    render() {
        return (
            <OnboardingStep
                hero="First, let's find your gym."
                description="We'll count how many times you visit the gym by occasionally checking your phone's location."
            >
                <Button
                    text="Okay, let's find it"
                    onPress={() => {
                        this.props.navigation.navigate('FindGym', {
                            submitHandler: () => this.props.navigation.navigate('Step3')
                        });
                    }}
                />
            </OnboardingStep>
        );
    }
}
