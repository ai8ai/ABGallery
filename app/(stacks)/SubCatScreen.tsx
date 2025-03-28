import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import styles from '@/config/styles';

import { CatInterface } from '@/config/type';
import { CatList } from '@/data/CatList';
import { SubList } from '@/data/SubCatList';


const CategoryScreen: React.FC = () => {
    const { itemid, gh } = useLocalSearchParams();   // catId is repo
    const [subCatList, setSubCatList] = useState<CatInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const subCatData = SubList[itemid as string] || CatList.default;
        console.log(itemid.slice(4))
        setSubCatList(subCatData);
        console.log(subCatList)
        setLoading(false);
    }, [itemid]);

    if (loading) return <ActivityIndicator size="large" />;
    if (error) return <Text>{error}</Text>;

    const handleSubCatPress = (item: CatInterface) => {
        console.log("SubCat Pressed:");
        router.push({
            pathname: "/cat2img", params: {
                gh:     gh,
                repo:   itemid.slice(4),      //repo
                folder: item.id,         // id is folder
                title:  item.title,
            }
        });
    };

    const renderItem = ({ item }: { item: CatInterface }) => (
        <TouchableOpacity
            style={styles.catContainer}
            onPress={() => handleSubCatPress(item)}
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
                data={subCatList}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.mainGrid}
            />
        </View>
    );
};

export default CategoryScreen;
