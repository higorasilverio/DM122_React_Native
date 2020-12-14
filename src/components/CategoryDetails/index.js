import React, { useState } from "react";
import { ScrollView } from "react-native";
import Product from "../ProductList/Product";

const CategoryDetails = ({ route, navigation }) => {
  const { category } = route.params;

  const [selectedCategory] = useState(category);

  return (
    <ScrollView>
      {selectedCategory.products.map((product) => (
        <Product navigation={navigation} product={product} key={product.id}/>
      ))}
    </ScrollView>
  );
};

export default CategoryDetails;
