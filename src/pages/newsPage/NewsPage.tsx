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

type Props = {};

const NewsPage = (props: Props) => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View>
      <Header />
      <View style={{ marginLeft: 16, marginRight: 16, marginBottom: 32 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 4 }}>
          Think logicall, teach gobally
        </Text>
        <Text style={{ fontSize: 12, marginLeft: 8 }}>
          24 August 2023 I Sports I E3
        </Text>
        <View style={{ marginLeft: 8, marginRight: 8, marginTop: 16, gap: 24 }}>
          <Text style={styles.text}>
            Important events are taking place around the world. It is essential
            that young people undestand what is happening why they should care.
          </Text>
          <View style={{ height: 190 }}>
            <NotiCart title="" />
          </View>
          <Text style={styles.text}>
            We believe that it is more important than ever that education be
            grounded in global awareness.{"\n"}
            {"\n"} China, India, Russia, The U.S and Europe are all sending
            rockets to the moon. The effects of climate change are manifesting
            in every country. A war in Eastern Europe affects food supplies
            everywhere.
            <Text style={styles.text_underline}>Reading Time</Text> young people
            need to know how they are connected to other people in other places,
            how events far from them will affect their lives and how what the
            governments do will affect the lives of people elsewhere. Even if
            they never leave their hometowns, they are still citizens of the
            world.
          </Text>
          <View
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              gap: 0,
              borderLeftWidth: 4,
              borderLeftColor: "#E7A6A6",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#E7A6A6",
                fontWeight: "700",
                marginBottom: 8,
              }}
            >
              Mini game
            </Text>
            <Image
              source={require("../../assets/images/minigameImg.png")}
              style={{ width: "100%", height: 160 }}
              resizeMode="contain"
            />
            <Text>flash study test case char 01</Text>
          </View>
          <Text style={styles.text}>
            We believe GPT that it is more importantt than ever that education
            be grounded on global awareness.{"\n"}
            {"\n"}
            China, India, Russia, the U.S. and Europe are all sending rockets to
            the moon. The effects of climate change are manifesting in every
            country. A war in Easten Europe affects food supplies everywhere.
            {"\n"}
            {"\n"}
            Young people need to know how they are connected to other people in
            others places,
          </Text>
          <View
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              gap: 0,
              borderLeftWidth: 4,
              borderLeftColor: "#E7A6A6",
            }}
          >
            <Image
              source={require("../../assets/images/questionImg.png")}
              style={{ width: 160, height: 160 }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 18,
                color: "#E7A6A6",
                fontWeight: "700",
                marginBottom: 8,
              }}
            >
              QUESTION FOR YOU
            </Text>
          </View>
          <Text style={styles.text}>
            If any of these programs interested you, shoot us a message. And
            find out how your school can become a News Decoder academic partner
          </Text>
          <Text
            style={{
              textAlign: "right",
              fontWeight: "700",
              fontStyle: "italic",
            }}
          >
            AUTHOR GPT
          </Text>
          <Rating />
          <View
            style={{
              backgroundColor: "#FFE2D9",
              width: "100%",
              height: 80,
              borderRadius: 30,
              padding: 8,
            }}
          >
            <TextInput value="How do you think?" />
          </View>
          <Text
            style={{
              backgroundColor: "#142144",
              padding: 8,
              color: "#FFF",
              fontSize: 12,
              width: 80,
              letterSpacing: 1,
              borderRadius: 5,
            }}
          >
            Comment
          </Text>
        </View>
      </View>
      <Categories title="VOCABULARY" data={topWordData} />
      <Category data={gameData2} btn={false} title="For you" />
      <HoriCategory title="Lastest news" data={wordData} btn={false} />
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

export default NewsPage;
