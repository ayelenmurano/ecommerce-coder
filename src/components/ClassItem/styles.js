import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 15,
    height: 50,
  },
  textContainer: {
    flex: 4,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    color: colors.white,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray,
    backgroundColor: colors.blue.level3,
    height: "100%",
  },
  text: {
    color: colors.white,
    textTransform: "capitalize",
  },
  icon: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue.level3,
    borderRadius: 6,
    borderColor: colors.gray,
    borderWidth: 1,
    height: 40,
  },
});
