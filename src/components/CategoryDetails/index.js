import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import { Product } from '../ProductList/Product';

const CategoryDetails = ({route}) => {

    const [selectedCategory, setSelectedCategory] = useState({});

    useEffect(() => {
        const { category } = route.params;
        setSelectedCategory(category);
    }, [])

    return (
        <ScrollView>
            {
                selectedCategory.products.map(product => <Product
                    navigation={navigation}
                    product={product}
                    key={product.id}
                />)
            }
        </ScrollView>
    )
}

export default CategoryDetails;
