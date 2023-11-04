import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {}

const Rating = (props: Props) => {
  return (
    <View style={{display:'flex',flexDirection:'row',gap:2}}>
        <Image resizeMode='contain' style={styles.img} source={require('../../assets/images/starActive.png')}/>
        <Image resizeMode='contain' style={styles.img} source={require('../../assets/images/starActive.png')}/>
        <Image resizeMode='contain' style={styles.img} source={require('../../assets/images/starActive.png')}/>
        <Image resizeMode='contain' style={styles.img} source={require('../../assets/images/starActive.png')}/>
        <Image resizeMode='contain' style={styles.img} source={require('../../assets/images/starNone.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    img: {
        width:15,height:15
    }
})

export default Rating