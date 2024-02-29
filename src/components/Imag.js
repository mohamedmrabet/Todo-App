import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'

const Imag = () => {
  return (
    <View style={{alignItems:"center"}}>
      <Image source={require("../../assets/1.png")}
      style={{height:200, width : 300}} />
      <Text>Start adding Your Task </Text>
    </View>
  )
}

export default Imag

const styles = StyleSheet.create({})