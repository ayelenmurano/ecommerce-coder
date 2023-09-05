import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ListElem from "../../components/ListElem";
import { styles } from "./styles";

export default function Home() {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    if (input === "") return;
    setProducts([...products, { name: input, id: Math.random() }]);
    setInput("");
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(item => item.id !== id))
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Input onChangeText={setInput} value={input} />
        <Button onPress={addProduct} />
      </View>
      <View style={styles.listContainer}>
        <Text>Lista de compras</Text>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListElem name={item.name} id={item.id} deleteProduct={deleteProduct} />
          )}
        />
      </View>
    </View>
  );
}
