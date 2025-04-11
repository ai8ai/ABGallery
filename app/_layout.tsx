// root  _layout.tsx
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
    const hiddenScreens = ["detail", "profile", "(stacks)", "about", "Local Gallery"];

    return (
        <>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer screenOptions={({ route }) => ({
                    drawerItemStyle: hiddenScreens.includes(route.name) ? { display: "none" } : {},
                })}>
                    <Drawer.Screen name="index" options={{ drawerLabel: 'Home', title: '💖 Beautiful Asian Girls 👑', headerShown: true }} />
                    <Drawer.Screen name="(stacks)" options={{ drawerLabel: 'Category', title: 'Category1', headerShown: true }} />
                    <Drawer.Screen name="rate" options={{ drawerLabel: '⭐ Rate This App', title: 'Rate' }} />
                    <Drawer.Screen name="contact" options={{ drawerLabel: '📩 Contact Us', title: 'Contact' }} />
                    <Drawer.Screen name="privacy" options={{ drawerLabel: '🔒 Privacy Policy', title: 'Privacy Policy' }} />
                </Drawer>
            </GestureHandlerRootView>
            <StatusBar style="light" translucent />
        </>
    );
}
