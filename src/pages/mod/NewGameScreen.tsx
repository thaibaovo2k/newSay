import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CheckBox from "expo-checkbox";

import { wordData } from "../../api/data";
import Header from "../../components/header/Header";
import HoriCategory from "../../components/horiCategory/HoriCategory";
import MenuSearch from "../../components/menuSearch/menuSearch";
import { useNavigation, useRoute } from "@react-navigation/native";
import ResultSearch from "../../components/resultSearch/ResultSearch";
import { RadioButton } from "react-native-paper";
import Button from "../../components/button/Button";

type Props = {};

const NewGameScreen = (props: Props) => {
  const windowWidth = Dimensions.get("window").width;
  const [showSearch, setShowSearch] = useState(true);
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState("first");
  const [checked1, setChecked1] = React.useState("first");
  const [checked2, setChecked2] = React.useState("first");
  const [checkboxes, setCheckboxes] = useState([
    { label: "M12", checked: false },
    { label: "E3", checked: false },
    { label: "M13", checked: false },
    { label: "E4", checked: false },
    { label: "M15", checked: false },
    { label: "E5", checked: false },
    { label: "M16", checked: false },
    { label: "E6", checked: false },
  ]);
  const [checkboxes1, setCheckboxes1] = useState([
    { label: "Post 01 I M13 I 20.08.2023 I Published", checked: false },
    { label: "Post 01 I M13 I 20.08.2023 I Published", checked: false },
    { label: "Post 01 I M13 I 20.08.2023 I Published", checked: false },
    { label: "Post 01 I M13 I 20.08.2023 I Published", checked: false },
  ]);
  const handlePressSearch = () => {
    setShowSearch(false);
  };
  const handleBack = () => {
    navigation.navigate("MiniGameScreenMod");
  };
  const toggleCheckbox = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
    setCheckboxes(updatedCheckboxes);
  };
  const toggleCheckbox1 = (index) => {
    const updatedCheckboxes = [...checkboxes1];
    updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
    setCheckboxes1(updatedCheckboxes);
  };
  const handleToNewPage = () => {
    navigation.navigate("SystemDetails2");
  };
  const handleCreate = () => {
    navigation.navigate("MiniGameScreenMod");
  };
  return (
    <ScrollView>
      <View
        style={{ backgroundColor: "#142144", width: "100%", height: "auto" }}
      >
        <Header mode="dark" type="back" onBack={handleBack} title="New game" searchBtn="hide"/>
        <View style={{ margin: 8, padding: 8, gap: 16, paddingTop: 16 }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 14,
              padding: 4,
              paddingLeft: 16,
              borderColor: "#8B8681B0",
              backgroundColor: "#FFF",
            }}
            placeholder="Name course ( only 20 character )"
          />
          <View
            style={{
              backgroundColor: "#FFF",
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "#8B8681B0",
            }}
          >
            <View style={{ width: "auto", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: 100,
                }}
              >
                <RadioButton
                  value="first"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => setChecked("first")}
                  color="#F97B5F"
                  uncheckedColor="#F97B5F"
                />
                <Text style={{ color: "#F97B5F" }}>Select all</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: 100,
                }}
              >
                <RadioButton
                  value="second"
                  status={checked === "second" ? "checked" : "unchecked"}
                  onPress={() => setChecked("second")}
                  color="#F97B5F"
                  uncheckedColor="#F97B5F"
                />
                <Text style={{ color: "#F97B5F" }}>Deselect all</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: 100,
                }}
              >
                <RadioButton
                  value="third"
                  status={checked === "third" ? "checked" : "unchecked"}
                  onPress={() => setChecked("third")}
                  color="#F97B5F"
                  uncheckedColor="#F97B5F"
                />
                <Text style={{ color: "#F97B5F" }}>World</Text>
              </View>
            </View>
            
            <View style={{ padding: 16 }}>
              <Text
                style={{ fontSize: 18, fontWeight: "700", marginBottom: 16 }}
              >
                Level
              </Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
                {checkboxes?.map((checkbox, index) => (
                  <View
                    key={index}
                    style={{ width: "40%", flexDirection: "row", gap: 4 }}
                  >
                    <CheckBox
                      value={checkbox.checked}
                      onValueChange={() => toggleCheckbox(index)}
                      style={styles.checkbox}
                      color={"#FFB4AA"}
                    />
                    <Text style={{ color: "#8B8681" }}>{checkbox.label}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={{marginLeft:16,marginBottom:16}}>
                <Button title="Filter Post"/>
            </View>
            <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 14,
              padding: 4,
              paddingLeft: 16,
              borderColor: "#8B8681B0",
              backgroundColor: "#FFF",
              margin:16
            }}
            placeholder="Search by name"
          />
          <View style={{ padding: 16 ,paddingTop:0}}>
              <View
                style={{ flexDirection: "column", flexWrap: "wrap", gap: 12 }}
              >
                {checkboxes1?.map((checkbox, index) => (
                  <View key={index} style={{ flexDirection: "row", gap: 4 }}>
                    <CheckBox
                      value={checkbox.checked}
                      onValueChange={() => toggleCheckbox1(index)}
                      style={styles.checkbox}
                      color={"#FFB4AA"}
                    />
                    <Text style={{ color: "#8B8681" }}>{checkbox.label}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={{alignItems:'center'}}>
            <Button title="Load more" color="#FFB4AA"/>
            </View>
            <View style={{ padding: 16 }}>
              <Text
                style={{ fontSize: 18, fontWeight: "700", marginBottom: 16 }}
              >
                Status
              </Text>
              <View style={{ width: "auto" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RadioButton
                    value="first"
                    status={checked1 === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked1("first")}
                    color="#F97B5F"
                    uncheckedColor="#F97B5F"
                  />
                  <Text style={{ color: "#F97B5F" }}>Published</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RadioButton
                    value="second"
                    status={checked1 === "second" ? "checked" : "unchecked"}
                    onPress={() => setChecked1("second")}
                    color="#F97B5F"
                    uncheckedColor="#F97B5F"
                  />
                  <Text style={{ color: "#F97B5F" }}>Unphulished</Text>
                </View>
              </View>
            </View>

            
            <View style={{alignItems:'center',marginTop:16,marginBottom:32}}>
                <Button title="Create" onPress={handleCreate}/>
            </View>
          </View>
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
  text_title: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "700",
  },
});

export default NewGameScreen;
