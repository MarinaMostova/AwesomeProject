import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import ProfilePost from "../../components/ProfilePost";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/photobg.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.userContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Login")}
          >
            <Icon
              name="log-out"
              color="#BDBDBD"
              size={24}
              style={styles.icon}
            />
          </TouchableOpacity>
          <View style={styles.avatar}>
            <Image
              // source={require("../../assets/photobg.jpg")}
              style={styles.image}
            />
          </View>

          <TouchableOpacity activeOpacity={0.8}>
            <Icon
              name="x-circle"
              color="#BDBDBD"
              size={25}
              style={styles.iconUser}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Natali Romanova</Text>
          <ScrollView>
            <ProfilePost />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
    alignItems: "center",
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-end",
  },

  keyboardView: {
    flex: 1,
  },

  userContainer: {
    position: "relative",
    flex: 0.85,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 16,
    alignItems: "center",
    width: "100%",
  },

  avatar: {
    position: "absolute",
    top: -60,
    left: 128,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "rgba(246, 246, 246, 1)",
  },
  iconUser: {
    position: "absolute",
    top: 22,
    left: 38,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },

  icon: {
    position: "absolute",
    top: 22,
    left: 150,
    zIndex: 1,
  },

  text: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Appetite",
    marginTop: 92,
    marginBottom: 32,
  },

  listContainer: {
    flex: 1,
  },
});

export default ProfileScreen;
