import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 15,
    height: 120,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.black,
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  textContainer: {
    width: "60%",
    alignItems: 'flex-end',
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.black,
  },
  text: {
    paddingRight: 10,
    paddingVertical: 5,
    color: colors.black,
    textTransform: "capitalize",
    fontFamily: 'Mulish',
    fontWeight: 'bold'
  },
});
