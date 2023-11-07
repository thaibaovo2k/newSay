import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image
} from "react-native";
import Header from "../../components/header/Header";
import SystemItem from "../../components/systemItem/SystemItem";

type Props = {};
const modList1 = ["Post", "Categories", "Trending", "Level", "Mini game"];
const modList2 = ["Point Sytem", "Mascost Management", "Floder Management"];

const HomeScreenMod = (props: Props) => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const handleToDetails = () => {
    navigation.navigate('SystemDetails')
  }
  return (
    <ScrollView style={{ backgroundColor: "#FFFBF5" }}>
      <Header title="Title" searchBtn="hide"/>
      <View
        style={{
          marginLeft: 16,
          marginRight: 16,
          marginBottom: 32,
          padding: 16,
          borderRadius: 20,
          backgroundColor: "#D6DFFC",
        }}
      >
        <Text
          style={{
            marginBottom: 32,
            fontSize: 18,
            fontWeight: "700",
            color: "#FE9A94",
          }}
        >
          Mod System
        </Text>
        <View style={{ gap: 8, marginBottom: 48 }}>
          {modList1?.map((value, index) => (
            <SystemItem key={value + index} value={value} onPress={handleToDetails}/>
          ))}
        </View>
        <View style={{ gap: 8 }}>
          {modList2?.map((value, index) => (
            <SystemItem key={value + index} value={value} />
          ))}
        </View>
        <View style={{position:'absolute',right:6,backgroundColor:'#142144',padding:6,bottom:-24,borderRadius:8,paddingBottom:8}}>
            <Image source={require('../../assets/images/iconAdd.png')} resizeMode="contain"
            style={{width:32,height:32}}/>
        </View>
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
  image: {
    width: 32,
    height: 32,
  },
});

export default HomeScreenMod;
