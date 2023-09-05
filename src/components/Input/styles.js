import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  inputContainer: {
    flex: 4,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: colors.gray,
    borderWidth: 1,
    height: 40,
    borderRadius: 6,
  }
});
