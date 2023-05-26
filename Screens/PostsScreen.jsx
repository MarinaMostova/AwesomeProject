import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import User from "../components/User";
import Post from "../components/Post";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}> Публікації</Text>
        <TouchableOpacity style={styles.iconHeader}>
          <Icon name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.listContainer}>
        <User />
        <Post />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconFooter}>
          <Icon name="grid" size={24} color="rgba(33, 33, 33, 0.8)" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon name="plus" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconFooter}>
          <Icon name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "center",
    width: "100%",
  },

  header: {
    position: "relative",
    flex: 0.15,
    borderColor: "#BDBDBD",
    borderBottomWidth: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontFamily: "Appetite",
    color: "#212121",
    paddingBottom: 11,
  },

  iconHeader: {
    position: "absolute",
    right: 15,
    bottom: 15,
  },

  listContainer: {
    flex: 1,
  },

  footer: {
    flex: 0.1,
    flexDirection: "row",
    borderColor: "#BDBDBD",
    borderTopWidth: 1,
    paddingTop: 10,
    justifyContent: "center",
  },

  iconFooter: {
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

export default PostsScreen;
