import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.blue.level3,
    height: 40,
    paddingHorizontal: 10,
  },
  searchBoxContainer: {},
  leftHeader: {
    flexDirection: "row",
    gap: 10,
  },
});
