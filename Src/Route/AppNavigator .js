import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Component/Pages/Login';
import Registration from '../Component/Pages/Registration';
import Tracker from '../Component/Pages/Tracker';
import Home from '../Component/Pages/Home';
import Edit from '../Component/Pages/Edit';
import SendOtp from '../Component/Otp/SendOtp';
import Otpverify from '../Component/Otp/Otpveify';
import ChangePassword from '../Component/Otp/ChangePassword';
import UserProfile from '../Component/Profile/UserProfile';
import BookServices from '../Component/Booking/BookServices';
import menuIconBar from '../Component/AppBar/menuIconBar';
import AvailableDelivery from '../Component/Booking/AvailableDelivery';
import Booking from '../Component/Booking/Booking';
import BookingDetails from '../Component/Booking/BookingDetails';
import BookingPickup from '../Component/Booking/BookingPickup';
import BookingDelivered from '../Component/Booking/BookingDelivered';
import BookingSignature from '../Component/Booking/BookingSignature';
import BookingMapPickup from '../Component/Booking/BookingMapPickup';
import BookingHistory from '../Component/Booking/BookingHistory';
import History from '../Component/Pages/History';
import Tracking from '../Component/Pages/Tracking';
import HelpSupportScreen from '../Component/Help&Support/Help&support';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="menuicon" component={menuIconBar} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="Tracker" component={Tracker} />
                <Stack.Screen name='History' component={History} />
                <Stack.Screen name="Tracking" component={Tracking} />
                <Stack.Screen name="Edit" component={Edit} />
                <Stack.Screen name="SendOtp" component={SendOtp} />
                <Stack.Screen name="Otpverify" component={Otpverify} />
                <Stack.Screen name="ChangePassword" component={ChangePassword} />
                <Stack.Screen name="UserProfile" component={UserProfile} />
                <Stack.Screen name="BookServices" component={BookServices} />
                <Stack.Screen name="AvailableDelivery" component={AvailableDelivery} />
                <Stack.Screen name="Booking" component={Booking} />
                <Stack.Screen name="BookingDetails" component={BookingDetails} />
                <Stack.Screen name="BookingPickup" component={BookingPickup} />
                <Stack.Screen name="BookingDelivered" component={BookingDelivered} />
                <Stack.Screen name="BookingSignature" component={BookingSignature} />
                <Stack.Screen name="BookingMapPickup" component={BookingMapPickup} />
                <Stack.Screen name="BookingHistory" component={BookingHistory} />
                <Stack.Screen name="Help&Support" component={HelpSupportScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
