import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useApi } from '../../ContextApi/useApi ';
import { ThemeContext } from '../../Theme/ThemeContext ';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const { colors, spacing } = useContext(ThemeContext);
    const { data, loading: apiLoading, error, loginFetchData } = useApi();
    const navigation = useNavigation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!username || !password) {
            Alert.alert('Validation Error', 'Please enter both username and password.');
            return;
        }

        setLoading(true); // Start loading

        try {
            const response = await loginFetchData(username, password);

            if (response && response.success) {
                Alert.alert('Login Success', 'You have successfully logged in.');
                navigation.navigate('Tracker');
            } else {
                Alert.alert('Login Error', 'Invalid username or password. Please try again.');
                console.error(response.error || 'Login failed');
            }
        } catch (err) {
            Alert.alert('Unexpected Error', 'Something went wrong. Please try again later.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20, backgroundColor: colors.background }}>
            <Text style={{ fontSize: 42, fontWeight: 'bold', textAlign: 'center', marginTop: 80, color: colors.primary }}>
                Login
            </Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: colors.primary }}>
                Access Account
            </Text>

            <View style={{ flexDirection: 'row', marginTop: spacing.medium, marginBottom: spacing.large }}>
                <Button
                    mode="contained"
                    style={{ flex: 1, marginHorizontal: 20, borderRadius: 10, padding: 10, backgroundColor: colors.primary }}
                    contentStyle={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row-reverse' }}
                >
                    Facebook
                </Button>
                <Button
                    mode="contained"
                    style={{ flex: 1, marginHorizontal: 20, borderRadius: 10, padding: 10, backgroundColor: colors.primary }}
                    contentStyle={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row-reverse' }}
                >
                    Google
                </Button>
            </View>

            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 30, color: colors.primary }}>
                or login with email
            </Text>

            <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 20, marginTop: spacing.medium, color: colors.primary }}>
                Username:
            </Text>
            <TextInput
                value={username}
                onChangeText={text => setUsername(text)}
                style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 20, borderRadius: 10, backgroundColor: colors.surface, color: colors.text }}
                placeholder="Username"
                placeholderTextColor={colors.placeholder}
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 20, marginTop: spacing.medium, color: colors.primary }}>
                Password:
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 10, marginBottom: 20 }}>
                <TextInput
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={{ flex: 1, borderRadius: 10, backgroundColor: colors.surface, color: colors.text }}
                    placeholder="Password"
                    placeholderTextColor={colors.placeholder}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ marginLeft: 10 }}>
                    <Icon name={showPassword ? 'eye' : 'eye-off'} size={24} color={colors.primary} />
                </TouchableOpacity>
            </View>
            <Button
                mode="contained"
                style={{ marginHorizontal: 20, paddingVertical: 10, borderRadius: 10, backgroundColor: colors.primary }}
                labelStyle={{ fontSize: 20 }}
                onPress={handleLogin}
            >
                {loading ? <ActivityIndicator color="white" /> : 'Sign in'}
            </Button>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 14, textAlign: 'center' }}>
                    Don't Have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 5, color: colors.primary }}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Login;







































































































































































































































