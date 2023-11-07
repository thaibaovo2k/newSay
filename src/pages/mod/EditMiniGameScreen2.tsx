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

const EditMiniGameScreen2 = (props: Props) => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const [checked, setChecked] = React.useState("first");

  const handleBack = () => {
    navigation.navigate("EditMiniGameScreen");
  };
  const handleToNextScreen = () => {
    navigation.navigate("EditMiniGameScreen3");
  };
  const handlePressSetting = (value: any) => {
    if (value == "edit") {
      navigation.navigate("NewGameScreen");
    }
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
          borderRadius: 10,
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

        <View>
          
          <View style={{ marginLeft: 16 }}>
            <Text style={styles.text}>Background</Text>
          </View>
          <Image
            source={require("../../assets/images/imageMiniGame.png")}
            resizeMode="contain"
            style={{ width: windowWidth - 32, height: windowWidth - 32 }}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button title="Generate" color="#FFB4AA" width={110} />
          <Button title="Prompt" color="#FFB4AA" width={110} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button title="Library" color="#FFB4AA" width={110} />
          <Button title="Upload" color="#FFB4AA" width={110} />
        </View>
        <View style={{ alignItems: "center", marginTop: 24, marginBottom: 64 }}>
          <Button title="Next" color="#FFB4AA" width={110} onPress={handleToNextScreen}/>
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

export default EditMiniGameScreen2;
