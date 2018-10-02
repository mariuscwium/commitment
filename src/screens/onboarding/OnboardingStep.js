import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container } from 'native-base';
import { Text as AnimatedText } from 'react-native-animatable';
import { LinearGradient } from 'expo';

export default class OnboardingStep extends React.Component {
    render() {
        return (
            <Container style={styles.container}>
                <LinearGradient colors={['#EB9486', '#CAE7B9']} style={{ padding: 20 }}>
                    <Container style={styles.container}>
                        <AnimatedText
                            useNativeDriver={true}
                            animation="fadeInUp"
                            style={{ fontSize: 32, textAlign: 'center', color: '#7E7F9A' }}
                        >
                            {this.props.hero}
                        </AnimatedText>
                        <AnimatedText
                            delay={500}
                            animation="fadeInUp"
                            useNativeDriver={true}
                            style={{ fontSize: 16, textAlign: 'center', marginTop: 20, color: '#7E7F9A' }}
                        >
                            {this.props.description}
                        </AnimatedText>
                    </Container>
                    {this.props.children}
                </LinearGradient>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    }
    // https://coolors.co/cae7b9-f3de8a-eb9486-7e7f9a-97a7b3
});
