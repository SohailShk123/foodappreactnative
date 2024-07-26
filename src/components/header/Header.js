import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {s} from './headerCss'

const { height, width } = Dimensions.get("screen");
const Header = ({ lefticon, righticon ,title,onClickLeftIcon}) => {
  return (
    <View style={s.headerContainer}>
      <TouchableOpacity onPress={onClickLeftIcon}>
        <Image style={s.icon} source={lefticon} />
      </TouchableOpacity>
      <Text style={s.headertitle}>{title}</Text>
      <TouchableOpacity>
        <Image style={s.icon} source={righticon} />
      </TouchableOpacity>

    </View>
  );
};

export default Header;
