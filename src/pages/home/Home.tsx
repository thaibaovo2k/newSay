import React from "react";
import { View, Dimensions } from "react-native";
import {
  categoriesData,
  gameData,
  gameData2,
  healthData,
  sportData,
  topWordData,
  watchData,
  wordData,
} from "../../api/data";
import Categories from "../../components/categories/Categories";
import Category from "../../components/category/Category";
import Header from "../../components/header/Header";
import HoriCategory from "../../components/horiCategory/HoriCategory";
import NewsCart from "../../components/newsCart/NewsCart";
import Swiper from "../../components/swiper/Swiper";
import ButtonAdd from "../../components/buttonAdd/ButtonAdd";

type Props = {};

const Home = (props: Props) => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Swiper />
      <Category title="Sport" btn={true} data={sportData} />
      <Category title="Health" btn={true} data={healthData} />
      <Category title="Mini Game" data={gameData} />
      <NewsCart title="Watch it" btn={false} data={watchData[0]} />
      <Category btn={false} data={gameData2} />
      <HoriCategory title="Word" data={wordData} btn={true} />
      <Categories title="Categories" data={categoriesData} />
      <Categories title="Top Word" data={topWordData} />
      <View style={{ width: windowWidth, alignItems:'flex-end',paddingRight:24,paddingBottom:24}}>
        <ButtonAdd />
      </View>
    </View>
  );
};

export default Home;
