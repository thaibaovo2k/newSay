import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

type Props = {
  title: string;
}

const NotiCart = ({title}: Props) => {
  return (
    <View style={styles.notiCart}>
      <Text style={{textAlign: 'center',backgroundColor:'#FFBBBB',fontSize: 32,fontWeight: '800',color:'#FFF',paddingTop:8}}>{title}</Text>
      <View style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
        <Image source={require('../../assets/images/notiBook.png')}
        style={{height:'75%',width:'75%'}}
        resizeMode='contain'
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    notiCart: {
        backgroundColor:'#F2D6D6',
        width:'100%',
        borderRadius: 40,
        overflow:'hidden'
    }
});

export default NotiCart