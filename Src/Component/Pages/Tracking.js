import React, { useContext } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { ThemeContext } from '../../Theme/ThemeContext ';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const imagePaths = {
    profile: require('../../Assest/images/profile.png'),
    historyImg: require('../../Assest/images/figma.png'),
};

const previousItems = [
    { id: 1, title: 'Weelent print', status: 'Delivered', time: '11:45 pm', statusColor: 'green' },
    { id: 2, title: 'Furniture living', status: 'Canceled', time: '11:45 pm', statusColor: 'red' },
    { id: 3, title: 'Takoyaki food', status: 'Delivered', time: '11:45 pm', statusColor: 'green' },
];

const Tracking = () => {
    const { colors } = useContext(ThemeContext);
    const navigation = useNavigation();

    const renderItem = (item, index) => (
        <View key={item.id} style={{ flexDirection: 'row', alignItems: 'flex-start', paddingLeft: 30, paddingTop: 40 }}>
            <TouchableOpacity style={{ paddingRight: 20 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={imagePaths.historyImg}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 16,
                            resizeMode: 'cover',
                        }}
                    />
                    {/* Render the line only if it's not the last item */}
                    {index < previousItems.length - 1 && (
                        <View
                            style={{
                                width: 2,
                                height: 100,
                                backgroundColor: colors.buttonBackground,
                                position: 'absolute',
                                top: 60,
                                left: 29,
                            }}
                        />
                    )}
                </View>
            </TouchableOpacity>

            <View style={{ flex: 1 }}>
                <Text
                    style={{
                        fontSize: 14,
                        color: colors.buttonBackground,
                        paddingLeft: 10,
                        paddingBottom: 10,
                    }}
                >
                    {item.title}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 14,
                            color: item.statusColor || colors.buttonBackground,
                        }}
                    >
                        {item.status}
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: colors.buttonBackground,
                            paddingRight: 20,
                        }}
                    >
                        {item.time}
                    </Text>
                </View>
            </View>
        </View>
    );

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.background }}>
            <View style={{
                paddingTop: 20,
                paddingHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: colors.background,
            }}>
                <IconButton
                    icon="arrow-left"
                    size={30}
                    iconColor={colors.primary}
                    onPress={() => navigation.goBack()}
                />
                <TouchableOpacity style={{ paddingRight: 20 }}>
                    <Image
                        source={imagePaths.profile}
                        style={{
                            width: 32,
                            height: 32,
                            borderRadius: 16,
                            resizeMode: 'cover',
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        paddingLeft: 30,
                        paddingTop: 20,
                        color: colors.buttonBackground,
                    }}
                >
                    Tracking
                </Text>

                <LinearGradient
                    colors={['#748DC6', '#3770B5']}
                    start={{ x: 0.5, y: 1 }}
                    end={{ x: 0.5, y: 0 }}
                    style={{ paddingHorizontal: 20, marginHorizontal: 30, paddingVertical: 30, marginVertical: 20, borderRadius: 10 }}>

                    <Text style={{ color: colors.background, fontSize: 16, paddingBottom: 10 }}>
                        Majalengka, Indonesia
                    </Text>

                    <Text style={{ color: colors.background, fontSize: 16, paddingBottom: 20 }}>
                        No, resi 2356589642
                    </Text>

                    <View style={{ backgroundColor: colors.primary, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, marginBottom: 20 }}>
                        <Text style={{ color: colors.background, fontSize: 18, marginHorizontal: 30, }}>
                            -3.50 USD
                        </Text>
                        <Text style={{ color: colors.background, fontSize: 12 }}>
                            Our free (included)
                        </Text>
                    </View>

                    <Text style={{ color: colors.background, fontSize: 18, paddingBottom: 10 }}>
                        Berlin, Germany
                    </Text>
                    <Text style={{ color: colors.background, fontSize: 12, paddingBottom: 10 }}>
                        Parcel, 25kg
                    </Text>

                </LinearGradient>

                {previousItems.map((item, index) => renderItem(item, index))}
            </View>
        </ScrollView>
    );
};

export default Tracking;
