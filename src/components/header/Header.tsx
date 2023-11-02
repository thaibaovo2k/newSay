import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Dropdown from "../dropdown/DropDown";

const Header = (props) => {
  const [selectedValue, setSelectedValue] = useState("Option 1");
  const data = [
    // { label: "World", value: "0" },
    // { label: "E1", value: "1" },
    // { label: "E2", value: "2" },
    { label: "E3", value: "3" },
    { label: "E4", value: "4" },
    { label: "E5", value: "5" },
  ];
  const [selected, setSelected] = useState(undefined);
  return (
    <View style={styles.header}>
      <Text style={styles.header_title}>DAILY NEWS</Text>
      <View style={styles.group_btn}>
        <TouchableOpacity
          onPress={props.onIcon1Press}
          style={styles.group_btn_icon1}
        >
          <Image
            source={require("../../assets/images/imageIcon.png")}
            style={styles.group_btn_image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onIcon2Press}>
          <Image
            source={require("../../assets/images/searchIcon.png")}
            style={styles.group_btn_image}
          />
        </TouchableOpacity>
        <View style={{width: 'auto'}}>
        <Dropdown label="World" data={data} onSelect={setSelected} width={100}/>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    color: "#142144",
    fontWeight: "900",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 32,
    paddingLeft:32,
    paddingRight:32,
    paddingBottom:16
  },
  header_title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#142144",
    marginBottom: 16
  },
  group_btn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  group_btn_icon1: {
    flex: 1,
  },
  group_btn_image: {
    width: 30,
    height: 30,
  },
});

export default Header;
