import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginChange = (text) => {
    setLogin(text);
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
          <View
            style={{
              ...styles.authContainer,
              paddingBottom: isKeyboardOpen ? 150 : 45,
            }}
          >
            <View style={styles.avatar}>
              <Image
                source={require("../../assets/photobg.jpg")}
                style={styles.image}
              />
            </View>

            <TouchableOpacity>
              <Icon
                name="pluscircleo"
                color="#FF6C00"
                size={25}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Реєстрація</Text>

            <TextInput
              placeholder="Логін"
              placeholderTextColor={"#BDBDBD"}
              style={styles.input}
              value={login}
              onChangeText={handleLoginChange}
              onFocus={() => {
                setIsKeyboardOpen(true);
              }}
            />
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
                  <Text style={styles.buttonText}>Зареєстуватися</Text>
                </TouchableOpacity>
                <View>
                  <TouchableOpacity>
                    <Text style={styles.link}>Вже є акаунт? Увійти</Text>
                  </TouchableOpacity>
                </View>
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
    flex: 0.6,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 16,
  },

  avatar: {
    position: "absolute",
    top: -60,
    left: 125,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "rgba(246, 246, 246, 1)",
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },

  icon: {
    position: "absolute",
    top: 0,
    right: 100,
    zIndex: 1,
  },

  text: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Appetite",
    marginTop: 92,
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

export default RegistrationScreen;
