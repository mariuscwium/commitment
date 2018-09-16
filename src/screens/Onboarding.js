import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class Onboarding extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>How badly do you want it?</Text>
                <Button title="I'm ready to commit!" onPress={() => this.props.navigation.navigate('EditCommitment')} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Onboarding;
