import { Dimensions, Platform, StyleSheet } from "react-native";


const { height, width } = Dimensions.get("screen");

export const s = StyleSheet.create({
    headerContainer: {
      width: width,
      marginTop: Platform.OS === "android" ? 20 : 0,
      padding: 5,
      backgroundColor: "#0f3453",
      height: 60,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 10,
    },
    icon: {
      height: 20,
      width: 20,
      tintColor: "white",
    },
    headertitle :{
      color: "white",
      fontSize : 18
    }
  });
  