import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingBottom: 7
  },
  textContainer: {
    flex: 4,
    justifyContent: "center",
    color: colors.white,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.gray,
    height: '100%'
  },
  text: {
    color: colors.white,
  },
  icon: {
    flex: 0.5,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: colors.blue.level3,
    borderRadius: 6,
    borderColor: colors.gray,
    borderWidth: 1,
    height: 40,
  },
});
