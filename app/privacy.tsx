import { useEffect } from 'react';
import { Linking } from 'react-native';
import { useNavigation } from 'expo-router';

export default function Privacy() {
    const navigation = useNavigation();
    useEffect(() => {
        Linking.openURL('https://aidres.com/privacypolicy');
        navigation.goBack();
    }, []);

    return null;
}
