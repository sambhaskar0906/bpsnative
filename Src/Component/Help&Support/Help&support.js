import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Linking } from 'react-native';
import { IconButton } from 'react-native-paper';
import { ThemeContext } from '../../Theme/ThemeContext ';
import { useNavigation } from '@react-navigation/native';

const HelpSupportScreen = () => {
    const { colors } = useContext(ThemeContext);
    const navigation = useNavigation();

    const openFAQ = () => {
        Linking.openURL('https://yourfaqpage.com');
    };

    const contactSupport = () => {
        Linking.openURL('mailto:support@yourapp.com');
    };

    const openCommunitySupport = () => {
        Linking.openURL('https://community.yourapp.com');
    };

    const openLiveChat = () => {
        Linking.openURL('https://yourapp.com/livechat');
    };

    const openTutorials = () => {
        Linking.openURL('https://yourapp.com/tutorials');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={{ paddingTop: 20, paddingLeft: 10 }}>
                <IconButton
                    icon="arrow-left"
                    size={30}
                    iconColor={colors.primary}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <Text style={styles.title}>Help & Support</Text>

            {/* FAQ Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
                <TouchableOpacity style={styles.linkButton} onPress={openFAQ}>
                    <Text style={styles.linkText}>Visit our FAQ page</Text>
                </TouchableOpacity>
            </View>

            {/* Contact Support Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Need further assistance?</Text>
                <TouchableOpacity style={styles.contactButton} onPress={contactSupport}>
                    <Text style={styles.contactText}>Contact Support</Text>
                </TouchableOpacity>
            </View>

            {/* Community Support Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Community Support</Text>
                <TouchableOpacity style={styles.linkButton} onPress={openCommunitySupport}>
                    <Text style={styles.linkText}>Join our community forum</Text>
                </TouchableOpacity>
            </View>

            {/* Live Chat Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Live Chat Support</Text>
                <TouchableOpacity style={styles.linkButton} onPress={openLiveChat}>
                    <Text style={styles.linkText}>Start a live chat</Text>
                </TouchableOpacity>
            </View>

            {/* Tutorials & Guides Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Tutorials & Guides</Text>
                <TouchableOpacity style={styles.linkButton} onPress={openTutorials}>
                    <Text style={styles.linkText}>View our tutorials and guides</Text>
                </TouchableOpacity>
            </View>

            {/* Other Resources */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Other Resources</Text>
                <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://yourhelpdocs.com')}>
                    <Text style={styles.linkText}>Help Documentation</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
    linkButton: {
        paddingVertical: 10,
    },
    linkText: {
        color: '#007BFF',
        fontSize: 16,
    },
    contactButton: {
        backgroundColor: '#28a745',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    contactText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default HelpSupportScreen;
