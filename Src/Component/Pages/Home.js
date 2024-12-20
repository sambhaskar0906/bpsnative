import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// Import your images
import heroImage from '../../Assest/images/hero.jpeg';
import footerImage from '../../Assest/images/footer.png';

const Home = () => {
    const navigation = useNavigation();

    const handleNextPress = () => {
        navigation.navigate('Login');
    };

    return (
        <ImageBackground
            source={heroImage}
            style={{ flex: 1, resizeMode: 'cover' }}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 50,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 16,
                        marginTop: -200,
                    }}
                >
                    <Text
                        style={{
                            color: '#0155A5',
                            fontSize: 61,
                            fontWeight: 'bold',
                        }}
                    >
                        BHARAT
                    </Text>
                    <Text
                        style={{
                            color: '#000',
                            fontSize: 24,
                            fontWeight: 'bold',
                        }}
                    >
                        Parcel Services Pvt Ltd.
                    </Text>
                </View>
            </View>
            <ImageBackground
                source={footerImage}
                style={{
                    width: '100%',
                    height: 340,
                    position: 'absolute',
                    bottom: 0,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            width: '90%',
                            padding: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 28,
                                textAlign: 'center',
                                paddingHorizontal: 20,
                                marginBottom: 10,
                            }}
                        >
                            Welcome to shipfast!
                        </Text>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 18,
                                textAlign: 'center',
                                paddingHorizontal: 20,
                                marginBottom: 20,
                            }}
                        >
                            You can send items, track and be a courier in this application
                        </Text>
                    </View>
                    <Button
                        mode="contained"
                        labelStyle={{ fontSize: 20, color: '#0155A5' }}
                        style={{
                            marginHorizontal: 20,
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            backgroundColor: 'white',
                            width: '80%',
                        }}
                        onPress={handleNextPress}
                    >
                        Next
                    </Button>
                </View>
            </ImageBackground>
        </ImageBackground>
    );
};

export default Home;
