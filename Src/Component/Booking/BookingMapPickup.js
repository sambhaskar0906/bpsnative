import React, { useContext } from 'react';
import { View, ImageBackground, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../Theme/ThemeContext ';
import Icon from 'react-native-vector-icons/Ionicons';

const imagePaths = {
    tracker: require('../../Assest/images/Tracker.png'),
    profile: require('../../Assest/images/profile.png'),
    google: require('../../Assest/images/google.png'),
    map: require('../../Assest/images/map.png')
};

const BookingMapPickup = () => {
    const { colors } = useContext(ThemeContext);
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <ImageBackground source={imagePaths.tracker} style={{ width: '100%', height: 100, resizeMode: 'cover', justifyContent: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, overflow: 'hidden' }}>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 }}>
                    <IconButton
                        icon="arrow-left"
                        size={30}
                        iconColor={colors.background}
                        onPress={() => navigation.goBack()}
                        style={{ paddingTop: 10, paddingLeft: 10 }}
                    />
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Bharat</Text>
                    <Image source={imagePaths.profile} style={{ width: 32, height: 32, borderRadius: 16 }} />
                </View>
            </ImageBackground>

            <View style={{ marginBottom: 10, paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Booking ID: #1234</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Details</Text>
                        <Icon name="chevron-forward-outline" size={16} color="#000" style={{ marginLeft: 5 }} />
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                    <Image source={imagePaths.map} style={{ width: 300, height: 200, resizeMode: 'contain' }} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Time left for Pick-up</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>15 : 30 minutes</Text>
                </View>

                <Button
                    mode="contained"
                    style={{ flex: 1, marginVertical: 10, paddingVertical: 8 }}
                >
                    Picked Up
                </Button>

                <Button
                    mode="contained"
                    style={{ flex: 1, marginVertical: 10, paddingVertical: 8 }}
                >
                    Delivered
                </Button>
            </View>
        </ScrollView>
    );
};

export default BookingMapPickup;
