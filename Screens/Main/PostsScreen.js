import { ScrollView, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { User, Post } from "../../components";

const PostsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.listContainer}>
        <User />
        <Post />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "center",
    width: "100%",
    borderTopWidth: 1,
    borderColor: "#BDBDBD",
  },

  listContainer: {
    flex: 1,
  },
});

export default PostsScreen;
