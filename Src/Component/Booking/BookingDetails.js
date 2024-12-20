import React, { useContext } from 'react';
import { View, ImageBackground, Text, Image, ScrollView } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../Theme/ThemeContext ';
import Icon from 'react-native-vector-icons/Ionicons';

const imagePaths = {
    tracker: require('../../Assest/images/Tracker.png'),
    profile: require('../../Assest/images/profile.png'),
    google: require('../../Assest/images/google.png'),
};

const BookingDetails = () => {
    const { colors } = useContext(ThemeContext);
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <ImageBackground
                source={imagePaths.tracker}
                style={{ width: '100%', height: 100, resizeMode: 'cover', justifyContent: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, overflow: 'hidden' }}
            >
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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20, backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Booking ID: #1234</Text>
                </View>
                <View style={{ paddingHorizontal: 10, paddingBottom: 20 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', paddingBottom: 10 }}>Sender’s Details:</Text>
                    <Text style={{ fontSize: 14 }}>Name: Sam</Text>
                    <Text style={{ fontSize: 14 }}>Contact Num: 123456789</Text>
                    <Text style={{ fontSize: 14 }}>Email ID: xyz@gmail.com</Text>
                </View>

                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', paddingBottom: 10 }}>Receiver Details:</Text>
                    <Text style={{ fontSize: 14 }}>Name: Sam</Text>
                    <Text style={{ fontSize: 14 }}>Contact Num: 123456789</Text>
                    <Text style={{ fontSize: 14 }}>Email ID: xyz@gmail.com</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                    <View>
                        <Text style={{ fontSize: 14, marginRight: 20, flexShrink: 1 }}>From: C-32, F block, Sector 40, Noida</Text>
                        <Text style={{ fontSize: 14, marginRight: 20, flexShrink: 1 }}>To: A-56, G block, Sector 110, Greater Noida</Text>
                    </View>
                    <Image source={imagePaths.google} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Distance: 40 KM</Text>
                    <Button
                        icon={() => <Icon name="call" size={24} color="white" />}
                        mode="contained"
                        onPress={() => console.log('Calling...')}
                        style={{ marginLeft: 10 }}
                    >
                        Call
                    </Button>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Pickup: 10:10 AM</Text>
                    <Text style={{ fontSize: 16 }}>Delivery: 03:30 PM</Text>
                </View>

                <Button
                    mode="contained"
                    style={{ flex: 1, marginVertical: 10, paddingVertical: 8 }}
                >
                    Start
                </Button>
            </View>
        </ScrollView>
    );
};

export default BookingDetails;
