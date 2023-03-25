import { Button, Text, VStack } from "native-base";
import { useState } from "react";
import * as FileSystem from "expo-file-system";

export const DatatabaseScreen = () => {
  const [downloading, setDownloading] = useState(false);
  const downloadDb = () => {
    try {
      setDownloading(true);
      console.log("start download..");
      FileSystem.downloadAsync(
        "http://192.168.50.200:3100/testdb",
        FileSystem.documentDirectory + "test.db"
      )
        .then((result) => console.log("download result", result))
        .catch((e) => console.error("download error", e))
        .finally(() => {
          console.log("download finished");
          setDownloading(false);
        });
      console.log("called FileSystem.downloadAsync");
    } catch (e) {
      console.log("download failed", e);
    } finally {
      // setDownloading(false);
    }
  };

  return (
    <VStack space={4} p={5}>
      <Button onPress={downloadDb}>Download DB</Button>
      <Text>{downloading ? "Downloading.." : "Idle"}</Text>
    </VStack>
  );
};
