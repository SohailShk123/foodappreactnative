import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {s} from './footerCss'


const Footer = ({setSelected,selected}) => {
  return (
    <View style={s.footerContainer}>
      <TouchableOpacity onPress={()=>setSelected(0)}>
        <Image style={s.icon} source={require('../../images/home.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSelected(1)}>
        <Image style={s.icon} source={require('../../images/search.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSelected(2)}>
        <Image style={s.icon} source={require('../../images/heart.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSelected(3)}>
        <Image style={s.icon} source={require('../../images/noti.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSelected(4)}>
        <Image style={s.icon} source={require('../../images/user.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default Footer
