import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#000",
    gap: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#9b9b9b",
  },
  text: {
    flex: 4,
    color: "#000",
  },
  icon: {
    flex: 1,
    backgroundColor: "#A8DADC",
    borderRadius: 6,
    borderColor: "#9b9b9b",
    borderWidth: 1,
    padding: 10,
    height: 40,
  },
});
