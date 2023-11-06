import React, {useState, useEffect} from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity,Dimensions } from "react-native";
import { TouchableRipple } from "react-native-paper";

type Props = {
  active: boolean;
  data: any;
  btn:boolean;
};

const Cart = ({ active,data,btn }: Props) => {
    const windowWidth = Dimensions.get('window').width;
    const [status, setStatus] = useState(data?.status)
const itemWidth = windowWidth/2
    const handleClickFlag = () => {
        setStatus(!status)
    }
    useEffect(() => {

    }, [status])
    
  return (
    <View
      style={{ height: 150, width: itemWidth - 16, alignItems: "center", display: "flex" ,gap:0}}
    >
      <Image
        source={data?.source}
        style={{ height: "95%", width: "100%" }}
        resizeMode="stretch"
      />
      <View
        style={{
          width: itemWidth - 12,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          height:24,
          paddingLeft:16,
          paddingRight:8
        }}
      >
        <View style={{flex:1}}>
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
export default Cart;
