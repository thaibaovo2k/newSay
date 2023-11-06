import React, {useState, useEffect} from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity,Dimensions } from "react-native";
import { TouchableRipple } from "react-native-paper";

type Props = {
  mode: string;
  data: any;
  btn:boolean;
};

const HoriCart = ({mode,data,btn }: Props) => {
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
      style={{ height: 150, width: itemWidth, display: "flex" ,gap:0,flexDirection:'row',padding:8,paddingRight:12}}
    >
      <Image
        source={data?.source}
        style={{ height: '100%', width: "100%" }}
        resizeMode="contain"
      />
      <View>
      <View
        style={{
          width: itemWidth,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          height:'30%',
        //   paddingLeft:16,
        paddingTop:4,
          paddingRight:8,
          
        }}
      >
        <View style={{flex:1}}>
          <Text style={{ fontSize: 16 ,
              color: `${(mode == 'dark') ? '#FFF' : ''}`
            }}>{data?.name}</Text>
          
          <Text style={{fontSize:12,color: `${(mode == 'dark') ? '#FFF' : ''}`}}>{data?.date}</Text>
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
      <Text style={{height:'70%',width:'25%',fontSize:12,color: `${(mode == 'dark') ? '#FFF' : '#8B8681'}`}}>{data?.description}</Text>
      </View>
    </View>
  );
};
export default HoriCart;
