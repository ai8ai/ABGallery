// (stacks)/_layout.tsx ✅ ✅ Save Image ▶️ Start Slideshow ⏳ Set Interval Time (use a simple slider or dropdown)⏹️ Switch to Manual Mode
import React, {useEffect} from "react";
import { Stack, useNavigation, useLocalSearchParams } from "expo-router";

const StacksLayout = () => {
    const { title,  } = useLocalSearchParams();  // Get the itemid from route params
    const navigation = useNavigation();

    useEffect(() => {
        // Update the header title dynamically
        if (title) {
            navigation.setOptions({
                headerTitle: title,  // Dynamically set the headerTitle to itemid
            });
        }
    }, [title]);

    return (
        <Stack>
            <Stack.Screen name="cat2img" options={{ headerTitle: 'HomeD', title: 'DDD', headerShown: false }} />
            <Stack.Screen name="CatScreen" options={{ headerTitle: 'Home22D', title: 'DAsian2 Beauty', headerShown: false }} />
            <Stack.Screen name="SubCatScreen" options={{ headerTitle: 'Home22D', title: 'DAsian2 Beauty', headerShown: false }} />
        </Stack>
    );
};

export default StacksLayout;


