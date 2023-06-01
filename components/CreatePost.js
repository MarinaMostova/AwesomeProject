import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

const CreatePost = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [focusedInput, setFocusedInput] = useState("");

  const navigation = useNavigation();
  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardOpen(false);
        setFocusedInput("");
      }
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleFocusInput = (name) => {
    setFocusedInput(name);
    setIsKeyboardOpen(true);
  };

  const handleSubmit = () => {
    if (!image) {
      Toast.show({
        type: "error",
        text1: "Завантажте фото ! ",
      });
    } else if (!name) {
      Toast.show({
        type: "error",
        text1: "Введіть назву! ",
      });
    } else if (!location) {
      Toast.show({
        type: "error",
        text1: "Оберіть місцевість! ",
      });
    } else {
      const user = { email, password };
      console.log("Вхід. Користувач:", user);
      navigation.navigate("HomeScreen");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          ...styles.container,
          //   paddingBottom: isKeyboardOpen ? 600 : 45,
        }}
      >
        <View style={styles.photoContainer}>
          <Image
            //   source={require("../assets/images/bgPhoto.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.cameraIconContainer}>
          <Icon name="camera" size={24} color="#BDBDBD" style={styles.icon} />
        </View>

        <Text style={styles.photoText}>
          {image ? "Редагувати фого " : "Завантажте фото"}
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            placeholder="Назва..."
            style={[
              styles.input,
              focusedInput === "name" && styles.activeInput,
            ]}
            onChangeText={setName}
            onFocus={() => {
              handleFocusInput("name");
            }}
          />
          <View style={styles.inputContainer}>
            <Icon
              name="map-pin"
              size={24}
              color="#BDBDBD"
              style={styles.icon}
            />
            <TextInput
              placeholder="Місцевість..."
              style={[
                styles.input,
                styles.location,
                focusedInput === "location" && styles.activeInput,
              ]}
              onChangeText={setLocation}
              onFocus={() => {
                handleFocusInput("location");
              }}
            />
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            ...styles.button,
            backgroundColor: name || location || image ? "#FF6C00" : "#F6F6F6",
          }}
          // onPress={handleSubmit}
        >
          <Text
            style={{
              ...styles.buttonText,
              color: name || location || image ? "#FFF" : "#BDBDBD",
            }}
          >
            Опублікувати
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="trash-2" size={24} />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "center",
    width: "100%",
    borderColor: "#BDBDBD",
    borderTopWidth: 1,
  },
  container: {
    flex: 1,
    alignContent: "center",
    width: "100%",
    borderColor: "#BDBDBD",
    borderTopWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "#FFFFFF",
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
  cameraIconContainer: {
    position: "absolute",
    top: 122,
    left: 158,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
  },
  photoText: {
    fontSize: 16,
    fontFamily: "Appetite",
    marginBottom: 32,
    color: "#BDBDBD",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 2,
    marginBottom: 32,
    marginTop: 16,
  },

  input: {
    // color: "#BDBDBD",
    paddingVertical: 15,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 2,
    fontSize: 16,
    fontFamily: "Appetite",
  },

  activeInput: {
    borderColor: "#FF6C00",
  },

  icon: {
    position: "absolute",
    marginRight: 4,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 2,
  },

  location: {
    marginLeft: 28,
    borderBottomWidth: 0,
  },
  button: {
    height: 51,
    width: 343,
    borderRadius: 50,
    // backgroundColor: "#FF6C00",
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 16,
    fontFamily: "Appetite",
  },
});

export default CreatePost;
