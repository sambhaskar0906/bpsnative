import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { ThemeContext } from '../../Theme/ThemeContext ';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SendOtp = () => {
    const { colors, spacing } = useContext(ThemeContext);
    const navigation = useNavigation();
    const [mobileNumber, setMobileNumber] = useState("");

    return (
        <ScrollView contentContainerStyle={{
            padding: 20,
            flexGrow: 1,
            backgroundColor: colors.background
        }}>
            <View style={{
                paddingTop: 10,
                alignSelf: 'flex-start',
                marginBottom: 40
            }}>
                <IconButton
                    icon="arrow-left"
                    size={30}
                    iconColor={colors.primary}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <Text style={{
                fontSize: 36,
                fontWeight: 'bold',
                marginBottom: 30,
                color: colors.primary
            }}>OTP verification</Text>
            <Text style={{
                fontSize: 14,
                fontWeight: 'bold',
                marginBottom: 20,
                color: colors.primary
            }}>You will be notified with an OTP !!</Text>

            <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                paddingLeft: 10,
                marginTop: spacing.medium,
                color: colors.primary
            }}>Enter Mobile Number:</Text>
            <TextInput
                keyboardType='numeric'
                value={mobileNumber}
                onChangeText={text => setMobileNumber(text)}
                style={{
                    marginTop: 10,
                    marginBottom: 20,
                    borderRadius: 10,
                    backgroundColor: colors.primary,
                    color: colors.text
                }}
                placeholder="+91-"
                placeholderTextColor={colors.placeholder}
            />

            <View style={{
                marginTop: 'auto',
                marginBottom: 40
            }}>
                <Button
                    mode="contained"
                    style={{
                        paddingVertical: 10,
                        borderRadius: 10,
                        backgroundColor: colors.primary
                    }}
                    labelStyle={{
                        fontSize: 20
                    }}
                >
                    Next
                </Button>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20
                }}>
                    <Text style={{
                        fontSize: 14,
                        textAlign: 'center'
                    }}>
                        Already have an Account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            marginLeft: 5,
                            color: colors.primary
                        }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default SendOtp;
