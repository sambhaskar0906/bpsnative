import React, { useState, useContext } from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput as RNTextInput } from 'react-native';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { ThemeContext } from '../../Theme/ThemeContext ';
import { useNavigation } from '@react-navigation/native';

const ChangePassword = () => {
    const { colors } = useContext(ThemeContext);
    const navigation = useNavigation();

    const [pPassword, setpPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showpPassword, setShowpPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const renderTextInput = (label, value, onChangeText, secureTextEntry = false, keyboardType = 'default', showIcon = false, onIconPress = () => { }) => (
        <View style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', paddingLeft: 10 }}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={{ marginVertical: 5, marginHorizontal: 10, borderRadius: 8, backgroundColor: '#0155A5' }}
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
            <Text style={{ fontSize: 36, fontWeight: 'bold', textAlign: 'center', marginBottom: 30, color: colors.primary }}>
                Change Password
            </Text>

            {renderTextInput("Previous Password:", pPassword, setpPassword, !showpPassword, 'default', true, () => setShowpPassword(!showpPassword))}
            {renderTextInput("New Password", password, setPassword, !showPassword, 'default', true, () => setShowPassword(!showPassword))}
            {renderTextInput("Confirm Password:", confirmPassword, setConfirmPassword, !showConfirmPassword, 'default', true, () => setShowConfirmPassword(!showConfirmPassword))}

            <Button
                mode="contained"
                style={{ paddingVertical: 10, borderRadius: 8, marginVertical: 5, marginHorizontal: 10, backgroundColor: colors.primary }}
                labelStyle={{ fontSize: 18 }}
            >
                Submit
            </Button>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 14, textAlign: 'center' }}>
                    Forget Password:
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 5, color: colors.primary }}>
                        Send OTP
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ChangePassword;
