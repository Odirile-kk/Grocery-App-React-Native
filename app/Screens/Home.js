import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FlatList } from "react-native-gesture-handler";
import Food from "../services/Food";
import { Dimensions } from "react-native";
import { BlurView } from "react-native-blur";
import { useNavigation } from "expo-router";

//getting size from the screen width
const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const Home = () => {
  const nav = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the data based on the search query
  const filteredData = Food.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Cards view
  const renderCard = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => nav.navigate("Details", { foodItem: item })}
      >
        <View style={{ alignItems: "center", top: -20 }}>
          <Image
            source={item.image}
            style={{ height: 120, width: 120, borderRadius: 60 }}
          />
        </View>
        {/* Inside the card */}
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
          <Text style={{ fontSize: 14, marginTop: 2 }}>{item.type}</Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.price}</Text>
          <TouchableOpacity
            style={styles.addToCart}
            onPress={() => {
              foodItem: item;
            }}
          >
            <Icon name="add" size={20} color={"white"} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* Header View */}
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 28 }}>Hello,</Text>
            <Text style={{ fontSize: 28, fontWeight: "bold", marginLeft: 10 }}>
              Mpho
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 22, color: "gray" }}>
            What are you looking for today?
          </Text>
        </View>
        <TouchableOpacity onPress={() => nav.navigate('Cart')}>
          <Icon name="cart" size={28} />
          <Text></Text>
        </TouchableOpacity>
      </View>
      {/* Search View */}
      <View
        style={{ marginTop: 40, flexDirection: "row", paddingHorizontal: 20 }}
      >
        <View style={styles.inputContainer}>
          {/* Insert search icon here */}
          <TextInput
            style={{ flex: 1, fontSize: 18, backgroundColor: "#D3D3D3" }}
            placeholder="Search ..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <Icon name="search" size={30} style={{ justifyContent: "center" }} />
        </View>
      </View>
      {/* List items view */}
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={filteredData} // Render the filtered data
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#D3D3D3",
    paddingHorizontal: 20,
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 12,
    backgroundColor: "white",
  },
  addToCart: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
