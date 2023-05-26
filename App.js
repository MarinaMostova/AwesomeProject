import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
// import LoginScreen from "./Screens/Auth/LoginScreen";
// import PostsScreen from "./Screens/PostsScreen.jsx";

export default function App() {
  const [fontsLoaded] = useFonts({
    Appetite: require("./assets/fonts/appetite.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <RegistrationScreen />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontFamily: "Appetite" },
});
