import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { RadioButton } from "react-native-paper";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";

type Props = {};
const modList1 = [
  "Question 01 I ABCD I 20.08.2023 I Published",
  "Question 01 I ABCD I 20.08.2023 I Published",
  "Question 01 I ABCD I 20.08.2023 I Published",
  "Question 01 I ABCD I 20.08.2023 I Published",
];
const listType = ["ABCD", "Arrage word", "True/ False", "Blank"];
const listType2 = ["A", "B", "C", "D"];
const listColor = ["#CDDBFF", "#FFFBF5", "#FFBBBB", "#FEEDE3"];
const EditPostScreen = (props: Props) => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const [checked, setChecked] = React.useState("first");
  const [checked2, setChecked2] = React.useState("first");
  const [showAnswer, setShowAnswer] = useState(false);
  const handleBack = () => {
    navigation.navigate("SystemDetails");
  };
  const handleToNewPost = () => {
    navigation.navigate("NewsPostScreen");
  };
  const handlePressSetting = (value) => {
    if (value == "post") {
      navigation.navigate("Home");
    } else if (value == "edit") {
      navigation.navigate("Home");
    }
  };
  const handleUpdate = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <ScrollView style={{ backgroundColor: "#FFF" }}>
      <Header
        title="Post 001"
        type="back"
        onBack={handleBack}
        searchBtn="hide"
      />
      <View
        style={{
          margin: 8,
          marginLeft: 24,
          gap: 16,
          marginBottom: 24,
          marginRight: 24,
        }}
      >
        <View>
          <Text style={styles.textTitle}>Level: M12</Text>
          <Text style={styles.textTitle}>Style: Story</Text>
          <Text style={styles.textTitle}>Tone: Ghost, Fun</Text>
        </View>
        <View>
          <Text
            style={{ backgroundColor: "#FEFAEC", padding: 8, borderRadius: 10 }}
          >
            Name course ( only 20 character )
          </Text>
        </View>
        <View style={{flexDirection:'row',gap:16,alignItems:'center'}}>
          <Image
            source={require("../../assets/images/post001.png")}
            resizeMode="contain"
            style={{ width: 150, height: 150 }}
          />
          <Button title="Gernerate"/>
        </View>
        <View style={{backgroundColor:'#FEEDE3',minHeight:200,padding:8,borderRadius:20}}>
            <Text>Sapo</Text>
        </View>
        <View style={{backgroundColor:'#ECECF4',minHeight:300,padding:8,borderRadius:20}}>
            <Text>Content</Text>
        </View>
        <View style={{alignItems:'flex-start',marginTop:32}}>
            <Text style={{backgroundColor:'#FDD4D2',padding:12,paddingLeft:40,paddingRight:40,borderRadius:10}}>dd/MM/yyyy</Text>
        </View>
        <View style={{ width: "auto", }}>
            <View style={{ flexDirection: "row", alignItems: "center" ,width:100}}>
              <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
                color="#FFB4AA"
                uncheckedColor="#FFB4AA"
              />
              <Text style={{ color: "#FFB4AA" }}>Published</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" ,width:100}}>
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
                color="#FFB4AA"
                uncheckedColor="#FFB4AA"
              />
              <Text style={{ color: "#FFB4AA" }}>Unpublished</Text>
            </View>
          </View>
          <View style={{alignItems:'center'}}>
            <Button title="Update" onPress={handleBack}/>
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
  textTitle: {
    color: "#142144",
    fontWeight: "700",
  },
});

export default EditPostScreen;
