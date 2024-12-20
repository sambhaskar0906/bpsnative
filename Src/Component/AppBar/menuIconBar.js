import * as React from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import { IconButton, List, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../Theme/ThemeContext ';

const { width, height } = Dimensions.get('window');

const MenuIconBar = () => {
    const { colors } = React.useContext(ThemeContext);
    const [expanded, setExpanded] = React.useState(false);
    const navigation = useNavigation();

    const handleCloseMenu = () => {
        setExpanded(false);
    };

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                <IconButton icon="menu" size={24} iconColor="white" />
            </TouchableOpacity>

            {expanded && (
                <>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: width,
                            height: height,
                            zIndex: 1,
                        }}
                        onPress={handleCloseMenu}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            top: -16,
                            left: -16,
                            width: 240,
                            height: height,
                            zIndex: 2,
                            backgroundColor: colors.primary,
                        }}
                    >
                        <Text
                            style={{
                                color: colors.background,
                                fontSize: 28,
                                fontWeight: 'bold',
                                marginHorizontal: 20,
                                marginVertical: 20,
                            }}
                        >
                            BHARAT
                        </Text>
                        {[
                            { title: 'Tracking', route: 'Tracking' },
                            { title: 'History', route: 'History' },
                            { title: 'Profile', route: 'UserProfile' },
                            { title: 'Help & Support', route: 'Help&Support' },
                        ].map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    handleCloseMenu();
                                    navigation.navigate(item.route);
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingVertical: 16,
                                    }}
                                >
                                    <IconButton icon="folder" size={24} iconColor="white" />
                                    <List.Item title={item.title} titleStyle={{ color: 'white' }} />
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </>
            )}
        </View>
    );
};

export default MenuIconBar;
