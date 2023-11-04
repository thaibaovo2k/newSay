import React from "react";
import { StyleSheet, View, Text,Dimensions } from "react-native";
import Cart from "../cart/Cart";
import HoriCart from "../horiCart/HoriCart";

type Props = {
  title: string;
  data: any;
  btn:boolean;
};

const HoriCategory = ({ title, data,btn }: Props) => {
    const windowWidth = Dimensions.get('window').width;

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height:32,
          marginRight: 32,
          marginLeft:24,
          marginBottom: 8,
        //   width:windowWidth
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "900" }}>{title}</Text>
        {(!title) ? (
          <Text></Text>
        ) : (
          <Text
            style={{
              fontSize: 18,
              alignSelf: "flex-end",
              fontWeight: "900",
              color: "#FFB4AA",
            }}
          >
            View all
          </Text>
        )}
      </View>
      <View style={{ display: "flex", flexDirection: "column",gap:0}}>
        <HoriCart btn={btn} data={data?.[0]} />
        <HoriCart btn={btn} data={data?.[1]} />
      </View>
    </View>
  );
};

export default HoriCategory;
