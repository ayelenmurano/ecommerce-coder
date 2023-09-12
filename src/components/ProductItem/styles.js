import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 15,
    // height: 50,
  },
  itemContainer: {
    flex: 4,
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    color: colors.white,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.blue.level3,
    // backgroundColor: colors.blue.level3,
    height: "100%",
  },
  leftBox: {
    flex: 3,
    justifyContent: "space-between",
  },
  description: {},
  name: {
    color: colors.black,
    textTransform: "capitalize",
  },
  brand: {
    color: colors.black,
    textTransform: "capitalize",
  },
  price: {
    color: colors.black,
    textTransform: "capitalize",
  },
  containerImage: {
    flex: 2,
    alignItems: "flex-end",
  },
  image: {
    height: 70,
    width: 70,
    resizeMode: "stretch",
  },
});
