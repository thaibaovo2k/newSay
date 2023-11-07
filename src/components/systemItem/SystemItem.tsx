import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import SettingGroupBtn from "../settingGroupBtn/SettingGroupBtn";
type Props = {
  value: any;
  onPress: () => void;
  settingBtn: "show";
  text: "normal" | "disable";
  index: number;
  total: number;
  onPressSetting: () => void;
  openSetting: boolean;
  marginBottom: number;
  listBtn:any;
  bottom:number;
};

const SystemItem = ({
  text,
  value,
  onPress,
  settingBtn,
  index,
  onPressSetting,
  openSetting,
  total,
  marginBottom,
  listBtn,
  bottom
}: Props) => {
  const [showSetting, setShowSetting] = useState(openSetting || false);
  const textColor = {
    normal: "#1A4462",
    disable: "#8B8681",
  };
  const handlePress = () => {
    onPress && onPress();
  };
  const handleOpenSetting = () => {
    setShowSetting(!showSetting);
  };
  const handlePressItem = (value) => {
    onPressSetting && onPressSetting(value)
  }
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <TouchableOpacity onPress={handlePress}>
        <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
          <Image
            source={require("../../assets/images/checkboard.png")}
            resizeMode="contain"
            style={{ width: 24, height: 24 }}
          />
          <Text
            style={{ color: textColor?.[text ? text : "normal"] || '', fontSize: 12 ,flexWrap:'wrap',maxWidth:220}}
          >
            {value}
          </Text>
        </View>
      </TouchableOpacity>
      {settingBtn == "show" && (
        <TouchableOpacity onPress={handleOpenSetting}>
          <View>
            <Image
              source={require("../../assets/images/settingIcon.png")}
              resizeMode="contain"
              style={{ width: 24, height: 24 }}
            />
          </View>
        </TouchableOpacity>
      )}
      {showSetting && (
        <View style={{ position: "absolute", right: 24, top: 12, zIndex: 1 }}>
          <View
            style={{
              borderTopWidth: 2,
              borderTopColor: "#000",
              borderLeftWidth: 2,
              borderLeftColor: "#000",
              width: 24,
              height:
                (total - index) * 32 +
                (marginBottom !== undefined ? marginBottom : 48),
            }}
          ></View>
          <SettingGroupBtn bottom={bottom || -175} 
          listBtn={listBtn}
          onPress={handlePressItem}
          />
        </View>
      )}
    </View>
  );
};

export default SystemItem;
