import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import { PostsScreen, CreatePostsScreen, ProfileScreen } from "../Main";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Публікації"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarStyle: { paddingTop: 15, height: 90, justifyContent: "center" },
      }}
    >
      <Tab.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          tabBarShowLabel: false,
          headerTitleStyle: { paddingBottom: 5, fontFamily: "Appetite" },
          tabBarIcon: ({ color, size }) => (
            <Icon name="grid" color={color} size={size} />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={styles.logoutIcon}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Login")}
            >
              <Icon name="log-out" size={24} color="gray" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Cтворити публікацію"
        component={CreatePostsScreen}
        options={{
          headerTitleStyle: { paddingBottom: 5, fontFamily: "Appetite" },
          tabBarShowLabel: false,
          tabBarStyle: { display: "none" },
          headerLeft: () => (
            <TouchableOpacity
              style={styles.icon}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Публікації")}
            >
              <Icon name="arrow-left" size={24} color="gray" />
            </TouchableOpacity>
          ),

          tabBarButton: ({ color, size }) => (
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Cтворити публікацію")}
            >
              <Icon name="plus" color={"#fff"} size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 0.1,
    flexDirection: "row",
    borderColor: "#BDBDBD",
    borderTopWidth: 1,
    paddingTop: 10,
    justifyContent: "center",
  },
  logoutIcon: {
    marginRight: 10,
  },
  icon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#FF6C00",
    marginLeft: 35,
    marginRight: 35,
  },
});

export default HomeScreen;
