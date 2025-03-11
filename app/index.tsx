// index.tsx
import { router } from 'expo-router';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import { CatInterface } from '@/config/type';
import styles from '@/config/styles';
import { HomeList } from '@/data/CatImgList';

const HomeScreen = () => {
    const handleItemPress = (item: CatInterface) => {
        router.push({
            pathname: "/CatScreen",
            params: {
                catId: item.id,         // repo
                ghname: item.ghname,
                catTitle: item.title,           // for updating the title of stack 
                catShortTitle: item.shorttitle  // for updating the title of drawer
            },
        });
    };

    const renderItem = ({ item }: { item: CatInterface }) => (
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
