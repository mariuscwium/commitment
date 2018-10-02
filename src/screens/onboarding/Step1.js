import React from 'react';

import OnboardingStep from './OnboardingStep';
import Button from './NextStepButton';

export default class Step1 extends React.Component {
    render() {
        return (
            <OnboardingStep
                hero="Are you ready for a lifestyle change?"
                description="The Commitments app lets you decide how important your gym goals are."
            >
                <Button
                    nextStep={{
                        label: "I'm ready to commit!",
                        action: () => {
                            this.props.navigation.navigate('Step2');
                        }
                    }}
                />
            </OnboardingStep>
        );
    }
}
