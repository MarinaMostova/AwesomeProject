import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
    setIsKeyboardOpen(false);
  };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/photobg.jpg")}
          style={styles.backgroundImage}
        >
          <View style={styles.authContainer}>
            <Text style={styles.text}>Увійти</Text>

            <TextInput
              placeholder="Адреса електронної пошти"
              inputMode="email"
              placeholderTextColor={"#BDBDBD"}
              style={styles.input}
              value={email}
              onChangeText={handleEmailChange}
              onFocus={() => {
                setIsKeyboardOpen(true);
              }}
            />

            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="Пароль"
                placeholderTextColor={"#BDBDBD"}
                secureTextEntry={!showPassword}
                style={styles.input}
                value={password}
                onChangeText={handlePasswordChange}
                onFocus={() => {
                  setIsKeyboardOpen(true);
                }}
              />

              <TouchableOpacity
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
                <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                  <Text style={styles.buttonText}>Увійти</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.link}>
                    Немає акаунту? Зареєструватися
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
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
    borderColor: "#E8E8E8",
    borderWidth: 1,
    fontFamily: "Appetite",
    marginBottom: 16,
  },

  activeInput: {
    borderColor: "#FF6C00",
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
