import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
type Props = {
  style: any;
  title: string;
  color: string;
  onPress: () => void;
  width: number;
};

const Button = ({ title, color, onPress, width }: Props) => {
  const handlePress = () => {
    onPress && onPress();
  };
  return (
    <View style={{ alignItems: "flex-start", width: "auto" }}>
      <TouchableOpacity onPress={handlePress}>
        <Text
          style={{
            backgroundColor: color || "#142144",
            padding: 8,
            paddingLeft: 24,
            paddingRight: 24,
            borderRadius: 6,
            color: "#FFF",
            fontWeight: "700",
            width: width,
            textAlign:'center'
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
