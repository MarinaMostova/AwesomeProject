import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";
import { Navigation } from "./components";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Appetite: require("./assets/fonts/appetite.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Navigation />

      <Toast />
    </NavigationContainer>
  );
}
