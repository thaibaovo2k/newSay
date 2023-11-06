import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { gameData2, topWordData, wordData } from "../../api/data";
import Categories from "../../components/categories/Categories";
import Category from "../../components/category/Category";
import Header from "../../components/header/Header";
import HoriCategory from "../../components/horiCategory/HoriCategory";
import NotiCart from "../../components/notiCart/NotiCart";
import Rating from "../../components/rating/Rating";
import { useNavigation, useRoute } from "@react-navigation/native";

type Props = {};

const MiniGameScreen = (props: Props) => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const handleBack = () => {
    navigation.navigate("NewsScreen");
  };
  return (
    <ScrollView style={{ backgroundColor: "#FFFBF5" }}>
      <Header type="back" onBack={handleBack} />
      <View style={{ marginLeft: 16, marginRight: 16, marginBottom: 32 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 4 }}>
          Think logicall, teach gobally
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 32,
          }}
        >
          <Text>10</Text>
          <Text>180s</Text>
        </View>
        <Image
          source={require("../../assets/images/miniGame.png")}
          resizeMode="contain"
          style={{ width: windowWidth - 32, height: windowWidth - 64 }}
        />
        <View style={{ alignItems: "flex-end" }}>
          <Text
            style={{
              backgroundColor: "#142144",
              color: "#FFF",
              padding: 12,
              paddingRight: 32,
              paddingLeft: 32,
              borderRadius: 10,
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            Hint
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#D6DFFC",
            borderRadius: 20,
            padding: 8,
            paddingLeft: 24,
            gap:32,
            paddingBottom:80,
            marginTop:32
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <Image
              source={require("../../assets/images/playIcon.png")}
              resizeMode="contain"
              style={styles.image}
            />
            <Text style={{ fontSize: 24, fontWeight: "700", color: "#FFB4AA" }}>
              Play
            </Text>
          </View>
          <Image
            style={styles.image}
            source={require("../../assets/images/countTime.png")}
            resizeMode="contain"
          />
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

export default MiniGameScreen;
