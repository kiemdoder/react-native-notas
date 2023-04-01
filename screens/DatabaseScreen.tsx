import { Button, Text, VStack } from "native-base";
import { useState } from "react";
import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";
import Constants from "expo-constants";

export const DatabaseScreen = () => {
  const [downloading, setDownloading] = useState(false);
  const [rows, setRows] = useState([]);

  const downloadDb = async () => {
    try {
      if (
        !(
          await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite")
        ).exists
      ) {
        await FileSystem.makeDirectoryAsync(
          FileSystem.documentDirectory + "SQLite"
        );
      }

      if (
        (
          await FileSystem.getInfoAsync(
            FileSystem.documentDirectory + "SQLite/test.db"
          )
        ).exists
      ) {
        await FileSystem.deleteAsync(
          FileSystem.documentDirectory + "SQLite/test.db"
        );
      }

      setDownloading(true);
      console.log("start download..");

      console.log("Constants:", Constants);
      // const apiURL = Constants.expoConfig.extra.API_URL;
      const apiURL = "http://192.168.50.242:3100";
      console.log("apiURL:", apiURL);

      const result = await FileSystem.downloadAsync(
        `${apiURL}/test-db`,
        FileSystem.documentDirectory + "SQLite/test.db"
      );
      console.log("download result", result);

      //close db if still open
      SQLite.openDatabase("test.db").closeAsync();
    } catch (e) {
      console.error("download failed", e);
    } finally {
      setDownloading(false);
    }
  };

  const openDb = () => {
    const db = SQLite.openDatabase("test.db");
    db.transaction(
      (tx) => {
        console.log("execute sql query");
        tx.executeSql("select * from car;", [], (transaction, resultSet) => {
          setRows(resultSet.rows._array);
        });
      },
      (err) => console.error("sql error:", err)
    );
  };

  return (
    <VStack space={4} p={5}>
      <Button onPress={downloadDb}>Download DB</Button>
      <Text>{downloading ? "Downloading.." : "Idle"}</Text>
      <Button onPress={openDb}>List cars</Button>
      {rows.map((row) => (
        <Text key={row.id}>{row.id + ":" + row.name}</Text>
      ))}
    </VStack>
  );
};
