import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingTop: 20,
    paddingHorizontal: 60,
    rowGap: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  image: {
    width: 200,
    height: 200,
  },
  formContainer: {
    width: "100%",
    gap: 20
  },
  title: {
    fontFamily: "Mulish",
    fontWeight: "bold",
    fontSize: 18,
    // paddingBottom: 10
  },
  inputsContainer: {
    gap: 10
  }
});
