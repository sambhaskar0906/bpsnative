import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState, useRef } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../Theme/ThemeContext ';
import { Button, IconButton, TextInput } from 'react-native-paper';

const Otpverify = () => {
    const { colors, spacing } = useContext(ThemeContext);
    const navigation = useNavigation();

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const refs = useRef([]);

    const handleChange = (text, index) => {
        let newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 5) {
            refs.current[index + 1].focus();
        }
    };

    const handleResend = () => {
        console.log('Resend OTP');
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20, backgroundColor: colors.background }}>
            <View style={{ paddingTop: 10, alignSelf: 'flex-start', marginBottom: 40 }}>
                <IconButton
                    icon="arrow-left"
                    size={30}
                    iconColor={colors.primary}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <Text style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 30, color: colors.primary }}>OTP verification</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 20, color: colors.primary }}>You have received a 6-digit OTP on XXXXXXX149</Text>

            <Text style={{ fontSize: 16, fontWeight: 'bold', paddingLeft: 10, marginTop: spacing.medium, color: colors.primary }}>Enter OTP here</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 20 }}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => refs.current[index] = ref}
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                        style={{ width: 40, height: 40, borderWidth: 1, borderRadius: 5, color: colors.text, textAlign: 'center' }}
                        keyboardType="numeric"
                        maxLength={1}
                        placeholder="-"
                        placeholderTextColor={colors.placeholder}
                    />
                ))}
            </View>
            <TouchableOpacity onPress={handleResend}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.primary }}>
                    Didn't receive the OTP? <Text style={{ fontWeight: 'bold' }}>Resend</Text>
                </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.primary, marginTop: spacing.small }}>Change mobile number</Text>

            <View style={{ marginTop: 'auto', marginBottom: 40 }}>
                <Button
                    mode="contained"
                    style={{ paddingVertical: 10, borderRadius: 10, backgroundColor: colors.primary }}
                    labelStyle={{ fontSize: 20 }}
                >
                    Next
                </Button>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 14, textAlign: 'center' }}>
                        Already have an Account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 5, color: colors.primary }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Otpverify;
