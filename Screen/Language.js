import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Box, Heading, Text } from 'native-base';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';


const Language = () => {
    const { t, i18n } = useTranslation();
    const { language, changeLanguage } = useLanguage();

    const languages = [
        { code: 'en', label: t('language_english') },
        { code: 'hi', label: t('language_hindi') },
    ];

    return (
        <ScrollView width={'100%'} height={'100%'}>
            <Box
                safeArea
                w="98%"
                py="8"
                alignSelf="center"
                bg="#FFFFFF"
                borderRadius="lg"
                shadow={2}>
                <Heading
                    size="lg"
                    color="#F56A02"
                    fontWeight="bold"
                    textAlign="center"
                    mb="6">
                    {t('select_language')}
                </Heading>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.languageButtons}>
                    {languages.map((lang) => (
                        <TouchableOpacity
                            key={lang.code}
                            style={[
                                styles.button,
                                i18n.language === lang.code && styles.activeButton,
                            ]}
                            onPress={() => changeLanguage(lang.code)}>
                            <Text style={styles.buttonText}>{lang.label}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </Box>
        </ScrollView>
    );
};

export default Language;

const styles = StyleSheet.create({
    languageButtons: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 10,
    },
    button: {
        width: '90%',
        padding: 15,
        backgroundColor: '#EFEFEF',
        borderRadius: 8,
        marginVertical: 10,
    },
    activeButton: {
        backgroundColor: '#F56A02',
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
