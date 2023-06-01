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
import Toast from "react-native-toast-message";

const CreatePostsScreen = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const navigation = useNavigation();
  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleFocusInput = (name) => {
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
      console.log("Створено публікацію.", { name, location, photo });
      navigation.navigate("HomeScreen");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.main}>
            <View style={styles.photoContainer}>
              <Image
                //   source={require("../assets/images/bgPhoto.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.cameraIconContainer}>
              <Icon
                name="camera"
                size={24}
                color="#BDBDBD"
                style={styles.icon}
              />
            </View>

            <Text style={styles.photoText}>
              {image ? "Редагувати фого " : "Завантажте фото"}
            </Text>

            <TextInput
              placeholder="Назва..."
              style={styles.input}
              value={name}
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
                style={[styles.input, styles.location]}
                value={location}
                onChangeText={setLocation}
                onFocus={() => {
                  handleFocusInput("location");
                }}
              />
            </View>
            {!isKeyboardOpen && (
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  ...styles.button,
                  backgroundColor:
                    name || location || image ? "#FF6C00" : "#F6F6F6",
                }}
                onPress={handleSubmit}
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
            )}
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.iconContainer}>
              <Icon
                name="trash-2"
                size={24}
                color="#BDBDBD"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    borderColor: "#BDBDBD",
    borderTopWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "#FFFFFF",
  },
  main: {
    flex: 10,
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
    top: 90,
    left: 142,
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
    paddingVertical: 15,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 2,
    fontSize: 16,
    fontFamily: "Appetite",
  },

  icon: {
    position: "absolute",
    marginRight: 4,
  },

  location: {
    marginLeft: 28,
    borderBottomWidth: 0,
  },
  button: {
    height: 51,
    width: 343,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 16,
    fontFamily: "Appetite",
  },

  iconContainer: {
    bottom: 0,
    height: 40,
    width: 70,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  footer: {
    flex: 0.5,
  },
});

export default CreatePostsScreen;
