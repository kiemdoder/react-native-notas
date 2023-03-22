import { StyleSheet, View, Text } from "react-native";

export const TestScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Test screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
