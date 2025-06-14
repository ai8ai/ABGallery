import { View, Text, Image, Animated, Alert, TouchableOpacity, ActivityIndicator  } from 'react-native';
import { ToastAndroid, Platform } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';

import { useLocalSearchParams, useNavigation } from 'expo-router';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '@/config/styles';



const GITHUB_API_URL = (gh: string, repo: string, folder: string) => `https://api.github.com/repos/${gh}/${repo}/contents/${folder}`;
const GITHUB_RAW_URL = (gh: string, repo: string, folder: string) => `https://raw.githubusercontent.com/${gh}/${repo}/main/${folder}/`;


export default function SlideshowScreen() {
    const navigation = useNavigation();
    const parentNavi = navigation.getParent();
    const { gh, repo, folder } = useLocalSearchParams();
    console.log("gh:", gh, "repo:", repo, "folder:", folder)

    const [images, setImages] = useState<string[]>([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [isAutoSlideshow, setIsAutoSlideshow] = useState(false);
    const [hasPermission, setHasPermission] = useState(false);
    const [resizeMode, setResizeMode] = useState<'cover' | 'contain'>('cover');

    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        console.log("Current Image:", images[currentImage]);
    }, [currentImage]);
    // Fetch image list dynamically from GitHub API


    useEffect(() => {
        if (images.length > 0) {
            getResizeMode(images[currentImage], (mode) => {
                setResizeMode(mode);
            });

            const nextIndex = (currentImage + 1) % images.length;
            Image.prefetch(images[nextIndex]); // Preload next image
        }
    }, [currentImage]);


    useEffect(() => {
        const fetchImageList = async () => {
            try {
                console.log(repo + " repo - folder " + folder + " - gh:" + gh)
                const response = await fetch(GITHUB_API_URL(gh as string, repo as string, folder as string));
                if (!response.ok) throw new Error("Failed to fetch image list");
                const files = await response.json();


                // Filter only image files (e.g., .jpg, .png, .jpeg)
                const imageFiles = files
                    .filter((file: any) => file.type === 'file' && /\.(jpg|jpeg|webp|png|gif|JPG|JPEG|PNG|WEBP)$/i.test(file.name))
                    .map((file: any) => GITHUB_RAW_URL(gh as string, repo as string, folder as string) + file.name);

                const shuffledImages = imageFiles.sort(() => Math.random() - 0.5);
                setImages(shuffledImages);
            } catch (error) {
                console.error("Error fetching image list:", error);
            }
        };
        fetchImageList();
    }, [repo, folder]);

    // Manual navigation
    const goToNextImage = () => { setCurrentImage((prev) => (prev + 1) % images.length); };
    const goToPrevImage = () => { setCurrentImage((prev) => (prev - 1 + images.length) % images.length); };

    // Auto slideshow
    const startAutoSlideshow = () => {
        setIsAutoSlideshow(true);
        intervalRef.current = window.setInterval(() => {
            goToNextImage();
        }, 3000);
    };

    const stopAutoSlideshow = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsAutoSlideshow(false);
    };

    const getResizeMode = (imageUrl: string, callback: (mode: "cover" | "contain") => void) => {
        Image.getSize(imageUrl, (width, height) => {
            const aspectRatio = height/width;
            console.log(aspectRatio.toFixed(2))

            // Decide resizeMode based on aspect ratio
            const mode = aspectRatio > 1.4 ? "cover" : "contain";
            callback(mode);
        }, (error) => {
            console.error("Failed to get image size:", error);
            callback("cover");  // Default to "cover" if error occurs
        });
    };


    // Scale animation for toggle
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const toggleSlideshow = () => {
        if (isAutoSlideshow) {
            stopAutoSlideshow();
            Animated.timing(scaleAnim, { toValue: 1, duration: 300, useNativeDriver: true }).start();
        } else {
            Animated.timing(scaleAnim, { toValue: 0.3, duration: 2500, useNativeDriver: true }).start(() => {
                startAutoSlideshow();
                Animated.timing(scaleAnim, { toValue: 1, duration: 300, useNativeDriver: true }).start();
            });
        }
    };

    useEffect(() => {
        // Hide Drawer header
        if (parentNavi) {
            parentNavi.setOptions({ headerShown: false });
        }
        return () => {
            if (parentNavi) {
                parentNavi.setOptions({ headerShown: true });
            }
        };
    }, [parentNavi]);


    // Toast message
    const showToast = (message: string) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
            Alert.alert("Notification", message);
        }
    };

    // Download Image
    const downloadImage = async () => {
        // Request permission dynamically
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== 'granted') {
            showToast("Please grant media access to save images.");
            return;
        }
    
        try {
            const imageUrl = images[currentImage];
            const fileName = imageUrl.split('/').pop();
            const fileUri = `${FileSystem.documentDirectory}${fileName}`;
    
            const { uri } = await FileSystem.downloadAsync(imageUrl, fileUri);
            const asset = await MediaLibrary.createAssetAsync(uri);
            await MediaLibrary.createAlbumAsync("Downloaded Images", asset, false);    
            showToast("Download complete! Image saved.");
        } catch (error) {
            console.error("Download Error:", error);
            showToast("Download failed. Try again.");
        }
    };
    
    if (images.length === 0) {
        
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.sliderContainer}>
            {!isAutoSlideshow && (
                <TouchableOpacity onPress={downloadImage} style={{ position: 'absolute', top: 20, right: 20, backgroundColor: 'rgba(0, 0, 0, 0.3)', padding: 10, borderRadius: 20, zIndex: 10 }}>
                    <MaterialCommunityIcons name="download" size={24} color="white" />
                </TouchableOpacity>
            )}
            <TouchableOpacity onPress={toggleSlideshow} style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                    <Image source={{ uri: images[currentImage] }} style={[styles.sliderImage, { resizeMode }]} />
                </Animated.View>
            </TouchableOpacity>

            {!isAutoSlideshow && (
                <View style={styles.sliderNavigation}>
                    <TouchableOpacity onPress={goToPrevImage} style={styles.sliderNavButton}>
                        <Text style={styles.sliderNavText}>←</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToNextImage} style={styles.sliderNavButton}>
                        <Text style={styles.sliderNavText}>→</Text>
                    </TouchableOpacity>
                </View>
            )}
            <StatusBar style="dark" translucent />

        </View>
        
    );
}
