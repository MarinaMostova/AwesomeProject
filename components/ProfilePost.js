import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const ProfilePost = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/bgPhoto.png")}
        style={styles.image}
      />
      <Text style={styles.postName}>Ліс</Text>
      <View style={styles.postDescription}>
        <View style={styles.box}>
          <TouchableOpacity style={styles.comment}>
            <Icon
              name="message-circle"
              size={26}
              color="#FF6C00"
              style={styles.icon}
            />
            <Text style={styles.commentText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.comment}>
            <Icon
              name="thumbs-up"
              size={26}
              color="#FF6C00"
              style={styles.icon}
            />
            <Text style={styles.commentText}>0</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.info}>
          <Icon name="map-pin" size={24} color="#BDBDBD" style={styles.icon} />
          <Text style={styles.country}>Ukraine</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    fontSize: 18,
    fontFamily: "Appetite",
    marginBottom: 8,
  },

  postDescription: {
    flexDirection: "row",
    alignItems: "center",
  },

  box: {
    flexDirection: "row",
    marginRight: 100,
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

  info: {
    flexDirection: "row",
    alignItems: "center",
  },

  country: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "Appetite",
    textDecorationLine: "underline",
  },
});

export default ProfilePost;
