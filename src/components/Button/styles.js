import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue.level2,
    borderRadius: 6,
    borderColor: colors.gray,
    borderWidth: 1,
    padding: 10,
    height: 40,
  },
  text: {
    color: colors.white,
  },
});
