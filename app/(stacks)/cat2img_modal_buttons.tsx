import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { View, Text, Image, Modal, Animated, Pressable, Alert, TouchableOpacity } from 'react-native';

import styles         from '@/config/styles';
import { genImgList } from '@/utils/genImageList'

export default function SlideshowScreen() {
    const navigation = useNavigation();
    const parentNavi = navigation.getParent();
    const { imgPath, count } = useLocalSearchParams();

    const [currentImage, setCurrentImage] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [isAutoSlideshow, setIsAutoSlideshow] = useState(false);
    const [intervalTime, setIntervalTime] = useState(2000); // default 2 seconds
    const intervalRef = useRef<number | null>(null);

    const images = genImgList(imgPath as string, Number(count));

    // manual
    const goToNextImage = () => { setCurrentImage((prevIndex) => (prevIndex + 1) % images.length); };
    const goToPrevImage = () => { setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length); };
    const handleSwipeLeft = () => { goToNextImage(); };
    const handleSwipeRight = () => { console.log(images[currentImage]); goToPrevImage(); };

    // auto
    const startAutoSlideshow = () => {
        setIsAutoSlideshow(true);
        intervalRef.current = window.setInterval(() => {
            goToNextImage();
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

    return (
        <View style={styles.sliderContainer}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <Image source={{ uri: images[currentImage] }} style={styles.sliderImage} />
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

            <Modal transparent animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <Pressable style={styles.modalContainer} onPress={() => setModalVisible(false)}>
                    <View style={styles.modalContent}>
                        {isAutoSlideshow ? (
                            <>
                                <TouchableOpacity style={styles.saveButton} onPress={stopAutoSlideshow}>
                                    <Text style={styles.buttonText}>⏹️ Switch to Manual Mode</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.saveButton} onPress={() => Alert.prompt('Set Interval (ms)', '', (text) => setIntervalTime(Number(text)))}>
                                    <Text style={styles.buttonText}>⏳ Set Interval</Text>
                                </TouchableOpacity>
                            </>
                        ) : (
                            <TouchableOpacity style={styles.saveButton} onPress={() => {
                                setModalVisible(false);
                                startAutoSlideshow();
                            }}>
                                <Text style={styles.buttonText}>▶️ Start Slideshow</Text>
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity style={styles.savePictureButton} onPress={() => { }}>
                            <Text style={styles.buttonText}>✅ Save Image</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </Modal>

        </View>
    );
}