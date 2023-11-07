import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Header from "../../components/header/Header";
import SystemItem from "../../components/systemItem/SystemItem";
import Button from "../../components/button/Button";
import { RadioButton } from "react-native-paper";

type Props = {};
const modList1 = [
  "Post 001  I 20.08.2023",
  "Post 001  I 20.08.2023",
  "Post 001  I 20.08.2023",
  "Post 001  I 20.08.2023",
];

const EditMiniGameScreen = (props: Props) => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const [checked, setChecked] = React.useState("first");

  const handleBack = () => {
    navigation.navigate("MiniGameScreenMod");
  };
  const handleToNewPost = () => {
    navigation.navigate("EditMiniGameScreen2");
  };

  return (
    <ScrollView style={{ backgroundColor: "#FFFBF5" }}>
      <Header
        title="New game"
        type="back"
        onBack={handleBack}
        searchBtn="hide"
      />
      <View
        style={{
          backgroundColor: "#142144",
          height: "auto",
          padding: 8,
          margin: 8,
          gap: 16,
          borderRadius:10
        }}
      >
        <Text style={styles.text}>1/2</Text>
        <View style={{ height: 20, backgroundColor: "#FFFBF5" }}>
          <View
            style={{ height: "100%", width: "50%", backgroundColor: "#FFBBB1" }}
          ></View>
        </View>
        <View style={{ marginLeft: 16, gap: 16 }}>
          <Text style={styles.text}>Scense 001</Text>
          <Text style={styles.text}>Level: M12, M13, M15, E3, E4, E5</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.text}>Count: 2</Text>
        </View>
        <View
          style={{
            backgroundColor: "#FEEDE3",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 24,
            minHeight: 200,
            alignItems: "flex-start",
            borderRadius: 30,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Image
              source={require("../../assets/images/timeCountIcon1.png")}
              resizeMode="contain"
              style={{ width: 32, height: 32 }}
            />
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Item 1</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Image
              source={require("../../assets/images/timeCountIcon2.png")}
              resizeMode="contain"
              style={{ width: 32, height: 32 }}
            />
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Item 2</Text>
          </View>
        </View>
        <View style={{ width: "auto", marginTop: 16 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
              color="#FFFBF5"
              uncheckedColor="#FFFBF5"
            />
            <Text style={{ color: "#FFFBF5" }}>Select all</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
              color="#FFFBF5"
              uncheckedColor="#FFFBF5"
            />
            <Text style={{ color: "#FFFBF5" }}>Deselect all</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#ECECF4",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: 24,
            minHeight: 200,
            alignItems: "flex-start",
            borderRadius: 30,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Image
              source={require("../../assets/images/timeCountIcon3.png")}
              resizeMode="contain"
              style={{ width: 32, height: 32 }}
            />
            <Text style={{ fontSize: 18, fontWeight: "600",color:'#F97B5F' }}>Item 1</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Image
              source={require("../../assets/images/timeCountIcon4.png")}
              resizeMode="contain"
              style={{ width: 32, height: 32 }}
            />
            <Text style={{ fontSize: 18, fontWeight: "600" ,color:'#F97B5F'}}>Item 2</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Image
              source={require("../../assets/images/chartIcon.png")}
              resizeMode="contain"
              style={{ width: 32, height: 32 }}
            />
            <Text style={{ fontSize: 18, fontWeight: "600",color:'#F97B5F' }}>Item 2</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button title="Generate" color="#FFB4AA" width={110} />
          <Button title="Prompt" color="#FFB4AA" width={110} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button title="Library" color="#FFB4AA" width={110} />
          <Button title="Upload" color="#FFB4AA" width={110} />
        </View>
        <View style={{alignItems:'center',marginTop:24,marginBottom:64}}>
          <Button title="Next" color="#FFB4AA" width={110} onPress={handleToNewPost}/>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "#FFFBF5",
    // letterSpacing: 1,
    fontWeight: "700",
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

export default EditMiniGameScreen;
