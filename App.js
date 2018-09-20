import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './src/configureStore';

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

const store = configureStore();
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        );
    }
}
