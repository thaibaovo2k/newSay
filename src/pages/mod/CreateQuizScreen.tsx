import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
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
const listColor = ['#CDDBFF','#FFFBF5','#FFBBBB','#FEEDE3']
const CreateQuizScreen = (props: Props) => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const [checked, setChecked] = React.useState("first");
  const [checked2, setChecked2] = React.useState("first");
  const [showAnswer, setShowAnswer] = useState(false);
  const handleBack = () => {
    navigation.navigate("SystemDetails2");
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
    if(showAnswer == false) {
        setShowAnswer(true)
    }
    else {
        navigation.navigate('Home')
    }
  }
  useEffect(()=>{
    setShowAnswer(false)
  },[])
  return (
    <ScrollView style={{ backgroundColor: "#FFF" }}>
      <Header title="Post" type="back" onBack={handleBack} searchBtn="hide" />
      <View style={{ margin: 8, marginLeft: 24, gap: 8, marginBottom: 24 }}>
        <Text style={styles.textTitle}>Post 001 I 20.08.2023</Text>
        <Text style={styles.textTitle}>Style: Story</Text>
        <Text style={styles.textTitle}>Tone: Ghost, Fun</Text>
      </View>
      <View style={{ marginLeft: 24, marginRight: 24 }}>
        <Text
          style={{
            textAlign: "left",
            fontSize: 14,
            fontWeight: "700",
            color: "#FFF",
            backgroundColor: "#FFAEAA",
            padding: 8,
            borderRadius: 10,
            paddingLeft: 16,
          }}
        >
          Question: Contrary to popular belief, Lorem Ipsum is not simply random
        </Text>
      </View>
      <View style={{ marginLeft: 24, marginTop: 8, marginBottom: 24 }}>
        <Button title="Gernerate Question" />
      </View>
      <View style={{ marginLeft: 24 }}>
        <Text style={{ color: "#FFAEAA", fontWeight: "700" }}>Type</Text>
        <View style={{ width: "auto" }}>
          {listType?.map((value, index) => (
            <View
              style={{ flexDirection: "row", alignItems: "center" }}
              key={value + index}
            >
              <RadioButton
                value={value}
                status={checked === value ? "checked" : "unchecked"}
                onPress={() => setChecked(value)}
                color="#BDB6AF"
                uncheckedColor="#BDB6AF"
              />
              <Text style={{ color: "#BDB6AF" }}>{value}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={{ marginLeft: 24, marginTop: 24 }}>
        <Button title="Gernerate Game" />
      </View>
      <View style={{ marginLeft: 24, marginTop: 24 }}>
        <Text style={{ color: "#FFAEAA", fontWeight: "700" }}>Answer</Text>
        <View style={{ width: "auto" }}>
          {showAnswer ? (
            <View style={{flexDirection:"row",alignItems:'center',marginTop:16}}>
              {listType2?.map((value, index) => (
                <View key={value + index} style={{width:'23%',backgroundColor:listColor[index],borderWidth:1,padding:8}}>
                  <Text style={{fontSize:20,fontWeight:'700'}}>{value}</Text>
                </View>
              ))}
            </View>
          ) : (
            listType2?.map((value, index) => (
              <View
                style={{ flexDirection: "row", alignItems: "center" }}
                key={value + index}
              >
                <RadioButton
                  value={value}
                  status={checked2 === value ? "checked" : "unchecked"}
                  onPress={() => setChecked2(value)}
                  color="#BDB6AF"
                  uncheckedColor="#BDB6AF"
                />
                <Text style={{ color: "#BDB6AF" }}>{value}</Text>
              </View>
            ))
          )}
        </View>
      </View>
      <View style={{ margin: 24 }}>
        <Button title="Update" onPress={handleUpdate}/>
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

export default CreateQuizScreen;
