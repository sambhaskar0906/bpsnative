import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from '../Theme/ThemeContext '; // Adjust path as needed
import { ApiProvider } from '../ContextApi/useApi '; // Adjust path as needed

const AppProviders = ({ children }) => {
    return (
        <SafeAreaProvider>
            <PaperProvider>
                <ThemeProvider>
                    <ApiProvider>
                        {children}
                    </ApiProvider>
                </ThemeProvider>
            </PaperProvider>
        </SafeAreaProvider>
    );
};

export default AppProviders;
