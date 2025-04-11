import { useFocusEffect, useNavigation } from 'expo-router';
import { Linking } from 'react-native';
import { useCallback } from 'react';

export default function Contact() {
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            Linking.openURL('mailto:aiXpertLab@gmail.com'); // change to your real email

            if (navigation.canGoBack()) {
                navigation.goBack();
            }
        }, [])
    );

    return null;
}
