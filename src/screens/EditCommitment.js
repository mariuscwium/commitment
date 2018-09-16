import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class EditCommitment extends React.Component {
    static navigationOptions = {
        title: 'Edit your commitment'
    };
    render() {
        return (
            <View>
                <Text>Edit commitment</Text>
                <Button title="Find your gym" onPress={() => this.props.navigation.navigate('FindGym')} />
            </View>
        );
    }
}

export default EditCommitment;
