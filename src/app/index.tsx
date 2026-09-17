import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Asistencia</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#11c1c1",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
