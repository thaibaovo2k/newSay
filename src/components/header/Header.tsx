import React, { FC, ReactElement, useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Dropdown from "../dropdown/DropDown";
import { useRecoilValue } from "recoil";
import { modeState } from "../../managerState/modeState";
interface Props {
  label: string;
  onPressSearch: () => void;
  mode: string;
  type: string;
  onBack: () => void;
  title: string;
  searchBtn: 'hide';
}
const Header: FC<Props> = ({
  label,
  mode,
  onPressSearch,
  type,
  onBack,
  title,
  searchBtn
}) => {
  const [selectedValue, setSelectedValue] = useState("Option 1");
  const data = [
    // { label: "World", value: "0" },
    // { label: "E1", value: "1" },
    // { label: "E2", value: "2" },
    { label: "E3", value: "3" },
    { label: "E4", value: "4" },
    { label: "E5", value: "5" },
  ];
  const route = useRoute();
  const navigation = useNavigation();
  const [selected, setSelected] = useState(undefined);
  const modeUser = useRecoilValue(modeState)
  const handlePressSearch = () => {
    if (route.name !== "SearchScreen") {
      navigation.navigate("SearchScreen");
    }
    onPressSearch && onPressSearch();
  };
  const handleBack = () => {
    onBack && onBack();
  };
  return (
    <View style={mode == "dark" ? styles.headerDark : styles.header}>
      <Text style={mode == 'dark' ? styles.header_titleDark : styles.header_title}>{title ? title : "DAILY NEWS"}</Text>
      <View style={styles.group_btn}>
        <TouchableOpacity style={styles.group_btn_icon1} onPress={handleBack}>
          {type == "back" ? (
            <Image
              source={require("../../assets/images/backIcon.png")}
              style={styles.group_btn_image}
            />
          ) : (
            <Image
              source={require("../../assets/images/imageIcon.png")}
              style={styles.group_btn_image}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePressSearch}>
          {searchBtn == 'hide' ? '' :<Image
            source={require("../../assets/images/searchIcon.png")}
            style={styles.group_btn_image}
          />}
        </TouchableOpacity>
        <View style={{ width: "auto" }}>
          {
            modeUser == 'student' ?
            
            <Dropdown
             label="World"
             data={data}
             onSelect={setSelected}
             mode={mode}
           />
            :
            <Image source={require('../../assets/images/modAvatar.png')}
            resizeMode="contain" style={{width:32,height:32}}/>

          }
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
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 16,
  },
  headerDark: {
    color: "#FFF",
    fontWeight: "900",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 32,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 16,
    backgroundColor: "#142144",
  },
  header_title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#142144",
    marginBottom: 16,
  },
  header_titleDark: {
    fontSize: 32,
    fontWeight: "900",
    color: "#FFFFFF",
    marginBottom: 16,
  },
  group_btn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
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
