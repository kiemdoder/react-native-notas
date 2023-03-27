import { Button, Text, VStack } from "native-base";
import { useState } from "react";
import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";

export const DatatabaseScreen = () => {
  const [downloading, setDownloading] = useState(false);

  const downloadDb = async () => {
    try {
      if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
      }

      setDownloading(true);
      console.log("start download..");
      const result = await FileSystem.downloadAsync(
        "http://192.168.50.148:3100/test-db",
        FileSystem.documentDirectory + "SQLite/test.db"
      )
      console.log("download result", result)
    } catch (e) {
      console.error("download failed", e);
    } finally {
      setDownloading(false);
    }
  };

  const openDb = () => {
    const db = SQLite.openDatabase("test.db");
    console.log("db", db);
    db.transaction((tx) => {
      console.log("execute sql query");
      tx.executeSql("select * from car;", [], resultSet => console.log("result set:", resultSet));
    }, err => console.error("sql error:", err))
  }

  return (
    <VStack space={4} p={5}>
      <Button onPress={downloadDb}>Download DB</Button>
      <Text>{downloading ? "Downloading.." : "Idle"}</Text>
      <Button onPress={openDb} >Open DB</Button>
    </VStack>
  );
};
