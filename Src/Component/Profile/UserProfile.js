import React, { useState, useContext } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { ThemeContext } from '../../Theme/ThemeContext ';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import profile from '../../Assest/images/profile.png';

const UserProfile = () => {
    const { colors } = useContext(ThemeContext);
    const navigation = useNavigation(); // Use useNavigation hook

    const [fullName, setFullName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.background }}>
            <View style={{ paddingTop: 20, paddingLeft: 10 }}>
                <IconButton
                    icon="arrow-left"
                    size={30}
                    iconColor={colors.primary}
                    onPress={() => navigation.goBack()} // Add onPress handler
                />
            </View>
            <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: colors.primary }}>
                Profile
            </Text>
            <Image
                source={profile}
                style={{ width: 200, height: 200, alignSelf: 'center', marginTop: 20 }}
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, paddingLeft: 20, color: colors.primary }}>
                Full Name:
            </Text>
            <TextInput
                value={fullName}
                onChangeText={text => setFullName(text)}
                style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 10, backgroundColor: colors.primary, borderRadius: 10 }}
                theme={{ colors: { text: 'white', placeholder: 'white', primary: 'white' } }}
                placeholderTextColor="white"
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10, paddingLeft: 20, color: colors.primary }}>
                Mobile Number:
            </Text>
            <TextInput
                keyboardType='numeric'
                value={mobileNumber}
                onChangeText={text => setMobileNumber(text)}
                style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 10, backgroundColor: colors.primary, borderRadius: 10 }}
                theme={{ colors: { text: 'white', placeholder: 'white', primary: 'white' } }}
                placeholderTextColor="white"
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10, paddingLeft: 20, color: colors.primary }}>
                Email:
            </Text>
            <TextInput
                value={email}
                onChangeText={text => setEmail(text)}
                style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 20, backgroundColor: colors.primary, borderRadius: 10 }}
                theme={{ colors: { text: 'white', placeholder: 'white', primary: 'white' } }}
                placeholderTextColor="white"
            />
            <Button
                mode="contained"
                style={{ marginHorizontal: 20, paddingVertical: 10, paddingHorizontal: 20, backgroundColor: colors.primary, borderRadius: 10 }}
                labelStyle={{ fontSize: 20 }}
            >
                Edit
            </Button>
            <Text style={{ color: colors.primary, textAlign: 'center', marginTop: 20 }}>
                Change Mobile Number
            </Text>
            <Text style={{ color: colors.primary, textAlign: 'center', marginTop: 10, marginBottom: 20 }}>
                Change Password
            </Text>
        </ScrollView>
    );
};

export default UserProfile;
