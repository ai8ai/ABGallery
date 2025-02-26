import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Animated, Pressable, Modal, Text, TextInput, Button } from 'react-native';
import styles from '@/config/styles';
import { StatusBar } from 'expo-status-bar';

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

    const { scaleAnim, animateImageChange } = useScaleAnimation();
    const { savedIntervalValue, intervalInput, handleIntervalChange, saveInterval, intervalDuration } = useInterval();
    const { modalVisible, setModalVisible } = useModalActions(images, currentIndex, () => {});

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
        ]; // Define your animation order
    
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % images.length;
                const nextAnimation = animationSequence[newIndex % animationSequence.length];
                setAnimationType(nextAnimation); // Update animation type
                animateImageChange(() => setCurrentIndex(newIndex));
                return newIndex;
            });
        }, intervalDuration);
    
        return () => clearInterval(interval);
    }, [images, animateImageChange, intervalDuration]);

    if (images.length === 0) {
        return <ActivityIndicator style={styles.loading} size="large" color="#000" />;
    }

    return (
        <View style={styles.sliderContainer}>
            <Animated.View style={[styles.sliderImage, getAnimationStyle(animationType, scaleAnim)]}>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Animated.Image source={{ uri: images[currentIndex] }} style={styles.sliderImage} />
                </Pressable>
            </Animated.View>

            <Modal transparent animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.inputRow}>
                            <Text style={styles.label}>Interval (1 - 99 s):</Text>
                            <TextInput
                                style={styles.textInput}
                                value={intervalInput}
                                onChangeText={handleIntervalChange}
                                keyboardType="numeric"
                            />
                            <Button title="Save" onPress={() => { saveInterval(); setModalVisible(false); }} />
                        </View>
                    </View>
                    <StatusBar style="light" translucent />
                </View>
            </Modal>
            <StatusBar style="light" translucent />
        </View>
    );
};

export default SlideshowYcc;
