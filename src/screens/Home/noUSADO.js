import { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../data/products";
import { styles } from "./styles";

export default function Home({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const [input, setInput] = useState("");

  useEffect(() => {
    navigation.navigate("Products", { category: selectedCategory });
  }, [selectedCategory]);

  const searchProduct = () => {
    if (input === "") {
      return;
    }
    setActiveProducts(
      products.filter(({ title, category }) => {
        if (selectedCategory) {
          return category === selectedCategory && title.includes(input);
        } else {
          return title.includes(input);
        }
      })
    );
    setPage("products");
  };

  const switchPage = (value) => {
    setPage(value);
  };

  const handleSearchBox = () => {
    setActiveSearch(!activeSearch);
    if (activeSearch === false) {
      setInput("");
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Home</Text>
        {/* <Header
          activeSearch={activeSearch}
          handleSearchBox={handleSearchBox}
          switchPage={switchPage}
        />
        {activeSearch ? (
          <View style={styles.searchBoxContainer}>
            <SearchBox
              input={input}
              setInput={setInput}
              searchProduct={searchProduct}
            />
          </View>
        ) : null}
        <Categories setCategory={setSelectedCategory} /> */}
      </View>
    </SafeAreaView>
  );
}
