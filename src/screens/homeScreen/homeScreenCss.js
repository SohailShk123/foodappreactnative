import { Dimensions, StyleSheet } from "react-native";

export const s = StyleSheet.create({
  home: {
  flex : 1,
  backgroundColor : 'green',
  width : '100vw',
  height : '100%'
  },
  text: {
    color: "black",
    backgroundColor: "red",
  },
  bodyContainer : {
    flex : 1,
  },
  items: {
   width : Dimensions.get('screen').width,
   height : 100,
   marginTop : 10,
   backgroundColor : 'white',
  },
});
