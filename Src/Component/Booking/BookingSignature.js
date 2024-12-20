import React, { useContext, useState, useRef } from 'react';
import { View, ImageBackground, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../Theme/ThemeContext ';
import SignatureCanvas from 'react-native-signature-canvas';

const imagePaths = {
    tracker: require('../../Assest/images/Tracker.png'),
    profile: require('../../Assest/images/profile.png'),
    google: require('../../Assest/images/google.png'),
    map: require('../../Assest/images/map.png')
};

const BookingSignature = () => {
    const { colors, spacing } = useContext(ThemeContext);
    const navigation = useNavigation();

    const [contactPerson, setContactPerson] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const signatureRef = useRef();

    const handleSignature = (signature) => {
        console.log('Signature:', signature);
        // You can save the signature or handle it as needed
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground source={imagePaths.tracker} style={styles.backgroundImage}>
                <View style={styles.appBar}>
                    <IconButton
                        icon="arrow-left"
                        size={30}
                        iconColor={colors.background}
                        onPress={() => navigation.goBack()}
                        style={styles.iconButton}
                    />
                    <Text style={styles.text}>Bharat</Text>
                    <Image source={imagePaths.profile} style={styles.avatar} />
                </View>
            </ImageBackground>

            <View style={styles.bookingWrapper}>
                <View style={[styles.bookingInfo, { paddingVertical: 20 }]}>
                    <Text style={styles.bookingId}>Booking ID: #1234</Text>
                </View>

                <View style={styles.imageWrapper}>
                    <Image source={imagePaths.map} style={styles.mapImage} />
                </View>

                <Text style={[styles.label, { marginTop: spacing.medium, color: colors.primary }]}>Contact Person</Text>
                <TextInput
                    keyboardType='default'
                    value={contactPerson}
                    onChangeText={text => setContactPerson(text)}
                    style={[styles.input, { backgroundColor: colors.primary, color: colors.text }]}
                    placeholder="Contact Person"
                    placeholderTextColor={colors.placeholder}
                />

                <Text style={[styles.label, { marginTop: spacing.medium, color: colors.primary }]}>Contact Number</Text>
                <TextInput
                    keyboardType='numeric'
                    value={mobileNumber}
                    onChangeText={text => setMobileNumber(text)}
                    style={[styles.input, { backgroundColor: colors.primary, color: colors.text }]}
                    placeholder="Mobile Number"
                    placeholderTextColor={colors.placeholder}
                />

                <View style={styles.signatureWrapper}>
                    <Text style={[styles.label, { marginTop: spacing.medium, color: colors.primary }]}>Digital Signature</Text>
                    <View style={styles.signatureCanvasWrapper}>
                        <SignatureCanvas
                            ref={signatureRef}
                            onOK={handleSignature}
                            style={styles.signatureCanvas}
                        />
                    </View>
                </View>

                <Button
                    mode="contained"
                    style={{ marginVertical: 20 }}
                >
                    Done
                </Button>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flexGrow: 1 },
    backgroundImage: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
    },
    appBar: { position: 'absolute', top: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
    iconButton: { paddingTop: 10, paddingLeft: 10 },
    avatar: { width: 32, height: 32, borderRadius: 16 },
    text: { color: 'white', fontSize: 24, fontWeight: 'bold' },
    bookingWrapper: { marginBottom: 10, paddingHorizontal: 20 },
    bookingInfo: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, backgroundColor: 'white' },
    bookingId: { fontSize: 18, fontWeight: 'bold' },
    imageWrapper: { alignItems: 'center', marginVertical: 20 },
    mapImage: { width: 300, height: 200, resizeMode: 'contain' }, // Set width and height for the image
    button: { flex: 1, marginVertical: 10, paddingVertical: 8 },
    label: { fontSize: 18, fontWeight: 'bold', paddingLeft: 20 },
    input: { marginHorizontal: 20, marginTop: 10, marginBottom: 20, borderRadius: 10 },
    signatureWrapper: { marginHorizontal: 20, marginTop: 20, borderColor: '#ddd', borderWidth: 1, borderRadius: 10 },
    signatureCanvasWrapper: { backgroundColor: '#f0f0f0', borderRadius: 10 }, // Set the desired background color here
    signatureCanvas: { width: '100%', height: 150 }, // Adjust the size of the canvas
});

export default BookingSignature;
