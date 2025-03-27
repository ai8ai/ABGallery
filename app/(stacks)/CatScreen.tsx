import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import styles from '@/config/styles';

import { CatInterface } from '@/config/type';
import { Cat2Sub2Img } from '@/data/CatList';

const CategoryScreen: React.FC = () => {
    const { repo, gh, catTitle } = useLocalSearchParams();   // catId is repo

    const [subCatList, setSubCatList] = useState<CatInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const subCatData = Cat2Sub2Img[repo as string] || Cat2Sub2Img.default;
        setSubCatList(subCatData);
        setLoading(false);
    }, [repo]);

    if (loading) return <ActivityIndicator size="large" />;
    if (error) return <Text>{error}</Text>;

    const handleSubCatPress = (item: CatInterface) => {
        if (item.id.startsWith("sub"))
            router.push({
                pathname: "/SubCatScreen", params: {
                    catId:      item.id,         
                    ghname:     item.gh,
                    catTitle:   item.title,           // for updating the title of stack 
                }
            });
        else
            router.push({
                pathname: "/cat2img", params: {
                    folder: item.folder,
                    catTitle:   "item.title",
                    repo: repo,      //repo
                    ghname: gh,
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
