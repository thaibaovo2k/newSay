import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
type Props = {
  value: any;
  onPress: () => void;
  settingBtn: "show";
  text: "normal" | "disable";
};

const SystemItem = ({ text, value, onPress, settingBtn }: Props) => {
  const handlePress = () => {
    onPress && onPress();
  };
  const textColor = {
    normal: "#1A4462",
    disable: "#8B8681",
  };
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <TouchableOpacity onPress={handlePress}>
        <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
          <Image
            source={require("../../assets/images/checkboard.png")}
            resizeMode="contain"
            style={{ width: 24, height: 24 }}
          />
          <Text
            style={{ color: textColor?.[text ? text : "normal"], fontSize: 16 }}
          >
            {value}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View >
        <Image source={require('../../assets/images/settingIcon.png')} resizeMode="contain"
        style={{width:32,height:32}}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SystemItem;
