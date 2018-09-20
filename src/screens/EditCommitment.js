import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik';

class EditCommitment extends React.Component {
    static navigationOptions = {
        title: 'Edit your commitment'
    };

    Location = () => {
        if (this.props.commitmentLocation) {
            return (
                <View>
                    <Text>Gym location selected!</Text>
                    <Button title="Change location" onPress={() => this.props.navigation.navigate('FindGym')} />
                </View>
            );
        } else {
            return <Button title="Find your gym" onPress={() => this.props.navigation.navigate('FindGym')} />;
        }
    };

    updateCommitment = values => {};
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>{this.Location()}</View>

                <Formik style={{ flex: 1 }} initialValues={{ frequency: '1' }} onSubmit={values => console.log(values)}>
                    {props => (
                        <View style={{ flex: 1 }}>
                            <Text>How often do you want to go to the gym?</Text>
                            <Picker
                                selectedValue={props.values.frequency}
                                onValueChange={props.handleChange('frequency')}
                            >
                                <Picker.Item label="Once a week" value="1" />
                                <Picker.Item label="Twice a week" value="2" />
                                <Picker.Item label="Three times a week" value="3" />
                                <Picker.Item label="Four times a week" value="4" />
                            </Picker>

                            <Text>If you don't go that many times, how much are you willing to pay?</Text>
                            <Picker selectedValue={props.values.penalty} onValueChange={props.handleChange('penalty')}>
                                <Picker.Item label="$2" value="2" />
                                <Picker.Item label="$5" value="5" />
                                <Picker.Item label="$10" value="10" />
                                <Picker.Item label="$20" value="20" />
                            </Picker>

                            <Button onPress={props.handleSubmit} title="Submit" />
                        </View>
                    )}
                </Formik>
            </View>
        );
    }
}

function mapStateToProps(state) {
    var { commitmentLocation } = state.commitments;
    return {
        commitmentLocation
    };
}

function mapDispatchToProps(dispatch) {
    return {
        update
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditCommitment);
