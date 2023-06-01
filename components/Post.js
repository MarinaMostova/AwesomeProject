import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Feather";

const Post = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/bgPhoto.png")}
        style={styles.image}
      />
      <Text style={styles.postName}>Ліс</Text>
      <View style={styles.postDescription}>
        <TouchableOpacity
          style={styles.comment}
          onPress={() => navigation.navigate("Коментарі")}
        >
          <Icon
            name="message-circle"
            size={26}
            color="#BDBDBD"
            style={styles.icon}
          />
          <Text style={styles.commentText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.city}
          onPress={() => navigation.navigate("Мапа")}
        >
          <Icon name="map-pin" size={24} color="#BDBDBD" style={styles.icon} />
          <Text style={styles.cityText}>Ivano-Frankivs'k Region, Ukraine</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 20,
    marginBottom: 5,
  },

  image: {
    width: 350,
    height: 240,
    borderRadius: 8,
    marginBottom: 10,
  },

  postName: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "Appetite",
    marginBottom: 8,
  },

  postDescription: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginRight: 5,
    transform: [{ scaleX: -1 }],
  },

  comment: {
    flexDirection: "row",
    marginRight: 25,
    alignItems: "center",
  },

  commentText: {
    fontSize: 18,
    fontFamily: "Appetite",
    color: "#BDBDBD",
  },

  city: {
    flexDirection: "row",
    alignItems: "center",
  },

  cityText: {
    color: "#212121",
    fontSize: 14,
    fontFamily: "Appetite",
  },
});

export default Post;
