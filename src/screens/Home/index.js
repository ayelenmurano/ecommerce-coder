import { useEffect, useState } from "react";
import { View } from "react-native";
import { Categories } from "../../components/Categories";
import { Header } from "../../components/Header";
import { Products } from "../../components/Products";
import { SearchBox } from "../../components/SearchBox";
import { products } from "../../data/products";
import { styles } from "./styles";

export default function Home() {
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeProducts, setActiveProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const [input, setInput] = useState("");
  const [page, setPage] = useState("home");

  useEffect(() => {
    if (selectedCategory) {
      setActiveProducts(
        products.filter(({ category }) => category === selectedCategory)
      );
      setPage("products");
    } else {
      setActiveProducts(products);
    }
  }, [selectedCategory]);

  const cleanCategory = () => {
    setSelectedCategory(undefined);
  };

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

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Categories setCategory={setSelectedCategory} />;
      case "products":
        return (
          <Products
            products={activeProducts}
            category={selectedCategory}
            cleanCategory={cleanCategory}
          />
        );
    }
  };
  return (
    <View style={styles.container}>
      <Header
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
      {renderPage()}

      {/* <View style={styles.headerContainer}>
        <Input onChangeText={setInput} value={input} />
        <Button onPress={addProduct} />
      </View> */}
      {/* <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Lista de compras</Text>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListElem
              name={item.name}
              id={item.id}
              deleteProduct={deleteProduct}
            />
          )}
        />
      </View> */}
    </View>
  );
}
