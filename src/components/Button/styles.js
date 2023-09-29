import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue.level3,
    borderRadius: 6,
    padding: 10,
    height: 40,
  },
  text: {
    color: colors.white,
    fontFamily: "Mulish",
    fontWeight: "bold",
  },
});
