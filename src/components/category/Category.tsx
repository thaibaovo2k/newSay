import React from "react";
import { StyleSheet, View, Text,Dimensions } from "react-native";
import Cart from "../cart/Cart";

type Props = {
  title: string;
  data: any;
  btn:boolean;
};

const Category = ({ title, data,btn }: Props) => {
    const windowWidth = Dimensions.get("window").width;
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 16,
          marginRight: 24,
          marginBottom: 8,
        //   width:windowWidth
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "900", }}>{title}</Text>
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
      <View style={{ display: "flex", flexDirection: "row" ,marginLeft:1, width:windowWidth,alignItems:'center',justifyContent:'center'}}>
        <Cart btn={btn} data={data?.[0]} />
        <Cart btn={btn} data={data?.[1]} />
      </View>
    </View>
  );
};

export default Category;
