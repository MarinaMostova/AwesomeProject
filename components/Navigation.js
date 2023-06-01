import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen, LoginScreen } from "../Screens/Auth";
import { HomeScreen, CommentsScreen, MapScreen } from "../Screens/Main";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="Registration"
        options={{ headerShown: false }}
        component={RegistrationScreen}
      />
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Коментарі"
        component={CommentsScreen}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Мапа"
        component={MapScreen}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
