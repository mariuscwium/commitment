import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class ViewCommitment extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    You have {this.props.daysLeft} days left to go to gym {this.props.frequency - this.props.timesMet}{' '}
                    more time(s), or you will have to pay ${this.props.penalty}
                </Text>
                <Button
                    title="Change my commitment level!"
                    onPress={() => this.props.navigation.navigate('EditCommitment')}
                />
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

function mapStateToProps(state) {
    var { timesMet, daysLeft, penalty, frequency } = state.commitments;
    return {
        timesMet,
        daysLeft,
        penalty,
        frequency
    };
}

export default connect(
    mapStateToProps,
    null
)(ViewCommitment);
