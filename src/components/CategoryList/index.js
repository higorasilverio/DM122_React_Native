import React, { useState } from "react";
import { ScrollView } from "react-native";
import Category from "./Category";

const CategoryList = ({ navigation }) => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      image:
        "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
      description: "Eletrônicos",
      items: "2",
      products: [
        {
          id: 1,
          image:
            "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
          description: "Some description 1",
          price: "R$10,00",
        },
        {
          id: 2,
          image:
            "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
          description: "Some description 2",
          price: "R$20,00",
        },
      ],
    },
    {
      id: 2,
      image:
        "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
      description: "Baby",
      items: "3",
      products: [
        {
          id: 1,
          image:
            "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
          description: "Some description 1",
          price: "R$10,00",
        },
        {
          id: 2,
          image:
            "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
          description: "Some description 2",
          price: "R$20,00",
        },
        {
          id: 3,
          image:
            "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
          description: "Some description 3",
          price: "R$30,00",
        },
      ],
    },
    {
      id: 3,
      image:
        "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
      description: "Casa",
      items: "0",
      products: [],
    },
    {
      id: 4,
      image:
        "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
      description: "Saúde",
      items: "0",
      products: [],
    },
    {
      id: 5,
      image:
        "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
      description: "Informática",
      items: "0",
      products: [],
    },
    {
      id: 6,
      image:
        "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
      description: "Vestuário",
      items: "0",
      products: [],
    },
    {
      id: 7,
      image:
        "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
      description: "Cama, Mesa e Banho",
      items: "0",
      products: [],
    },
    {
      id: 8,
      image:
        "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
      description: "Ferramentas",
      items: "0",
      products: [],
    },
    {
      id: 9,
      image:
        "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
      description: "Cama, Mesa e Banho",
      items: "0",
      products: [],
    },
    {
      id: 10,
      image:
        "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
      description: "Ferramentas",
      items: "0",
      products: [],
    },
  ]);

  return (
    <ScrollView>
      {categories.map((category) => (
        <Category
          navigation={navigation}
          category={category}
          key={category.id}
        />
      ))}
    </ScrollView>
  );
};

export default CategoryList;
