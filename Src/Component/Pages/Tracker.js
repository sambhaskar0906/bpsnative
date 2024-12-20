import React, { useState } from 'react';
import { View, ImageBackground, Text, Image, ScrollView, Modal, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useApi } from '../../ContextApi/useApi '; // Adjust the import path as necessary
import MyComponent from '../AppBar/menuIconBar';

const imagePaths = {
    tracker: require('../../Assest/images/Tracker.png'),
    profile: require('../../Assest/images/profile.png'),
    man: require('../../Assest/images/man.png'),
};

const Tracker = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [trackingNumber, setTrackingNumber] = useState('');
    const navigation = useNavigation();
    const { logoutFetchData } = useApi(); // Access logout function from context

    const handleImagePress = () => setModalVisible(true);

    const handleLogout = async () => {
        try {
            await logoutFetchData(); // Call logout API
            setModalVisible(false);
            Alert.alert("Success", "Logged out successfully", [{ text: "OK", onPress: () => navigation.navigate('Home') }]);
        } catch {
            Alert.alert("Error", "An error occurred during logout");
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <ImageBackground
                        source={imagePaths.tracker}
                        style={styles.imageBackground}
                    >
                        <View style={styles.headerContainer}>
                            <MyComponent />
                            <Text style={styles.headerText}>Bharat</Text>
                            <TouchableOpacity onPress={handleImagePress}>
                                <Image source={imagePaths.profile} style={styles.profileImage} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.trackerContent}>
                            <Text style={styles.welcomeText}>Hello Sam</Text>
                            <Text style={styles.trackText}>Track your shipment</Text>
                            <Text style={styles.trackingPrompt}>Please enter your tracking number</Text>
                            <TextInput
                                style={styles.input}
                                theme={{ colors: { text: '#0155A5', placeholder: '#0155A5' } }}
                                placeholder='#KA7D17FAM'
                                value={trackingNumber}
                                onChangeText={setTrackingNumber}
                                mode="outlined"
                            />
                            <Button mode="contained" style={styles.trackButton} labelStyle={styles.buttonLabel}>
                                Start Tracking
                            </Button>
                        </View>
                    </ImageBackground>

                    <View style={styles.bottomSection}>
                        <Image source={imagePaths.man} style={styles.bottomImage} />
                        <Button mode="contained" style={styles.bookButton} labelStyle={styles.buttonLabel}>
                            Book Now
                        </Button>
                    </View>

                    {/* Modal for Logout */}
                    <Modal transparent visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalText}>Are you sure you want to log out?</Text>
                                <Button mode="contained" style={styles.modalButton} onPress={handleLogout}>
                                    Logout
                                </Button>
                                <Button mode="outlined" style={styles.modalButton} onPress={() => setModalVisible(false)}>
                                    Cancel
                                </Button>
                            </View>
                        </View>
                    </Modal>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = {
    imageBackground: {
        width: '100%',
        height: '70%',
        justifyContent: 'center',
        resizeMode: 'cover',
    },
    headerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        position: 'absolute',
        left: '50%',
        marginLeft: -24,
    },
    profileImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
        resizeMode: 'cover',
    },
    trackerContent: {
        alignItems: 'center',
        marginTop: -100,
    },
    welcomeText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    trackText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 30,
    },
    trackingPrompt: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    input: {
        width: '70%',
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        textAlign: 'center',
    },
    trackButton: {
        width: '70%',
        paddingVertical: 10,
        backgroundColor: '#0155A5',
    },
    buttonLabel: {
        fontSize: 20,
    },
    bottomSection: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: -1,
    },
    bottomImage: {
        width: '80%',
        resizeMode: 'contain',
    },
    bookButton: {
        position: 'absolute',
        top: '50%',
        width: '90%',
        backgroundColor: '#0155A5',
        borderRadius: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    modalButton: {
        marginBottom: 10,
        width: '100%',
    },
};

export default Tracker;
