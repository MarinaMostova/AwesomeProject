import { Image, Text, View, StyleSheet } from "react-native";

const User = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/bgPhoto.png")}
      />
      <View style={styles.user}>
        <Text style={styles.name}>Natali Romanova</Text>
        <Text style={styles.email}>email@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 32,
    paddingHorizontal: 25,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },

  user: {
    justifyContent: "center",
    marginLeft: 8,
  },

  name: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "Appetite",
  },
  email: {
    color: "#212121",
    fontSize: 12,
    fontFamily: "Appetite",
  },
});

export default User;
