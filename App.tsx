import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Home from "./src/pages/home/Home";
import Navigation from "./src/components/navigation/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Home />
      </ScrollView>
      <View style={styles.menu}>
        <Navigation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 42,
    color: "#142144",
    fontWeight: "900",
    marginTop: 32,
  },
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1, // To expand the content to fill the available space
    paddingBottom:64
  },
  textContent: {
    fontSize: 20,
    padding: 20,
  },
  menu: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    elevation: 4, // Add shadow to the menu (Android)
    shadowColor: "black", // Add shadow to the menu (iOS)
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
  },
  menuContent: {
    fontSize: 16,
    padding: 10,
  },
});
