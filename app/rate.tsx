import { useEffect } from 'react';
import { Linking } from 'react-native';
import { useNavigation } from 'expo-router';

export default function Rate() {
  const navigation = useNavigation();
  useEffect(() => {
    Linking.openURL('https://play.google.com/store/apps/details?id=com.aixpertlab.asianbeautyycc');
    navigation.goBack(); // auto-close drawer
  }, []);

  return null;
}
