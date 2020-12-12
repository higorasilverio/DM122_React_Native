import { StyleSheet, Dimensions } from "react-native";
import { colors, measures, fonts } from "../../../styles";

const { width } = Dimensions.get("window");

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: measures.padding,
    backgroundColor: colors.white,
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: "contain",
  },
  description: {
    fontSize: fonts.bigger,
    color: colors.dark,
  },
  items: {
    fontSize: fonts.big,
    fontWeight: "bold",
    color: colors.base,
  },
  touchable: {
    justifyContent: "space-between",
  },
});

export default style;
