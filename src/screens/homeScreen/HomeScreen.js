import { FlatList, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import menu from "../../images/menu.png";
import cart from "../../images/cart.png";
import { useNavigation } from "@react-navigation/native";
import { s } from "./homeScreenCss";
const HomeScreen = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigation();

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={s.home}>
      <Header
        lefticon={menu}
        righticon={cart}
        title={"Home Page"}
        onClickLeftIcon={() => navigate.openDrawer()}
      />

      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <View style={s.items}>
            <Text>Helloo0</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
