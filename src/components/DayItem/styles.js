import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const textProperties = {
  fontFamily: "JosefinSans",
  color: colors.black,
  textTransform: "capitalize",
};
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 15,
    height: 120,
  },
  textContainer: {
    flex: 4,
    width: "90%",
    justifyContent: "center",
    color: colors.white,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.black,
    backgroundColor: colors.white,
    height: "100%",
  },
  category: {
    ...textProperties,
    fontWeight: "bold",
  },
  time: {
    ...textProperties,
    fontWeight: "600",
    lineHeight: 13,
    fontSize: 12,
    paddingBottom: 4,
  },
  places: {
    ...textProperties,
    fontWeight: "bold",
    fontSize: 12,
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
