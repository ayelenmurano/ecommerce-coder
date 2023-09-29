import { Image, Text, View } from "react-native";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import { styles } from "./styles";

export default function Login({ navigation, route }) {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/logo.png")}
      />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Entrar con tu cuenta:</Text>
        <View style={styles.inputsContainer}>
          <Input onChangeText={() => {}} name={"Email"} />
          <Input onChangeText={() => {}} name={"Contraseña"} />
        </View>
        <Button label={"Log in"} />
      </View>
    </View>
    // </SafeAreaView>
  );
}
