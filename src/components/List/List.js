import { useState } from "react";
import {
    FlatList,
    Pressable,
    SafeAreaView,
    Text,
    TextInput,
    View,
} from "react-native";
import { styles } from "./styles";

const initialList = [];

export const List = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState(initialList);

  const onChangeText = (value) => {
    setText(value);
  };

  const addElem = (value) => {
    setList([
      ...list,
      {
        id: Math.random(),
        date: Date.now(),
        name: value,
      },
    ]);
  };

  return (
    <View>
      <Text>Lista de compras</Text>
      <View key={1}>
        <TextInput
          style={styles.list}
          placerholder="Escriba aquí..."
          value={text}
          onChangeText={onChangeText}
        />
        <Pressable style={styles.button} onPress={addElem}></Pressable>
      </View>
      <View key={2}>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={list}
            renderItem={({ item }) => <Text style={styles.elemList} title={item.name} />}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};
