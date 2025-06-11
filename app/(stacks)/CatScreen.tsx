import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import styles from '@/config/styles';
import { StatusBar } from 'expo-status-bar';

import { CatInterface } from '@/config/type';
import { CatList } from '@/data/CatList';

const CategoryScreen: React.FC = () => {
    const { repo, gh } = useLocalSearchParams();   // HomeList // repo:abstunning          gh: ai8ai 

    const [catList, setCatList] = useState<CatInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const catData = CatList[repo as string] || CatList.default;
        setCatList(catData);
        setLoading(false);
    }, [repo]);

    if (loading) return <ActivityIndicator size="large" />;
    if (error) return <Text>{error}</Text>;

    const handleSubCatPress = (item: CatInterface) => {
        if (item.id.startsWith("sub")) {
            router.push({
                pathname: "/SubCatScreen", params: {
                    gh: gh,
                    itemid: item.id,
                    title: item.title,
                }
            });
        } else {
            router.push({
                pathname: "/cat2img", params: {
                    gh: gh,
                    repo: repo,      //repo
                    folder: item.id,         // id is folder
                    title: item.title,
                }
            });
        }
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
                data={catList}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.mainGrid}
            />
            <StatusBar style="dark" translucent />

        </View>

    );
};

export default CategoryScreen;
