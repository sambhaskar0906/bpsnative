import React, { useState, useContext } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { ThemeContext } from '../../Theme/ThemeContext ';
import Profile from '../../Assest/images/profile.png';

const Edit = () => {
    const { colors } = useContext(ThemeContext);

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
                />
            </View>
            <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: colors.primary }}>
                Edit Profile
            </Text>
            <Image
                source={Profile}
                style={{ width: 200, height: 200, alignSelf: 'center', marginTop: 20 }}
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, paddingLeft: 20, color: colors.primary }}>
                Full Name:
            </Text>
            <TextInput
                value={fullName}
                onChangeText={setFullName}
                style={{
                    marginHorizontal: 20,
                    marginTop: 10,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: colors.primary,
                    color: 'white',
                    backgroundColor: colors.primary,
                }}
                placeholderTextColor="white"
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10, paddingLeft: 20, color: colors.primary }}>
                Mobile Number:
            </Text>
            <TextInput
                keyboardType='numeric'
                value={mobileNumber}
                onChangeText={setMobileNumber}
                style={{
                    marginHorizontal: 20,
                    marginTop: 10,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: colors.primary,
                    color: 'white',
                    backgroundColor: colors.primary,
                }}
                placeholderTextColor="white"
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10, paddingLeft: 20, color: colors.primary }}>
                Email:
            </Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                style={{
                    marginHorizontal: 20,
                    marginTop: 10,
                    marginBottom: 20,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: colors.primary,
                    color: 'white',
                    backgroundColor: colors.primary,
                }}
                placeholderTextColor="white"
            />
            <Button
                mode="contained"
                style={{
                    marginHorizontal: 20,
                    paddingVertical: 10,
                    backgroundColor: colors.primary,
                    borderRadius: 10,
                }}
                labelStyle={{ fontSize: 20 }}
            >
                Save
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

export default Edit;
