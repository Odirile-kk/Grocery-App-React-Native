import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";



const Details = () => {
  return (
    <View style={{ backgroundColor: "black" }}>
      <View style={styles.header}>
        
      </View>

      <View style={styles.card}>
        {/*Text Views*/}
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            marginHorizontal: 20,
            paddingBottom: 2
          }}
        >
        {/*Image View */}
        <View style={{ alignItems: "center", top: -160 }}>
          <Image
            source={require("../assets/welcome1.jpg")}
            style={{ height: 280, width: 280, borderRadius: 150 }}
          />
        </View>
        <View style={{top: -160}}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Food</Text>
        <Text style={{ fontSize: 20, marginTop: 4, color: "gray" }}>
          Ingredidients
        </Text>
        <Text style={{marginTop: 10}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={{backgroundColor: 'black', marginTop: 40, height: '15%', width: '50%', justifyContent: 'center', alignItems: 'center', borderRadius: 25, marginHorizontal: '25%'}} >
          <TouchableOpacity activeOpacity={0.1} >
          <Text style={styles.title}>Add to cart</Text>
          </TouchableOpacity>
          </View>
          
      </View>
        </View>
        
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    height: "30%",
  },
  card: {
    height: "80%",
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 25,
  }
    
    
});
