import React from 'react';
import { Button, View } from 'react-native';
import { MapView, Location, Permissions } from 'expo';

const { Marker, Callout } = MapView;

class FindGym extends React.Component {
    state = {
        coords: {
            latitude: 37.78825,
            longitude: -122.4324
        }
    };
    static navigationOptions = {
        title: 'Find your gym'
    };

    onRegionChange = ({ latitude, longitude }) => {
        this.setState({
            coords: {
                latitude,
                longitude
            }
        });
    };

    saveGymLocation = () => {
        console.log(this.state.coords);
        this.props.navigation.navigate('EditCommitment');
    };

    render() {
        const { latitude, longitude } = this.state.coords;
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    onRegionChange={this.onRegionChange}
                >
                    <Marker coordinate={this.state.coords} />
                </MapView>
                <View style={{ position: 'absolute', bottom: 40, left: 40, right: 40 }}>
                    <Button title="That's it!" onPress={this.saveGymLocation} />
                </View>
            </View>
        );
    }
}

export default FindGym;

// AIzaSyD-bDEdd1GGNMxkm1tNYZkJzS6xCcSxhZo
