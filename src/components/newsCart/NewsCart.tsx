import React, {useState, useEffect} from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions } from "react-native";
import { TouchableRipple } from "react-native-paper";

type Props = {
  active: boolean;
  data: any;
  btn:boolean;
  title: string;
};

const NewsCart = ({ data,btn,title }: Props) => {

    const [status, setStatus] = useState(data?.status)
    const [itemWidth, setItemWidth] = useState(Dimensions.get('window').width);

    const handleClickFlag = () => {
        setStatus(!status)
    }
    useEffect(() => {

    }, [status])
    
  return (
    <View
      style={{ height: 250, width: itemWidth, alignItems: "center", display: "flex" ,gap:0,paddingLeft:8,marginBottom:32,paddingRight:8}}
    >
       <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',paddingLeft:8,marginBottom:8}}>
            <Text
                style={{fontSize:24,fontWeight:'900'}}
            >{title}</Text>
            <Text style={{fontSize:18,alignSelf:'flex-end',fontWeight:'900',color:'#FFB4AA',paddingRight:16}}>View all</Text>
        </View>
      <Image
        source={data?.source}
        style={{ width: "100%",height:200}}
        resizeMode="stretch"
      />
      <View
        style={{
          width: itemWidth,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          height:24,
          paddingLeft:16,
          paddingRight:8
        }}
      >
        <View style={{flex:1,alignItems:'center'}}>
          <Text style={{ fontSize: 18 }}>{data?.name}</Text>
          <Text style={{fontSize:12}}>{data?.date}</Text>
        </View>
        {
            btn && <TouchableOpacity onPress={handleClickFlag}>
            {status ? (
              <Image
                source={require("../../assets/images/flagActive.png")}
                style={{ height: 32, width: 32 }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require("../../assets/images/flag.png")}
                style={{ height: 32, width: 32 }}
                resizeMode="contain"
              />
            )}
            </TouchableOpacity>
        }
      </View>
    </View>
  );
};
export default NewsCart;
