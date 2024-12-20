import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tracker from '../Component/Tracker';
import Home from '../Component/Pages/Home';
import Edit from '../Component/Pages/Edit';
import SendOtp from '../Component/Otp/SendOtp';
import Otpverify from '../Component/Otp/Otpveify';
import ChangePassword from '../Component/Otp/ChangePassword';
import UserProfile from '../Component/UserProfile';
import BookServices from '../Component/BookServices';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Tracker">
            <Drawer.Screen name="Tracker" component={Tracker} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Edit" component={Edit} />
            <Drawer.Screen name="SendOtp" component={SendOtp} />
            <Drawer.Screen name="Otpverify" component={Otpverify} />
            <Drawer.Screen name="ChangePassword" component={ChangePassword} />
            <Drawer.Screen name="UserProfile" component={UserProfile} />
            <Drawer.Screen name="BookServices" component={BookServices} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
