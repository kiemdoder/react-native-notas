import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, VStack } from "native-base";

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <VStack p={5} space={2}>
      <Button onPress={() => navigation.navigate("Test")}>Test</Button>
      <Button onPress={() => navigation.navigate("Form")}>Form</Button>
      <Button onPress={() => navigation.navigate("Form2")}>Form2</Button>
      <Button onPress={() => navigation.navigate("DB")}>Database</Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
