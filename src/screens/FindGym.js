import React from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';

const { Marker } = MapView;

class FindGym extends React.Component {
    state = {
        coords: {
            lat: 37.78825,
            long: -122.4324
        }
    };
    static navigationOptions = {
        title: 'Find your gym'
    };

    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: this.state.coords.lat,
                    longitude: this.state.coords.long,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            >
                <Marker
                    draggable
                    coordinate={{ latitude: this.state.coords.lat, longitude: this.state.coords.long }}
                    onDragEnd={e => this.setState({ x: e.nativeEvent.coordinate })}
                />
            </MapView>
        );
    }
}

export default FindGym;

// AIzaSyD-bDEdd1GGNMxkm1tNYZkJzS6xCcSxhZo
