import React, { useState, useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { View, Text, Image, Modal, Pressable, TouchableOpacity } from 'react-native';

import styles from '@/config/styles';
import { genImgList } from '@/utils/genImageList';
import { useAutoSlideshow } from '@/hooks/useAutoSlideshow';

export default function SlideshowScreen() {
    const navigation = useNavigation();
    const parentNavi = navigation.getParent();
    const { imgPath, count } = useLocalSearchParams();

    const images = genImgList(imgPath as string, Number(count));

    const { currentIndex, setCurrentIndex, goToNextImage, goToPrevImage, startSlideshow, stopSlideshow } = useAutoSlideshow(images);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (parentNavi) parentNavi.setOptions({ headerShown: false });
        return () => {
            if (parentNavi) parentNavi.setOptions({ headerShown: true });
        };
    }, [parentNavi]);

    return (
        <View style={styles.sliderContainer}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <Image source={{ uri: images[currentIndex] }} style={styles.sliderImage} />
            </TouchableOpacity>

            <View style={styles.sliderNavigation}>
                <TouchableOpacity onPress={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)} style={styles.sliderNavButton}>
                    <Text style={[styles.sliderNavText, { fontFamily: 'monospace' }]}>←</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCurrentIndex((prev) => (prev + 1) % images.length)} style={styles.sliderNavButton}>
                    <Text style={[styles.sliderNavText, { fontFamily: 'monospace' }]}>→</Text>
                </TouchableOpacity>
            </View>

            <Modal transparent animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <Pressable style={styles.modalContainer} onPress={() => setModalVisible(false)}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={() => {
                                setModalVisible(false); // Close modal
                                startSlideshow(); // Start slideshow
                            }}>
                            <Text style={styles.buttonText}>▶️ Start Slideshow</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.savePictureButton} onPress={() => { }}>
                            <Text style={styles.buttonText}>✅ Save Image</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
}
