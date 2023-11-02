import React from 'react'
import { View,Image } from "react-native";

type Props = {}

const ButtonAdd = (props: Props) => {
  return (
    <View style={{width:50,height:50,padding:8,backgroundColor:'#D6DFFC',borderRadius:10}}>
        <Image source={require('../../assets/images/buttonAdd.png')}
        style={{ height: "100%", width: "100%" }}
        resizeMode="contain"/>
    </View>
  )
}

export default ButtonAdd