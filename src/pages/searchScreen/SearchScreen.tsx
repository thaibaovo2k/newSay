import React from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import {
    gameData2,
    topWordData,
    wordData
} from "../../api/data";
import Categories from "../../components/categories/Categories";
import Category from "../../components/category/Category";
import Header from "../../components/header/Header";
import HoriCategory from "../../components/horiCategory/HoriCategory";
import NotiCart from "../../components/notiCart/NotiCart";
import Rating from "../../components/rating/Rating";
import MenuSearch from "../../components/menuSearch/menuSearch";

type Props = {};

const SearchScreen = (props: Props) => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={{backgroundColor:'#142144',width:'100%',height:'100%'}}>
      <Header mode="dark" label=""/>
      <MenuSearch/>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "#8B8681",
    // letterSpacing: 1,
    fontWeight: "100",
  },
  text_underline: {
    fontSize: 14,
    color: "#7142F8",
    textDecorationLine: "underline",
  },
});

export default SearchScreen;
