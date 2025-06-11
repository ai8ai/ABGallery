// root  _layout.tsx
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/config/Colors';


export default function Layout() {
    const hiddenScreens = ["detail", "profile", "(stacks)", "about", "Local Gallery"];

    return (
        <>
            <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#000' }}>
                <Drawer screenOptions={({ route }) => ({
                    drawerItemStyle: hiddenScreens.includes(route.name) ? { display: "none" } : {},
                    drawerLabelStyle: { color: '#F8EBD7', fontSize: 16, fontWeight: '600' },
                    headerTintColor: Colors.headerFont,
                })}>
                    <Drawer.Screen name="index" options={{
                        drawerLabel: 'Home', title: '💖 Beautiful Asian Girls 👑',
                        headerShown: true,
                        headerStyle: { backgroundColor: Colors.headerLight, },
                    }} />
                    <Drawer.Screen name="(stacks)" options={{
                        drawerLabel: 'Category', title: 'Category1',
                        headerShown: true, headerStyle: { backgroundColor: Colors.subCatLight },
                    }} />
                    <Drawer.Screen name="rate" options={{ drawerLabel: '⭐ Rate This App', title: 'Rate', headerStyle: { backgroundColor: '#712828' } }} />
                    <Drawer.Screen name="contact" options={{ drawerLabel: '📩 Contact Us', title: 'Contact', headerStyle: { backgroundColor: '#712828' } }} />
                    <Drawer.Screen name="privacy" options={{ drawerLabel: '🔒 Privacy Policy', title: 'Privacy Policy', headerStyle: { backgroundColor: '#712828' } }} />
                    <Drawer.Screen name="kofi" options={{ drawerLabel: '☕ Buy Me a Coffee', title: 'Buy Me a Coffee', headerStyle: { backgroundColor: '#712828' } }} />
                </Drawer>
            </GestureHandlerRootView>
            <StatusBar style="dark" backgroundColor={Colors.statusBarLight} translucent={false} />

        </>
    );
}
