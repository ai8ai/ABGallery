import { useEffect } from 'react';
import { Linking } from 'react-native';
import { useNavigation } from 'expo-router';

export default function Privacy() {
    const navigation = useNavigation();
    useEffect(() => {
        Linking.openURL('https://ko-fi.com/aidres');
        navigation.goBack();
    }, []);

    return null;
}
