import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class EditCommitment extends React.Component {
    static navigationOptions = {
        title: 'Edit your commitment'
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Button title="Find your gym" onPress={() => this.props.navigation.navigate('FindGym')} />
                </View>
            </View>
        );
    }
}

export default EditCommitment;
