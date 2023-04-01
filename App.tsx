import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { TestScreen } from "./screens/TestScreen";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "expo-status-bar";
import { FormScreen } from "./screens/FormScreen";
import { FormScreen2 } from "./screens/FormScreen2";
import { DatabaseScreen } from "./screens/DatabaseScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Test" component={TestScreen} />
          <Stack.Screen name="Form" component={FormScreen} />
          <Stack.Screen name="Form2" component={FormScreen2} />
          <Stack.Screen name="DB" component={DatabaseScreen} />
        </Stack.Navigator>
        <StatusBar backgroundColor="#3c8" />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
