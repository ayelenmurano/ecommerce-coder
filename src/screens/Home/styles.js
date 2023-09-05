import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 10,
    rowGap: 20,
    flexDirection:'column',
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },
  listContainer: {
    flex: 1,
    flexDirection:'column',
    paddingVertical: 10,
  }
});
