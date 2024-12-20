import React, { useContext } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { ThemeContext } from '../../Theme/ThemeContext ';
import { useNavigation } from '@react-navigation/native';
import { useApi } from '../../ContextApi/useApi ';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Validation schema with Yup
const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    middleName: Yup.string().required('Middle Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    mobile: Yup.string().required('Mobile is required').matches(/^\d+$/, 'Mobile number must be digits'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

// Correctly using formikProps and colors
const renderTextInput = (label, name, formikProps, colors, secureTextEntry = false, keyboardType = 'default', showIcon = false, onIconPress = () => { }) => (
    <View style={{ marginBottom: 15 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', paddingLeft: 10 }}>{label}</Text>
        <TextInput
            value={formikProps.values[name]}
            onChangeText={formikProps.handleChange(name)}
            onBlur={formikProps.handleBlur(name)}
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
        {formikProps.touched[name] && formikProps.errors[name] ? (
            <Text style={{ color: 'red', marginLeft: 10 }}>{formikProps.errors[name]}</Text>
        ) : null}
    </View>
);

const Registration = () => {
    const { colors } = useContext(ThemeContext);
    const navigation = useNavigation();
    const { createUser } = useApi();

    return (
        <ScrollView contentContainerStyle={{ padding: 20, flexGrow: 1, backgroundColor: colors.background }}>
            <IconButton
                icon="arrow-left"
                size={30}
                iconColor={colors.primary}
                onPress={() => navigation.goBack()}
                style={{ paddingTop: 10, paddingLeft: 10, alignSelf: 'flex-start' }}
            />
            <Text style={{ fontSize: 36, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, color: colors.primary }}>Register</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: colors.primary }}>Create an Account</Text>

            <Formik
                initialValues={{ firstName: '', middleName: '', lastName: '', mobile: '', email: '', password: '', showPassword: false }}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    const { firstName, middleName, lastName, mobile, email, password } = values;
                    try {
                        const response = await createUser(firstName, middleName, lastName, mobile, email, password);
                        if (response) {
                            Alert.alert('Success', 'User registered successfully');
                            navigation.navigate('Login');
                        } else {
                            Alert.alert('Error', 'Registration failed. Please try again.');
                        }
                    } catch (error) {
                        Alert.alert('Error', 'An error occurred during registration.');
                    }
                }}
            >
                {formikProps => (
                    <>
                        {renderTextInput("First Name:", "firstName", formikProps, colors)}
                        {renderTextInput("Middle Name:", "middleName", formikProps, colors)}
                        {renderTextInput("Last Name:", "lastName", formikProps, colors)}
                        {renderTextInput("Mobile:", "mobile", formikProps, colors, false, 'numeric')}
                        {renderTextInput("Email:", "email", formikProps, colors)}
                        {renderTextInput("Create Password:", "password", formikProps, colors, formikProps.values.showPassword, 'default', true, () => formikProps.setFieldValue('showPassword', !formikProps.values.showPassword))}

                        <Button
                            mode="contained"
                            style={{ paddingVertical: 10, borderRadius: 8, marginVertical: 5, marginHorizontal: 10, backgroundColor: colors.primary }}
                            labelStyle={{ fontSize: 18 }}
                            onPress={formikProps.handleSubmit}
                        >
                            <Text style={{ color: 'white' }}>Submit</Text>
                        </Button>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                            <Text style={{ fontSize: 14, textAlign: 'center' }}>Already have an Account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 5, color: colors.primary }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </ScrollView>
    );
};

export default Registration;
