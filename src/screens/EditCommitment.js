import React from 'react';
import { View, Text, StyleSheetScrollView, Button, TextInput, Picker } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { update } from '../modules/commitments';

const { Marker } = MapView;
class EditCommitment extends React.Component {
    static navigationOptions = {
        title: 'Edit your commitment'
    };

    Location = () => {
        if (this.props.location) {
            return (
                <View style={{ flex: 1 }}>
                    <MapView
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude: this.props.location.latitude,
                            longitude: this.props.location.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01
                        }}
                        liteMode
                    >
                        <Marker coordinate={this.props.location} />
                    </MapView>
                    <Button title="Change location" onPress={() => this.props.navigation.navigate('FindGym')} />
                </View>
            );
        } else {
            return <Button title="Find your gym" onPress={() => this.props.navigation.navigate('FindGym')} />;
        }
    };

    updateCommitment = values => {
        Object.keys(values).map(key => {
            this.props.updateCommitment({
                field: key,
                value: values[key]
            });
        });
        this.props.navigation.navigate('ViewCommitment');
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>{this.Location()}</View>
                <Formik
                    style={{ flex: 1 }}
                    initialValues={{
                        frequency: 1,
                        penalty: 5
                    }}
                    onSubmit={values => this.updateCommitment(values)}
                >
                    {props => (
                        <View style={{ flex: 1 }}>
                            <Text> How often can you commit to going to the gym ? </Text>
                            <Picker
                                selectedValue={props.values.frequency}
                                onValueChange={props.handleChange('frequency')}
                            >
                                <Picker.Item label="Once a week" value="1" />
                                <Picker.Item label="Twice a week" value="2" />
                                <Picker.Item label="Three times a week" value="3" />
                                <Picker.Item label="Four times a week" value="4" />
                            </Picker>
                            <Text> How much are you willing to pay if you don 't go that many times?</Text>
                            <Picker selectedValue={props.values.penalty} onValueChange={props.handleChange('penalty')}>
                                <Picker.Item label="$2" value="2" />
                                <Picker.Item label="$5" value="5" />
                                <Picker.Item label="$10" value="10" />
                                <Picker.Item label="$20" value="20" />
                            </Picker>
                            {this.props.location && <Button onPress={props.handleSubmit} title="Submit" />}
                        </View>
                    )}
                </Formik>
            </View>
        );
    }
}

function mapStateToProps(state) {
    var { location, frequency, penalty } = state.commitments;
    return {
        location,
        frequency,
        penalty
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateCommitment: ({ field, value }) =>
            dispatch(
                update({
                    field,
                    value
                })
            )
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditCommitment);
