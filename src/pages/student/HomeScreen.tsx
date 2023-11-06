import React, { useState } from "react";
import { Dimensions, ScrollView, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
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
import ButtonAdd from "../../components/buttonAdd/ButtonAdd";
import Categories from "../../components/categories/Categories";
import Category from "../../components/category/Category";
import Header from "../../components/header/Header";
import HoriCategory from "../../components/horiCategory/HoriCategory";
import NewsCart from "../../components/newsCart/NewsCart";
import Swiper from "../../components/swiper/Swiper";
import { useNavigation, useRoute } from "@react-navigation/native";

type Props = {};

const HomeScreen = (props: Props) => {
  const windowWidth = Dimensions.get("window").width;
  const [compact, setCompact] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigation = useNavigation();

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  };
  const handleCompact = () => {
    setCompact(!compact);
  };
  const handlePressNew = () => {
    navigation.navigate('NewsScreen')
  }
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          backgroundColor: "#FFFBF5",
        }}
      >
        <Header onPressSearch={handleShowSearch}/>
        <Swiper onPress={handlePressNew}/>
        <Animatable.View
          animation={compact ? "slideInDown" : "slideOutUp"}
          duration={500}
        >
          {compact ? (
            <View style={{top:-90}}>
              <Category title="Sport" btn={true} data={sportData} />
              <Category title="Health" btn={true} data={healthData} />
              <Category title="Mini Game" data={gameData} />
              <NewsCart title="Watch it" btn={false} data={watchData[0]} />
              <Category btn={false} data={gameData2} />
              <HoriCategory title="Word" data={wordData} btn={true} />
              <Categories title="Categories" data={categoriesData} />
              <Categories title="Top Word" data={topWordData} />
            </View>
          ) : (
            <View>
              <Category title="Sport" btn={true} data={sportData} />
              <Category btn={true} data={sportData} />
              <HoriCategory title="Lastest News" data={wordData} btn={true} />
            </View>
          )}
        </Animatable.View>
        <TouchableOpacity onPress={handleCompact}>
          <View
            style={{
              width: windowWidth,
              alignItems: "flex-end",
              paddingRight: 24,
              paddingBottom: 24,
            }}
          >
            <ButtonAdd />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
