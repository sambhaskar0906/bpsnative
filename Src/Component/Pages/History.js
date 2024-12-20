import React, { useContext } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { ThemeContext } from '../../Theme/ThemeContext ';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const imagePaths = {
    profile: require('../../Assest/images/profile.png'),
    historyImg: require('../../Assest/images/figma.png'),
};

const activeItems = [
    { id: 1, title: 'Ecommerce shipment', status: 'In process', time: '11:45 pm' },
];

const previousItems = [
    { id: 1, title: 'Weelent print', status: 'Delivered', time: '11:45 pm', statusColor: 'green' },
    { id: 2, title: 'Furniture living', status: 'Canceled', time: '11:45 pm', statusColor: 'red' },
    { id: 3, title: 'Takoyaki food', status: 'Delivered', time: '11:45 pm', statusColor: 'green' },
];

const History = () => {
    const { colors } = useContext(ThemeContext);
    const navigation = useNavigation();

    const renderItem = (item) => (
        <View
            key={item.id}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 30,
                paddingTop: 40,
            }}
        >
            <TouchableOpacity style={{ paddingRight: 20 }}>
                <Image
                    source={imagePaths.historyImg}
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 16,
                        resizeMode: 'cover',
                    }}
                />
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
                    History
                </Text>

                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        paddingLeft: 30,
                        paddingTop: 50,
                        color: colors.buttonBackground,
                    }}
                >
                    Active
                </Text>

                {activeItems.map(renderItem)}

                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        paddingLeft: 30,
                        paddingTop: 50,
                        color: colors.buttonBackground,
                    }}
                >
                    Previous
                </Text>

                {previousItems.map(renderItem)}
            </View>
        </ScrollView>
    );
};

export default History;
