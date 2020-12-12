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
        <View style={style.container}>
            <Image source={{uri: selectedCategory.image}} style={style.image}/>
            <View style={style.containerText}>
                <Text style={style.description}>{selectedCategory.description}</Text>
                <Text style={style.price}>{selectedCategory.items}</Text>
            </View>
        </View>
    )

}

export default CategoryDetails;