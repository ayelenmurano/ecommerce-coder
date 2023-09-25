import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    rowGap: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: 'center'
    // backgroundColor: "red",
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: "cover",
    borderRadius: 150,
  },
  title: {
    textAlign: "center",
    fontFamily: "Mulish",
    fontSize: 20,
    fontWeight: 'bold'
  },
});
