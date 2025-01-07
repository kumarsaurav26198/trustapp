import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../services/i18n';  // Assuming you have the i18n setup for your app
import Restart from 'react-native-restart';  // Import the Restart module

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('hi');

    useEffect(() => {
        const loadLanguage = async () => {
            try {
                const storedLanguage = await AsyncStorage.getItem('appLanguage');
                if (storedLanguage) {
                    setLanguage(storedLanguage);
                    i18n.changeLanguage(storedLanguage); // Set i18n language
                }
            } catch (error) {
                console.error('Failed to load language from AsyncStorage:', error);
            }
        };

        loadLanguage();
    }, []);

    const changeLanguage = async (lang) => {
        try {
            await AsyncStorage.setItem('appLanguage', lang); // Store the selected language
            setLanguage(lang);
            i18n.changeLanguage(lang); // Update i18n language
            Restart.Restart(); // Restart the app to apply language change globally
        } catch (error) {
            console.error('Failed to save language to AsyncStorage:', error);
        }
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
