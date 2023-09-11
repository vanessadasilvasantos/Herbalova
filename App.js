import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  Modal,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [visibleRegister, setVisibleRegister] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./img/fundo.jpg")}
        style={styles.background}
      >
        <Modal visible={visible} animationType="slide" transparent={true}>
          <TouchableOpacity
            style={styles.closeModal}
            onPress={() => {
              setVisible(false);
            }}
          ></TouchableOpacity>
          <View style={styles.containerModal}>
            <Text style={styles.titleModal}>Login</Text>
            <Text style={styles.txtModal}>Sign to your account</Text>
            <Text style={styles.label}>Your Email</Text>
            <TextInput style={styles.input} keyboardType="email-address" />
            <Text style={styles.label}>Password</Text>
            <View style={[styles.input, { flexDirection: "row" }]}>
              <TextInput
                style={{ width: "90%" }}
                secureTextEntry={passwordVisible}
              />
              <TouchableOpacity
                onPress={() => {
                  setPasswordVisible(!passwordVisible);
                }}
              >
                {passwordVisible ? (
                  <Ionicons name="eye-off" color={"#000"} size={20} />
                ) : (
                  <Ionicons name="eye" color={"#000"} size={20} />
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ marginBottom: 375 }}>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setVisibleRegister(true);
              }}
            >
              <Text
                style={{ textAlign: "center", fontWeight: "600", fontSize: 16 }}
              >
                I don’t have account
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#19A54A",
              height: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>
              Login
            </Text>
          </TouchableOpacity>
        </Modal>
        <Modal
          visible={visibleRegister}
          animationType="slide"
          transparent={true}
        >
          <TouchableOpacity
            style={styles.closeModal}
            onPress={() => {
              setVisibleRegister(false);
            }}
          ></TouchableOpacity>
          <View style={styles.containerModal}>
            <Text style={styles.titleModal}>Register</Text>
            <Text style={styles.txtModal}>Create your account</Text>
            <Text style={styles.label}>Your name</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Your Email</Text>
            <TextInput style={styles.input} keyboardType="email-address" />
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} />

            <TouchableOpacity
              onPress={() => {
                setVisibleRegister(false);
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: 16,
                  marginTop: 300,
                }}
              >
                I have account
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#19A54A",
              height: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>
              Register
            </Text>
          </TouchableOpacity>
        </Modal>
        <Text style={styles.txtTitle}>Herbalova</Text>
      </ImageBackground>
      <TouchableOpacity
        style={styles.txtContainer}
        onPress={() => {
          setVisible(true);
        }}
      >
        <Text style={styles.txt}>Sign to your account</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  txtContainer: {
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "100%",
    height: 70,
  },
  txt: {
    color: "#000",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
  txtTitle: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "600",
    justifyContent: "center",
  },
  closeModal: {
    flex: 1,
    zIndex: 9,
  },
  containerModal: {
    backgroundColor: "#fff",
    padding: 30,
  },
  input: {
    backgroundColor: "#F9FAFB",
    height: 40,
    marginVertical: 20,
    padding: 10,
  },
  titleModal: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 10,
  },
  txtModal: {
    fontSize: 16,
    color: "#888",
    fontWeight: "400",
    marginBottom: 60,
  },
  label: {
    fontSize: 14,
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: 1.4,
  },
});
