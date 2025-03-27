// index.tsx
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
                repo: item.id,         // repo
                gh:   item.gh,
                catTitle: item.title,           // for updating the title of stack 
            },
        });
    };

    const renderItem = ({ item }: { item: CatInterface }) => {
        if (item.id.startsWith("div")) {
            return (
                <View style={styles.dividerContainer}>
                    <Text style={styles.dividerText}>❤️Yang Chenchen Yome Sugar Exclusive🌹</Text>
                    <View style={styles.dividerLine} />
                </View>
            );
        }

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
    };


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