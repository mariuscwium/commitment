import React from 'react';
import { Button, Text } from 'native-base';

export default props => (
    <Button
        style={{
            position: 'absolute',
            bottom: 40,
            left: 40,
            right: 40,
            justifyContent: 'center'
        }}
        bordered={true}
        onPress={props.onPress}
    >
        <Text style={{ textAlign: 'center' }}>{props.text}</Text>
    </Button>
);
