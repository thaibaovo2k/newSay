import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

type Props = {
  title: string;
  data: any;
};

const Categories = ({ title,data }: Props) => {
  const color = ["#EAB1B0","#F97B5F","#142144","#EAB1B0","#EAB1B0","#EAB1B0"]
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={{ width: windowWidth, paddingLeft: 24, paddingRight: 24 ,marginBottom:32}}>
      <Text style={{ fontSize: 24, fontWeight: "900", marginBottom: 16 }}>
        {title}
      </Text>
      <View style={{
        backgroundColor:'#FFE2D9',
        // padding:0,
        paddingBottom:8,
        paddingTop:8,
        flexDirection:'row',
        width:'100%',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:20,
        borderColor:'#FFA7A6',
        borderWidth:3
      }}>
        {data?.map((item, index) => (
          <View key={index} style={{width:'32%',marginBottom:32}}>
            <Text style={{textAlign:'center',fontSize:14 ,fontWeight:'900',color:color[index]}}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Categories;
