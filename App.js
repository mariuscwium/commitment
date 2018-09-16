import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Onboarding from './src/screens/Onboarding';
import EditCommitment from './src/screens/EditCommitment';
import FindGym from './src/screens/FindGym';

const RootStack = createStackNavigator({
    Home: {
        screen: Onboarding,
        navigationOptions: () => ({
            header: null
        })
    },
    EditCommitment: {
        screen: EditCommitment
    },
    FindGym: {
        screen: FindGym
    }
});

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
