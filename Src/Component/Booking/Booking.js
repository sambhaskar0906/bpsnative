import React, { useContext } from 'react';
import { View, ImageBackground, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../Theme/ThemeContext ';
import Icon from 'react-native-vector-icons/Ionicons';

const imagePaths = {
    tracker: require('../../Assest/images/Tracker.png'),
    profile: require('../../Assest/images/profile.png'),
    google: require('../../Assest/images/google.png'),
};

const Colors = {
    success: '#28a745',
    error: '#8f0000',
};

const bookingData = [
    {
        id: '1234',
        from: 'C-32, F block, Sector 40, Noida',
        to: 'A-56, G block, Sector 110, Greater Noida',
        pickupTime: '10:10 AM',
        deliveryTime: '03:30 PM',
        distance: '40 KM',
    },
    // Other booking data if necessary
];

const Booking = () => {
    const { colors } = useContext(ThemeContext);
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <ImageBackground source={imagePaths.tracker} style={{ width: '100%', height: 300, justifyContent: 'center' }}>
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
                <View style={{ alignItems: 'center', marginTop: 120 }}>
                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', marginBottom: 20 }}>Showing deliveries at your preferred Location</Text>
                    <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                        <Icon name="location-outline" size={24} color="red" style={{ marginRight: 10 }} />
                        <Text style={{ fontSize: 16 }}>C-32, F block, Sector 40, Noida</Text>
                        <TouchableOpacity>
                            <Icon name="chevron-down-outline" size={26} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', marginVertical: 20 }}>
                        <Button mode="contained" style={{ flex: 1, marginHorizontal: 10, paddingVertical: 8, backgroundColor: '#0155A5' }} labelStyle={{ fontSize: 16 }}>
                            Live Location
                        </Button>
                        <Button mode="contained" style={{ flex: 1, marginHorizontal: 10, paddingVertical: 8, backgroundColor: '#0155A5' }} labelStyle={{ fontSize: 16 }}>
                            Change Location
                        </Button>
                    </View>
                </View>
            </ImageBackground>
            <View>
                {bookingData.map((booking, index) => (
                    <View key={index} style={{ marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, backgroundColor: 'white' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Booking ID: #{booking.id}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 16 }}>Details</Text>
                                <Icon name="chevron-forward-outline" size={16} color="#000" style={{ marginLeft: 5 }} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginVertical: 10 }}>
                            <View>
                                <Text style={{ fontSize: 14, marginRight: 20, flexShrink: 1 }}>From: {booking.from}</Text>
                                <Text style={{ fontSize: 14, marginRight: 20, flexShrink: 1 }}>To: {booking.to}</Text>
                            </View>
                            <Image source={imagePaths.google} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, backgroundColor: 'white' }}>
                            <Text style={{ fontSize: 14 }}>Pickup: {booking.pickupTime}</Text>
                            <Text style={{ fontSize: 14 }}>Delivery: {booking.deliveryTime}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, backgroundColor: 'white' }}>
                            <Text style={{ fontSize: 14 }}>Distance: {booking.distance}</Text>
                            <Button
                                icon={() => <Icon name="call" size={24} color="white" />}
                                mode="contained"
                                onPress={() => console.log('Calling...')}
                                style={{ marginLeft: 10 }}
                            >
                                Call
                            </Button>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', marginVertical: 20 }}>
                            <Button mode="contained" style={{ flex: 1, marginHorizontal: 10, paddingVertical: 8, backgroundColor: Colors.success }} labelStyle={{ fontSize: 16 }}>
                                Accept
                            </Button>
                            <Button mode="contained" style={{ flex: 1, marginHorizontal: 10, paddingVertical: 8, backgroundColor: Colors.error }} labelStyle={{ fontSize: 16 }}>
                                Decline
                            </Button>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default Booking;
