import React, { useState, useEffect } from "react";
import { View, Image, Button, Text } from "react-native";
import style from "./style";
import Icon from 'react-native-vector-icons/Ionicons'

const CategoryDetails = ({ route }) => {
  const [selectedCategory, setSelectedCategory] = useState({});

  useEffect(() => {
    const { category } = route.params;
    setSelectedCategory(category);
  }, []);

  return (
    <View style={style.container}>
        <Icon name='ios-checkmark-circle-outline' size={24} style={style.checkIcon}/>
      <Image source={{ uri: selectedCategory.image }} style={style.image} />
      <View style={style.containerText}>
        <View style={style.containerText}>
          <Text style={style.description}>Categoria:</Text>
          <Text style={style.item}>{selectedCategory.description}</Text>
        </View>
        <View style={style.containerText}>
          <Text style={style.description}>Possui: </Text>
          <Text style={style.item}>{selectedCategory.items} itens</Text>
        </View>
      </View>
    </View>
  );
};

export default CategoryDetails;
