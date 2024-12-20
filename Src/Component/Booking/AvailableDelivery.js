import React from 'react';
import { View, ImageBackground, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyComponent from '../AppBar/menuIconBar';

const imagePaths = {
    tracker: require('../../Assest/images/Tracker.png'),
    profile: require('../../Assest/images/profile.png'),
    man: require('../../Assest/images/man.png'),
};

const AvailableDelivery = () => {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <ImageBackground source={imagePaths.tracker} style={{ width: '100%', height: '70%', resizeMode: 'cover', justifyContent: 'center' }}>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, flexDirection: 'row', alignItems: 'center', padding: 16 }}>
                    <View style={{ position: 'absolute', left: 0 }}>
                        <MyComponent />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
                            Bharat
                        </Text>
                    </View>
                    <View style={{ position: 'absolute', right: 0 }}>
                        <Image source={imagePaths.profile} style={{ width: 32, height: 32, resizeMode: 'cover', borderRadius: 16 }} />
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: -100 }}>
                    <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', marginBottom: 15 }}>Hello Sam</Text>
                    <Text style={{ color: 'white', fontSize: 24, textAlign: 'center', marginBottom: 10 }}>Deliver on Time</Text>
                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', marginBottom: 20 }}>and get Great Rewards</Text>
                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', marginBottom: 20 }}>Showing deliveries at your preferred Location</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                        <Icon name="location-on" size={24} color="red" style={{ marginRight: 10 }} />
                        <Text style={{ fontSize: 16, textAlign: 'center' }}>C-32, F block, Sector 40, Noida</Text>
                        <TouchableOpacity style={{ padding: 5, marginLeft: 10 }}>
                            <Icon name="arrow-drop-down" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', marginBottom: 20 }}>
                        <Button mode="contained" style={{ flex: 1, marginHorizontal: 20, paddingVertical: 8, backgroundColor: '#0155A5' }} labelStyle={{ fontSize: 16 }}>
                            Live Location
                        </Button>
                        <Button mode="contained" style={{ flex: 1, marginHorizontal: 20, paddingVertical: 8, backgroundColor: '#0155A5' }} labelStyle={{ fontSize: 16 }}>
                            Change Location
                        </Button>
                    </View>
                </View>
            </ImageBackground>
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={imagePaths.man} style={{ resizeMode: 'contain', width: '80%' }} />
                <Button mode="contained" style={{ position: 'absolute', top: '50%', width: '90%', borderRadius: 10, backgroundColor: '#0155A5' }} labelStyle={{ fontSize: 16 }}>
                    5 Deliveries Available
                </Button>
            </View>
        </ScrollView>
    );
};

export default AvailableDelivery;
