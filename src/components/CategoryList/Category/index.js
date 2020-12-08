import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import style from './style';

const Category = ({navigation, category }) => {

    const openDetails = () => {
        navigation.navigate('CategoryDetails', {
            category: category
        })
    }

    return (
            <View>
                    <TouchableOpacity key={category.id} onPress={openDetails} style={style.touchable}>
                        <View style={style.container}>
                            <Image source={{uri: category.image}} style={style.image}/>
                            <View>
                                <Text style={style.description}>{category.description}</Text>
                                <Text style={style.items}>{category.items} item(s)</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
            </View>
    )
}

export default Category;

