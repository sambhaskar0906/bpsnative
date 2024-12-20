// ./Src/Theme/ThemeContext.js
import React, { createContext } from 'react';

export const ThemeContext = createContext({
    colors: {
        primary: '#0155A5',
        text: 'white',
        placeholder: 'white',
        background: '#fff',
        buttonBackground: '#0155A5',
        success: '#28a745',
        error: '#8f0000',
        secondry: '#748DC6',
    },
    fonts: {
        regular: 'Roboto-Regular',
        bold: 'Roboto-Bold',
    },
    textSizes: {
        small: 14,
        medium: 16,
        large: 20,
        header: 36,
    },
    spacing: {
        small: 10,
        medium: 20,
        large: 30,
    },
});

export const ThemeProvider = ({ children }) => {
    const theme = {
        colors: {
            primary: '#0155A5',
            text: 'white',
            placeholder: 'white',
            background: '#fff',
            buttonBackground: '#0155A5',
        },
        fonts: {
            regular: 'Roboto-Regular',
            bold: 'Roboto-Bold',
        },
        textSizes: {
            small: 14,
            medium: 16,
            large: 20,
            header: 36,
        },
        spacing: {
            small: 10,
            medium: 20,
            large: 30,
        },
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};
