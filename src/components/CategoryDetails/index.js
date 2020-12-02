import React, {useState, useEffect} from 'react';
import {View, Image, Button, Text} from 'react-native';
import {colors} from '../../styles';
import style from './style';
import { useCartContext } from '../../contexts/cart';

const CategoryDetails = ({route}) => {

    const [selectedCategory, setSelectedCategory] = useState({});

    useEffect(() => {
        const { category } = route.params;
        setSelectedCategory(category);
    }, [])

    return (
        <View>
            <Image source={{uri: selectedCategory.image}}/>
            <View>
                <Text>{selectedCategory.description}</Text>
                <Text>{selectedCategory.items}</Text>
            </View>
        </View>
    )

}

export default CategoryDetails;
