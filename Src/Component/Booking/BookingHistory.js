import React, { useContext } from 'react';
import { View, ImageBackground, Text, Image, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../Theme/ThemeContext ';
import Icon from 'react-native-vector-icons/Ionicons';

const imagePaths = {
    tracker: require('../../Assest/images/Tracker.png'),
    profile: require('../../Assest/images/profile.png'),
    google: require('../../Assest/images/google.png'),
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
];

const BookingHistory = () => {
    const { colors } = useContext(ThemeContext);
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <ImageBackground
                source={imagePaths.tracker}
                style={{
                    width: '100%',
                    height: 100,
                    resizeMode: 'cover',
                    justifyContent: 'center',
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    overflow: 'hidden',
                }}
            >
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 16,
                    }}
                >
                    <IconButton
                        icon="arrow-left"
                        size={30}
                        iconColor={colors.background}
                        onPress={() => navigation.goBack()}
                        style={{ paddingTop: 10, paddingLeft: 10 }}
                    />
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Bharat</Text>
                    <Image
                        source={imagePaths.profile}
                        style={{ width: 32, height: 32, borderRadius: 16 }}
                    />
                </View>
            </ImageBackground>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    backgroundColor: 'white',
                }}
            >
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>History</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16 }}>Sort by</Text>
                    <Icon name="chevron-forward-outline" size={16} color="#000" style={{ marginLeft: 5 }} />
                </View>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    backgroundColor: 'white',
                }}
            >
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Today</Text>
            </View>

            <View style={{ paddingLeft: 10 }}>
                {bookingData.map((booking, index) => (
                    <View key={index} style={{ marginBottom: 10 }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                backgroundColor: 'white',
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Booking ID: #{booking.id}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 16 }}>Details</Text>
                                <Icon name="chevron-forward-outline" size={16} color="#000" style={{ marginLeft: 5 }} />
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: 20,
                                marginVertical: 10,
                            }}
                        >
                            <View>
                                <Text style={{ fontSize: 14, marginRight: 20, flexShrink: 1 }}>From: {booking.from}</Text>
                                <Text style={{ fontSize: 14, marginRight: 20, flexShrink: 1 }}>To: {booking.to}</Text>
                            </View>
                            <Image source={imagePaths.google} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                backgroundColor: 'white',
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Pickup: {booking.pickupTime}</Text>
                            <Text style={{ fontSize: 16 }}>Delivery: {booking.deliveryTime}</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                backgroundColor: 'white',
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Distance: {booking.distance}</Text>
                        </View>
                    </View>
                ))}
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    backgroundColor: 'white',
                }}
            >
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Yesterday</Text>
            </View>

            <View style={{ paddingLeft: 10 }}>
                {bookingData.map((booking, index) => (
                    <View key={index} style={{ marginBottom: 10 }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                backgroundColor: 'white',
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Booking ID: #{booking.id}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 16 }}>Details</Text>
                                <Icon name="chevron-forward-outline" size={16} color="#000" style={{ marginLeft: 5 }} />
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: 20,
                                marginVertical: 10,
                            }}
                        >
                            <View>
                                <Text style={{ fontSize: 14, marginRight: 20, flexShrink: 1 }}>From: {booking.from}</Text>
                                <Text style={{ fontSize: 14, marginRight: 20, flexShrink: 1 }}>To: {booking.to}</Text>
                            </View>
                            <Image source={imagePaths.google} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                backgroundColor: 'white',
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Pickup: {booking.pickupTime}</Text>
                            <Text style={{ fontSize: 16 }}>Delivery: {booking.deliveryTime}</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                backgroundColor: 'white',
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Distance: {booking.distance}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default BookingHistory;
