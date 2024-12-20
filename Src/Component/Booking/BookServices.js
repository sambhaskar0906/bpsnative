import React, { useState, useContext } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { ThemeContext } from '../../Theme/ThemeContext ';
import { useNavigation } from '@react-navigation/native';

const BookServices = () => {
    const { colors } = useContext(ThemeContext);
    const navigation = useNavigation();

    const [sName, setsName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [locality, setLocality] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("");
    const [pin, setPin] = useState("");
    const [rName, setrName] = useState("");
    const [rmobileNumber, setrMobileNumber] = useState("");
    const [remail, setrEmail] = useState("");
    const [rlocality, setrLocality] = useState("");
    const [rcity, setrCity] = useState("");
    const [rdistrict, setrDistrict] = useState("");
    const [rstate, setrState] = useState("");
    const [rpin, setrPin] = useState("");

    const renderTextInput = (label, value, onChangeText, secureTextEntry = false, keyboardType = 'default', showIcon = false, onIconPress = () => { }) => (
        <View style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', paddingLeft: 10, color: colors.primary }}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={{
                    marginVertical: 5,
                    marginHorizontal: 10,
                    borderRadius: 8,
                    backgroundColor: '#0155A5',
                }}
                theme={{ colors: { ...colors, surface: colors.background } }}
                placeholderTextColor="white"
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                right={showIcon ? <TextInput.Icon icon={secureTextEntry ? "eye-off" : "eye"} onPress={onIconPress} color="white" /> : null}
            />
        </View>
    );

    return (
        <ScrollView contentContainerStyle={{ padding: 20, flexGrow: 1, backgroundColor: colors.background }}>
            <View style={{ paddingTop: 10, paddingLeft: 10, alignSelf: 'flex-start' }}>
                <IconButton
                    icon="arrow-left"
                    size={30}
                    iconColor={colors.primary}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <Text style={{ fontSize: 36, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, color: colors.primary }}>
                Book Services
            </Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: colors.primary }}>
                Enter your details here
            </Text>

            {renderTextInput("Sender’s name:", sName, setsName)}
            {renderTextInput("Mobile Number:", mobileNumber, setMobileNumber, false, 'numeric')}
            {renderTextInput("Email:", email, setEmail)}

            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 20, paddingLeft: 10, color: colors.primary }}>
                Pickup Location
            </Text>

            <View style={{ width: '100%' }}>
                {renderTextInput("Locality/Street/Colony:", locality, setLocality)}
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                <View style={{ flex: 1, marginHorizontal: 5 }}>
                    {renderTextInput("City/Town:", city, setCity)}
                </View>
                <View style={{ flex: 1, marginHorizontal: 5 }}>
                    {renderTextInput("District:", district, setDistrict)}
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                <View style={{ flex: 1, marginHorizontal: 5 }}>
                    {renderTextInput("State:", state, setState)}
                </View>
                <View style={{ flex: 1, marginHorizontal: 5 }}>
                    {renderTextInput("Pincode:", pin, setPin)}
                </View>
            </View>

            {renderTextInput("Receiver's name:", rName, setrName)}
            {renderTextInput("Mobile Number:", rmobileNumber, setrMobileNumber, false, 'numeric')}
            {renderTextInput("Email:", remail, setrEmail)}

            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 20, paddingLeft: 10, color: colors.primary }}>
                Drop Location
            </Text>

            <View style={{ width: '100%' }}>
                {renderTextInput("Locality/Street/Colony:", rlocality, setrLocality)}
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                <View style={{ flex: 1, marginHorizontal: 5 }}>
                    {renderTextInput("City/Town:", rcity, setrCity)}
                </View>
                <View style={{ flex: 1, marginHorizontal: 5 }}>
                    {renderTextInput("District:", rdistrict, setrDistrict)}
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                <View style={{ flex: 1, marginHorizontal: 5 }}>
                    {renderTextInput("State:", rstate, setrState)}
                </View>
                <View style={{ flex: 1, marginHorizontal: 5 }}>
                    {renderTextInput("Pincode:", rpin, setrPin)}
                </View>
            </View>

            <Button
                mode="contained"
                style={{
                    paddingVertical: 10,
                    borderRadius: 8,
                    marginVertical: 5,
                    marginHorizontal: 10,
                    backgroundColor: colors.primary,
                }}
                labelStyle={{ fontSize: 18 }}
            >
                Submit
            </Button>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 14, textAlign: 'center' }}>
                    Already Have an Account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 5, color: colors.primary }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default BookServices;
