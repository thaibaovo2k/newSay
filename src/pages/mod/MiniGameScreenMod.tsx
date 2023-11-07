import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Header from "../../components/header/Header";
import SystemItem from "../../components/systemItem/SystemItem";
import Button from "../../components/button/Button";

type Props = {};
const modList1 = [
  "Post 001  I 20.08.2023",
  "Post 001  I 20.08.2023",
  "Post 001  I 20.08.2023",
  "Post 001  I 20.08.2023",
];

const MiniGameScreenMod = (props: Props) => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const handleBack = () => {
    navigation.navigate("Home");
  };
  const handleToNewPost = () => {
    navigation.navigate("NewGameScreen");
  };
  const handlePressSetting = (value: any) => {
    if (value == "edit") {
      navigation.navigate("EditMiniGameScreen");
    }
  };
  return (
    <ScrollView style={{ backgroundColor: "#FFFBF5" }}>
      <Header title="Mini game" type="back" onBack={handleBack} searchBtn="hide" />
      <View style={{alignItems:'flex-end',margin:8,marginRight:24}}>
      <Button title="New Game" onPress={handleToNewPost}/>
      </View>
        
      <Text
        style={{ 
          textAlign: "center",
          fontSize: 18,
          fontWeight: "700",
          color: "#FFB4AA",
        }}
      >
        Title I Create date I Status
      </Text>
      <View
        style={{
          marginLeft: 16,
          marginRight: 16,
          marginBottom: 220,
          padding: 16,
          borderRadius: 20,
          // backgroundColor: "#D6DFFC",
        }}
      >
        <View style={{ gap: 8, marginBottom: 0 }}>
          {modList1?.map((value, index) => (
            <SystemItem
              key={value + index}
              total={modList1?.length}
              index={index}
              value={value}
              text="disable"
              settingBtn="show"
              marginBottom={0}
              bottom={-76}
              listBtn={["edit", "deleteIcon"]}
              onPressSetting={handlePressSetting}
            />
          ))}
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

export default MiniGameScreenMod;
