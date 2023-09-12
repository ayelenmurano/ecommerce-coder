import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    // rowGap: 10
  },
  titleContainer: {},
  title: {},
  list: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingVertical: 10
  },
  text: {},
  selectedCategory: {
    flexDirection: "row",
    gap: 5,
    alignItems: 'center',
    height: 30,
    backgroundColor: colors.blue.level2,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,

  },
});
