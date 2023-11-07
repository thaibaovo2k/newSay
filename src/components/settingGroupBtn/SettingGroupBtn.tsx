import React from "react";
import {
    Image,
    TouchableOpacity,
    View
} from "react-native";
type Props = {
  bottom: number;
  listBtn: any;
  onPress: () => void;
};

const SettingGroupBtn = ({ bottom, listBtn, onPress }: Props) => {
  const list = {
    edit: {
      src: require("../../assets/images/editIconBtn.png"),
    },
    create: {
      src: require("../../assets/images/createIconBtn.png"),
    },
    post: {
      src: require("../../assets/images/postIconBtn.png"),
    },
    copy: {
      src: require("../../assets/images/copyIconBtn.png"),
    },
    deleteIcon: {
      src: require("../../assets/images/deleteIconBtn.png"),
    },
  };
  const handlePressItem = (value: any) => {
    onPress(value);
  };
  return (
    <View
      style={{
        backgroundColor: "#142144",
        position: "absolute",
        bottom: bottom,
        left: -12,
        padding: 16,
        zIndex: 2,
        height: "auto",
        paddingTop: 8,
        gap: 8,
        borderRadius: 20,
      }}
    >
      {listBtn?.map((value, index) => (
        <TouchableOpacity
          style={{ width: 24, height: 24 }}
          onPress={() => handlePressItem(value)}
        >
          <Image
            key={index}
            source={list?.[value]?.src}
            resizeMode="contain"
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SettingGroupBtn;
