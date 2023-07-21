import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import Food, { getFoodById} from "../services/Food";



const Details = ({ route, getFoodById }) => {
  const { foodItem } = route.params;

  return (
    <SafeAreaView style={{ backgroundColor: "black" }} >
      <View style={styles.header} >
      <ImageBackground source={require('../assets/vegetables-with-salt-corn-cob.jpg')} style={{width: '100%', height: '100%'}}>
      </ImageBackground>
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
        <View style={{ alignItems: "center", top: -200, }}>
          <Image
            source={foodItem.image}
            style={{ height: 300, width: 300, borderRadius: 150, backgroundColor: 'black'}}
          />
        </View>
        <View style={{top: -160}}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{foodItem.name}</Text>
        <View style={styles.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              {foodItem.price}
            </Text>
            </View>
        <Text style={{ fontSize: 20, marginTop: 4, color: "gray" }}>
          {foodItem.type}
        </Text>
        <Text style={{marginTop: 10}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>

          
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                top: 32,
                marginHorizontal: '30%'
              }}>
              <TouchableOpacity style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>-</Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                1
              </Text>
              <TouchableOpacity style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>+</Text>
              </TouchableOpacity>
            </View>

          <View style={{backgroundColor: 'black', marginTop: 40, height: '15%', width: '50%', justifyContent: 'center', alignItems: 'center', borderRadius: 25, marginHorizontal: '25%'}} >
          <TouchableOpacity activeOpacity={0.1} >
          <Text style={styles.title}>Add to cart</Text>
          </TouchableOpacity>
          </View>
          
      </View>
        </View>
        
      </View>
      
    </SafeAreaView>
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
  },
  priceTag: {
    backgroundColor: 'black',
    width: 80,
    height: 40,
    justifyContent: 'center',
    // borderTopLeftRadius: 25,
    // borderBottomLeftRadius: 25,
    borderRadius: 25,
    marginHorizontal:300
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
    
    
});
