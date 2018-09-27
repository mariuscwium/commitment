import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Button, Text } from 'native-base';
import { Text as AnimatedText } from 'react-native-animatable';
import { LinearGradient } from 'expo';

class Onboarding extends React.Component {
    onboardingStep1 = (
        <Container style={styles.container}>
            <LinearGradient colors={['#EB9486', '#CAE7B9']}>
                <Container style={styles.container}>
                    <AnimatedText animation="fadeInUp" style={{ fontSize: 32, textAlign: 'center', color: '#7E7F9A' }}>
                        Are you ready for a lifestyle change?
                    </AnimatedText>
                    <AnimatedText
                        delay={500}
                        animation="fadeInUp"
                        style={{ fontSize: 16, textAlign: 'center', marginTop: 20, color: '#7E7F9A' }}
                    >
                        The Commitments app lets you decide how important your gym goals are.
                    </AnimatedText>
                </Container>

                <Button
                    style={{
                        position: 'absolute',
                        bottom: 40,
                        left: 40,
                        right: 40,
                        justifyContent: 'center'
                    }}
                    bordered={true}
                    onPress={() => this.props.navigation.navigate('EditCommitment')}
                >
                    <Text style={{ textAlign: 'center' }}>I'm ready to commit!</Text>
                </Button>
            </LinearGradient>
        </Container>
    );

    render() {
        return this.onboardingStep1;
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

export default Onboarding;
