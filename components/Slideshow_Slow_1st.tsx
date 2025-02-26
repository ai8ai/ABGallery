import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, ActivityIndicator, Animated, Pressable, Modal, Text, TextInput, Button, Image } from 'react-native';
import styles from '@/config/styles';
import { StatusBar } from 'expo-status-bar';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

import { AnimationType, getAnimationStyle } from '@/utils/animationStyles';
import useScaleAnimation from '@/hooks/useAnimations';
import useInterval from '@/hooks/useInterval';
import useModalActions from '@/hooks/useModalActions';

interface SlideshowYccProps {
    images: string[];
}

const SlideshowYcc: React.FC<SlideshowYccProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationType, setAnimationType] = useState<AnimationType>(AnimationType.Scale);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    const { scaleAnim, animateImageChange } = useScaleAnimation();
    const { savedIntervalValue, intervalInput, handleIntervalChange, saveInterval, intervalDuration } = useInterval();
    const { modalVisible, setModalVisible } = useModalActions(images, currentIndex, () => { });

    // Request permissions once when the component mounts
    useEffect(() => {
        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useEffect(() => {
        if (images.length === 0) return;

        const animationSequence = [
            AnimationType.Scale,
            AnimationType.Zoom,
            AnimationType.Fade,
            AnimationType.Slide,
            AnimationType.Rotate,
            AnimationType.Bounce,
            AnimationType.Wobble,
            AnimationType.Flip,
        ];

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % images.length;
                const nextAnimation = animationSequence[newIndex % animationSequence.length];
                setAnimationType(nextAnimation);
                animateImageChange(() => setCurrentIndex(newIndex));
                return newIndex;
            });
        }, intervalDuration);

        return () => clearInterval(interval);
    }, [images, animateImageChange, intervalDuration]);

    const savePicture = async () => {
        if (hasPermission === false) {
            alert('Permission denied. Please enable it in settings.');
            return;
        }

        try {
            const uri = images[currentIndex];
            const fileUri = FileSystem.documentDirectory + `image_${Date.now()}.jpg`;
            await FileSystem.downloadAsync(uri, fileUri);

            // Save the image to the library
            await MediaLibrary.saveToLibraryAsync(fileUri);
            alert('Image saved successfully!');
        } catch (error) {
            alert('Failed to save image.');
        }
    };

    if (images.length === 0) {
        return <ActivityIndicator style={styles.loading} size="large" color="#000" />;
    }

    return (
        <View style={styles.sliderContainer}>
            <Animated.View style={[styles.sliderImage, getAnimationStyle(animationType, scaleAnim)]}>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Image source={{ uri: images[currentIndex] }} style={styles.sliderImage} />
                </Pressable>
            </Animated.View>

            <Modal transparent animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.inputRow}>
                            <Text style={styles.label}>Interval (1 - 99 s):</Text>
                            <TextInput
                                style={styles.textInputInterval}
                                value={intervalInput}
                                onChangeText={handleIntervalChange}
                                keyboardType="numeric"
                            />
                        </View>
                        <TouchableOpacity style={styles.saveButton} onPress={() => { saveInterval(); setModalVisible(false); }}>
                            <Text style={styles.buttonText}>Save Interval</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.savePictureButton} onPress={savePicture}>
                            <Text style={styles.buttonText}>Save Picture</Text>
                        </TouchableOpacity>
                        {/* <Button title="Save Interval" onPress={() => { saveInterval(); setModalVisible(false); }} />
                        <Button title="Save Picture" onPress={savePicture} /> */}
                    </View>
                    <StatusBar style="light" translucent />
                </View>
            </Modal>
            <StatusBar style="light" translucent />
        </View>
    );
};

export default SlideshowYcc;