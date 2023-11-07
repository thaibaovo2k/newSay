import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from "react-native";
import CheckBox from "expo-checkbox";

import { wordData } from "../../api/data";
import Header from "../../components/header/Header";
import HoriCategory from "../../components/horiCategory/HoriCategory";
import MenuSearch from "../../components/menuSearch/menuSearch";
import { useNavigation, useRoute } from "@react-navigation/native";
import ResultSearch from "../../components/resultSearch/ResultSearch";
import { RadioButton } from "react-native-paper";

type Props = {};

const NewsPostScreen = (props: Props) => {
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
    { label: "Ghost", checked: false },
    { label: "Fun", checked: false },
    { label: "Hero", checked: false },
    { label: "Princess", checked: false },
  ]);
  const handlePressSearch = () => {
    setShowSearch(false);
  };
  const handleBack = () => {
    navigation.navigate("SystemDetails");
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
    navigation.navigate('SystemDetails2')
  }
  return (
    <ScrollView>
      <View
        style={{ backgroundColor: "#142144", width: "100%", height: "auto" }}
      >
        <Header mode="dark" type="back" onBack={handleBack} title="New Post" searchBtn="hide"/>
        <View style={{ backgroundColor: "#FFFFFF", margin: 8, padding: 8 ,gap:16,borderRadius:20,paddingTop:16}}>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 14,
              padding: 4,
              paddingLeft: 16,
              borderColor: "#8B8681B0",
            }}
            placeholder="Name course ( only 20 character )"
          />
          <View
            style={{
              borderWidth: 1,
              borderRadius: 20,
              padding: 4,
              paddingLeft: 16,
              borderColor: "#8B8681B0",
              minHeight: 150,
            }}
          >
            <TextInput style={{ height: "auto" }} placeholder="Content" />
          </View>
          <View style={{ width: "auto",alignItems:'center' }}>
            <View style={{ flexDirection: "row", alignItems: "center" ,width:100}}>
              <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
                color="#F97B5F"
                uncheckedColor="#F97B5F"
              />
              <Text style={{ color: "#F97B5F" }}>Select all</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" ,width:100}}>
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
                color="#F97B5F"
                uncheckedColor="#F97B5F"
              />
              <Text style={{ color: "#F97B5F" }}>Deselect all</Text>
            </View>
          </View>
          <View style={{padding:16}}>
            <Text style={{fontSize:18,fontWeight:'700',marginBottom:16}}>Level</Text>
            <View style={{flexDirection:'row',flexWrap:'wrap',gap:12}}>
            {checkboxes?.map((checkbox, index) => (
              <View key={index} style={{ width: "40%",flexDirection:'row',gap:4}}>
                <CheckBox
                  value={checkbox.checked}
                  onValueChange={() => toggleCheckbox(index)}
                  style={styles.checkbox}
                  color={'#FFB4AA'}
                />
                <Text style={{color:'#8B8681'}}>{checkbox.label}</Text>
              </View>
            ))}
            </View>
          </View>
          <View style={{padding:16}}>
            <Text style={{fontSize:18,fontWeight:'700',marginBottom:16}} >Style</Text>
            <View style={{ width: "auto" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton
                value="first"
                status={checked1 === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked1("first")}
                color="#F97B5F"
                uncheckedColor="#F97B5F"
              />
              <Text style={{ color: "#F97B5F" }}>Story</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton
                value="second"
                status={checked1 === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked1("second")}
                color="#F97B5F"
                uncheckedColor="#F97B5F"
              />
              <Text style={{ color: "#F97B5F" }}>Realistic</Text>
            </View>
          </View>
          </View>
          <View style={{ alignItems:'center' }}>
            <View style={{ flexDirection: "row", alignItems: "center" ,width:100}}>
              <RadioButton
                value="first"
                status={checked2 === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked2("first")}
                color="#F97B5F"
                uncheckedColor="#F97B5F"
              />
              <Text style={{ color: "#F97B5F" }}>Select all</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",width:100 }}>
              <RadioButton
                value="second"
                status={checked2 === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked2("second")}
                color="#F97B5F"
                uncheckedColor="#F97B5F"
              />
              <Text style={{ color: "#F97B5F" }}>Deselect all</Text>
            </View>
          </View>
          <View style={{padding:16}}>
            <Text style={{fontSize:18,fontWeight:'700',marginBottom:16}}>Tune</Text>
            <View style={{flexDirection:'column',flexWrap:'wrap',gap:12}}>
            {checkboxes1?.map((checkbox, index) => (
              <View key={index} style={{flexDirection:'row',gap:4}}>
                <CheckBox
                  value={checkbox.checked}
                  onValueChange={() => toggleCheckbox1(index)}
                  style={styles.checkbox}
                  color={'#FFB4AA'}
                />
                <Text style={{color:'#8B8681'}}>{checkbox.label}</Text>
              </View>
            ))}
            </View>
          </View>
          <View style={{margin:24}}>
            <TouchableOpacity onPress={handleToNewPage}>
                <Text style={{backgroundColor:'#142144',padding:16,textAlign:'center',color:'#FFF',fontSize:16,fontWeight:'700',borderRadius:10}}>
                Create and generate image
                </Text>
            </TouchableOpacity>
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

export default NewsPostScreen;
