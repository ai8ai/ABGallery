// index.tsx
import React, { useCallback } from 'react';
import { router } from 'expo-router';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { CatInterface } from '@/config/type';
import styles from '@/config/styles';
import { HomeList } from '@/data/HomeList';

const HomeScreen = () => {
    const handleItemPress = (item: CatInterface) => {
        router.push({
            pathname: "/CatScreen",
            params: {
                repo: item.id,         // repo:abstunning          gh: ai8ai     title: "Hot 🧨 Stunning"
                gh: item.gh,          // HomeList provids: gh, repo, title
                title: item.title,           // for updating the title of (stacks), not passing down 
            },
        });
    };

    const renderItem = useCallback(({ item }: { item: CatInterface }) => {
        return (
            <TouchableOpacity
                style={styles.catContainer}
                onPress={() => handleItemPress(item)}
            >
                <Image source={{ uri: item.cover }} style={styles.catCoverImg} />
                <Text style={styles.catTitle} numberOfLines={2}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        );
    }, [handleItemPress]);


    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={HomeList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={styles.mainGrid}
            />
        </View>
    );
};

export default HomeScreen;