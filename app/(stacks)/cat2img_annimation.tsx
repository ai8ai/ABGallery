import { View, Text, Image, Animated, Alert, TouchableOpacity } from 'react-native';
import { ToastAndroid, Platform } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

import { useLocalSearchParams, useNavigation } from 'expo-router';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '@/config/styles';
import { genImgList } from '@/utils/genImageList'

export default function SlideshowScreen() {
    const navigation = useNavigation();
    const parentNavi = navigation.getParent();
    const { imgPath, count } = useLocalSearchParams();

    const [currentImage, setCurrentImage] = useState(0);
    const [isAutoSlideshow, setIsAutoSlideshow] = useState(false);
    const [intervalTime, setIntervalTime] = useState(2000); // default 2 seconds
    const [hasPermission, setHasPermission] = useState(false);
    const intervalRef = useRef<number | null>(null);

    const images = genImgList(imgPath as string, Number(count));

    // manual
    const goToNextImage = () => { setCurrentImage((prevIndex) => (prevIndex + 1) % images.length); };
    const goToPrevImage = () => { setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length); };
    const handleSwipeLeft = () => { console.log(images[currentImage]); goToNextImage(); };
    const handleSwipeRight = () => { console.log(images[currentImage]); goToPrevImage(); };

    // auto
    const scaleAnim = useRef(new Animated.Value(1)).current;
    
    const goToNextImageWithEffect = () => {
        // Shrink the image first
        Animated.timing(scaleAnim, {
            toValue: 0.7, // Shrink the current image
            duration: 300, // Shrink speed
            useNativeDriver: true,
        }).start(() => {
            // After shrinking, switch to the next image
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    
            // Restore the image to its original size
            Animated.timing(scaleAnim, {
                toValue: 1, // Restore to original size
                duration: 300, // Grow back to normal size
                useNativeDriver: true,
            }).start(() => {
                // Start auto slideshow after the animation completes
                startAutoSlideshow(); 
            });
        });
    };

    
    const startAutoSlideshow = () => {
        setIsAutoSlideshow(true);
        intervalRef.current = window.setInterval(() => {
            goToNextImageWithEffect();
        }, intervalTime);
    };

    const stopAutoSlideshow = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsAutoSlideshow(false);
    };

    useEffect(() => {
        if (parentNavi) {
            parentNavi.setOptions({ headerShown: false }); // Hide Drawer header
        }
        return () => {
            if (parentNavi) {
                parentNavi.setOptions({ headerShown: true }); // Restore Drawer header on exit
            }
        };
    }, [parentNavi]);

    const toggleSlideshow = () => {
        if (isAutoSlideshow) {
            stopAutoSlideshow();
        } else { startAutoSlideshow(); }
    };

    const showToast = (message: string) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
            Alert.alert("Notification", message);
        }
    };

    useEffect(() => {
        // Request permission to save files
        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const downloadImage = async () => {
        if (!hasPermission) {
            showToast("Please grant media access to save images.");
            return;
        }

        try {
            const imageUrl = images[currentImage];
            const fileName = imageUrl.split('/').pop(); // Get the file name from URL
            const fileUri = `${FileSystem.documentDirectory}${fileName}`;

            // Download the image
            const { uri } = await FileSystem.downloadAsync(imageUrl, fileUri);
            const asset = await MediaLibrary.createAssetAsync(uri);
            await MediaLibrary.createAlbumAsync("Downloaded Images", asset, false);

            showToast("Download complete! Image saved.");
        } catch (error) {
            console.error("Download Error:", error);
            showToast("Download failed. Try again.");
        }
    };


    return (
        <View style={styles.sliderContainer}>
            {!isAutoSlideshow && (
                <TouchableOpacity
                    onPress={downloadImage}
                    style={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        padding: 10,
                        borderRadius: 20,
                        zIndex: 10
                    }}
                >
                    <MaterialCommunityIcons name="download" size={24} color="white" />
                </TouchableOpacity>
            )}
            <TouchableOpacity onPress={toggleSlideshow} style={{ position: 'absolute', width: '100%', height: '100%' }}>
                {/* <Image source={{ uri: images[currentImage] }} style={styles.sliderImage} /> */}
                <Animated.Image
                    source={{ uri: images[currentImage] }}
                    style={[styles.sliderImage, { transform: [{ scale: scaleAnim }] }]}
                />
            </TouchableOpacity>

            {!isAutoSlideshow && (
                <View style={styles.sliderNavigation}>
                    <TouchableOpacity onPress={handleSwipeRight} style={styles.sliderNavButton}>
                        <Text style={[styles.sliderNavText]}>←</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSwipeLeft} style={styles.sliderNavButton}>
                        <Text style={[styles.sliderNavText]}>→</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
};