import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const CommentsScreen = () => {
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.photoContainer}>
          <Image
            source={require("../../assets/bgPhoto.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.commentContainer}>
          <Text style={styles.user}>Olena</Text>
          <Text style={styles.comment}>
            Really love your most recent photo. I’ve been trying to capture the
            same thing for a few months and would love some tips!
          </Text>
          <Text style={styles.commentDate}>09 червня, 2020 | 08:40</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          value={comment}
          onChangeText={setComment}
          placeholder="Коментувати..."
        />
        <TouchableOpacity style={styles.button}>
          <Icon name="plus" color={"#fff"} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  main: {
    flex: 10,
  },
  commentContainer: {
    padding: 16,
    borderRadius: 6,
    backgroundColor: "#F6F6F6",
    width: 300,
  },

  user: {
    fontSize: 16,
    fontFamily: "Appetite",
    color: "#BDBDBD",
    marginBottom: 5,
  },
  comment: {
    fontSize: 16,
    fontFamily: "Appetite",
    color: "#212121",
    marginBottom: 5,
  },
  commentDate: {
    fontSize: 16,
    fontFamily: "Appetite",
    color: "#BDBDBD",
  },

  photoContainer: {
    position: "relative",
    width: 343,
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    marginBottom: 8,
  },

  image: {
    width: 350,
    height: 240,
    borderRadius: 8,
    marginBottom: 10,
  },
  input: {
    width: 343,
    height: 50,
    paddingLeft: 16,
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 16,
  },

  footer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  button: {
    position: "absolute",
    top: 2,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    marginLeft: 35,
    marginRight: 35,
  },
});

export default CommentsScreen;
