import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Toast from "react-native-toast-message";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFocusInput = (name) => {
    setFocusedInput(name);
    setIsKeyboardOpen(true);
  };

  const handleSubmit = () => {
    if (!email) {
      Toast.show({
        type: "error",
        text1: "Введіть адресу електронної пошти! ",
      });
    } else if (!password) {
      Toast.show({
        type: "error",
        text1: "Введіть пароль! ",
      });
    } else {
      const user = { email, password };
      console.log("Вхід. Користувач:", user);
      navigation.navigate("HomeScreen");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/photobg.jpg")}
          style={styles.backgroundImage}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.keyboardView}
          >
            <View
              style={{
                ...styles.authContainer,
                paddingBottom: isKeyboardOpen ? 90 : 45,
              }}
            >
              <Text style={styles.text}>Увійти </Text>
              <TextInput
                placeholder="Адреса електронної пошти"
                inputMode="email"
                placeholderTextColor={"#BDBDBD"}
                style={[
                  styles.input,
                  focusedInput === "email" && styles.activeInput,
                ]}
                value={email}
                onChangeText={setEmail}
                onFocus={() => {
                  handleFocusInput("email");
                }}
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Пароль"
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={!showPassword}
                  style={[
                    styles.input,
                    focusedInput === "password" && styles.activeInput,
                  ]}
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => {
                    handleFocusInput("password");
                  }}
                />

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={toggleShowPassword}
                  style={styles.showPassword}
                >
                  <Text style={styles.showPasswordText}>
                    {showPassword ? "Сховати" : "Показати"}
                  </Text>
                </TouchableOpacity>
              </View>
              {!isKeyboardOpen && (
                <View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.buttonText}>Увійти</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("Registration")}
                  >
                    <Text style={styles.link}>
                      Немає акаунту? Зареєструватися
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
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
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },

  keyboardView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  authContainer: {
    position: "relative",
    flex: 0.5,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 16,
    paddingBottom: 35,
  },

  text: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Appetite",
    marginTop: 32,
    marginBottom: 32,
  },

  input: {
    width: 343,
    height: 50,
    paddingLeft: 16,
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 16,
  },

  activeInput: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },

  button: {
    height: 51,
    width: 343,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Appetite",
  },

  passwordContainer: {
    position: "relative",
  },

  showPasswordText: {
    fontFamily: "Appetite",
  },

  showPassword: {
    position: "absolute",
    top: 15,
    right: 16,
  },

  link: {
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Appetite",
    textAlign: "center",
  },
});

export default LoginScreen;
