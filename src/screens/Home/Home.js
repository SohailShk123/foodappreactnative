import { View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import { s } from "./homeCss";
import HomeScreen from "../homeScreen/HomeScreen";
import Search from "../search/Search";
import Wishlist from "../wishlist/Wishlist";
import Notification from "../notification/Notification";
import Profile from "../profile/Profile";

const Home = () => {
  const [selected, setSelected] = useState(0);
  return (
    <SafeAreaView style={s.homeContainer}>
      <View>
        {selected === 0 ? (
          <HomeScreen />
        ) : selected === 1 ? (
          <Search />
        ) : selected === 2 ? (
          <Wishlist />
        ) : selected === 3 ? (
          <Notification />
        ) : (
          <Profile />
        )}
      </View>
      <Footer setSelected={setSelected} selected={selected} />
    </SafeAreaView>
  );
};

export default Home;
