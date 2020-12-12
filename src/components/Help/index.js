import React from "react";
import { View, Text } from "react-native";
import Header from "../Header";
import style from "./style";

const Help = () => {
  return (
    <>
      <Header />
      <View style={style.container}>
        <Text style={style.item}>Pedido</Text>
        <Text style={style.item}>Pagamento</Text>
        <Text style={style.item}>Entrega</Text>
        <Text style={style.item}>Contato</Text>
      </View>
    </>
  );
};

export default Help;
