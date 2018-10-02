import React from 'react';
import { Platform, Button, View } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import { connect } from 'react-redux';
import { update } from '../modules/commitments';

const { Marker } = MapView;

class FindGym extends React.Component {
    state = {};
    static navigationOptions = {
        title: 'Find your gym'
    };

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied'
            });
        }
        if (!this.props.location) {
            let location = await Location.getCurrentPositionAsync({});
            this.setState({
                location
            });
        } else {
            let location = this.props.location;
            this.setState({
                location: {
                    coords: location
                }
            });
        }
    };

    onRegionChange = ({ latitude, longitude }) => {
        this.setState({
            location: {
                coords: {
                    latitude,
                    longitude
                }
            }
        });
    };

    saveGymLocation = () => {
        const { navigation } = this.props;
        this.props.saveGymLocation(this.state.location.coords);
        navigation.getParam('submitHandler')();
        // navigation.navigate('EditCommitment')
    };

    render() {
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                {this.state.location && (
                    <MapView
                        style={{
                            flex: 1
                        }}
                        initialRegion={{
                            latitude: this.state.location.coords.latitude,
                            longitude: this.state.location.coords.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01
                        }}
                        onRegionChange={this.onRegionChange}
                    >
                        <Marker coordinate={this.state.location.coords} />
                    </MapView>
                )}
                <View
                    style={{
                        position: 'absolute',
                        bottom: 40,
                        left: 40,
                        right: 40
                    }}
                >
                    <Button title="That's it!" onPress={this.saveGymLocation} />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    var { location } = state.commitments;

    return {
        location
    };
}

function mapDispatchToProps(dispatch) {
    return {
        saveGymLocation: value =>
            dispatch(
                update({
                    field: 'location',
                    value
                })
            )
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FindGym);

// AIzaSyD-bDEdd1GGNMxkm1tNYZkJzS6xCcSxhZo
