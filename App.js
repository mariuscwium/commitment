import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './src/configureStore';

import { createStackNavigator } from 'react-navigation';
import Onboarding from './src/screens/Onboarding';
import EditCommitment from './src/screens/EditCommitment';
import FindGym from './src/screens/FindGym';
import ViewCommitment from './src/screens/ViewCommitment';

import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

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
    },
    ViewCommitment: {
        screen: ViewCommitment,
        navigationOptions: () => ({
            header: null
        })
    }
});

const store = configureStore();

export default class App extends React.Component {
    state = {
        fontsLoaded: false
    };
    componentWillMount() {
        Expo.Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
        }).then(() => this.setState({ fontsLoaded: true }));
    }
    render() {
        if (this.state.fontsLoaded) {
            return (
                <Provider store={store}>
                    <StyleProvider style={getTheme(material)}>
                        <RootStack />
                    </StyleProvider>
                </Provider>
            );
        } else {
            return null;
        }
    }
}
