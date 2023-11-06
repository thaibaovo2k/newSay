import React, { useState } from "react";
import { Dimensions, StyleSheet, View,Text,ScrollView } from "react-native";
import { wordData } from "../../api/data";
import Header from "../../components/header/Header";
import HoriCategory from "../../components/horiCategory/HoriCategory";
import MenuSearch from "../../components/menuSearch/menuSearch";
import { useNavigation, useRoute } from "@react-navigation/native";
import ResultSearch from "../../components/resultSearch/ResultSearch";

type Props = {};

const SearchScreen = (props: Props) => {
  const windowWidth = Dimensions.get("window").width;
  const [showSearch, setShowSearch] = useState(true);
  const navigation = useNavigation();


  const handlePressSearch = () => {
    setShowSearch(false)
  }
  const handleBack =() => {
    navigation.navigate('Home')
  } 
  return (
    <ScrollView>
    <View style={{ backgroundColor: "#142144", width: "100%", height: "100%" }}>
      <Header mode="dark" type="back" onBack={handleBack}/>
      {showSearch ? 
        <View>
          <MenuSearch onPressSearch={handlePressSearch}/>
          <HoriCategory mode="dark" title="Lastest news" data={wordData} btn={false}/>
        </View>
        :
        <View>
            <View style={{paddingLeft:16}}>
                <Text style={styles.text_title}>Title: Reading Time</Text>
                <Text style={styles.text_title}>Categories: Education</Text>
                <Text style={styles.text_title}>Level: E4</Text>
                <Text style={styles.text_title}>Trending: Fun, Ghost </Text>
            </View>
            <ResultSearch status={true}/>
        </View>
      }
    </View>
    </ScrollView>
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
  text_title: {
    fontSize:16,
    color: '#FFF',fontWeight: '700'
  }
});

export default SearchScreen;
