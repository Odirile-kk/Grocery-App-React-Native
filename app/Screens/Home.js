import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FlatList } from 'react-native-gesture-handler'
import Food from '../services/Food'
import { Dimensions } from 'react-native'
import { BlurView } from 'react-native-blur';
import { useNavigation } from 'expo-router'


//getting size from the screen width
const {width} = Dimensions.get('screen')

const cardWidth = width/2 -20;

const Home = () => {

    const nav = useNavigation()

    const route = () => {
        try{
            nav.navigate('Details');
            console.log('done')
    }
    catch(err){
        console.log(err)
    }
        } 

        const routeCart = () => {
            try{
                nav.navigate('Cart');
                console.log('done')
        }
        catch(err){
            console.log(err)
        }
            } 
    

    //Cards view
    const Card = ({Food}) => {
      return  (
        <TouchableOpacity style={styles.card} onPress={route}>
        <View style={{alignItems: 'center', top: -20 }}>
            <Image source={Food.image} style={{height: 120, width: 120, borderRadius: 60}} />
        </View>
        {/*Inside the card */}
        <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{Food.name}</Text>
            <Text style={{fontSize: 14, marginTop: 2}}>{Food.type}</Text>
        </View>
        <View style={{marginTop: 10, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{Food.price}</Text>
            <TouchableOpacity style={styles.addToCart}>
                <Icon name="add" size={20} />
            </TouchableOpacity>
        </View>
      </TouchableOpacity>
      )
      
    }

  return (
   
    <SafeAreaView style={{flex: 1,
        backgroundColor: 'white', }}>
    {/*Header View */}
        <View style={styles.header}>
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 28}}>Hello,</Text>
                    <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>Mpho</Text>
                </View>
                <Text style={{marginTop: 5, fontSize: 22, color: 'gray'}}>What are you looking for today?</Text>
            </View>
            <TouchableOpacity onPress={routeCart}>
            <Icon name="cart" size={28} />
            <Text></Text>
            </TouchableOpacity>
          
        </View>
        {/*Search View */}
        <View style={{marginTop: 40, flexDirection: 'row', paddingHorizontal: 20}}>
        <View style={styles.inputContainer}>
            {/* Insert search icon here */}
            
            <TextInput style={{flex: 1, fontSize: 18, backgroundColor: '#D3D3D3'}} placeholder='Search ...'/>
            <Icon name="search" size={30} style={{justifyContent: 'center'}}/>
        </View>
        </View>
        {/*List items view*/}
        <FlatList 
            showsVerticalScrollIndicator= {false}
            numColumns={2}
            data={Food}
            renderItem={({item} )=> <Card Food={item}/>}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
        header: {
            marginTop: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
           
        },
        inputContainer: {
            flex: 1,
            height: 50,
            borderRadius: 10,
            flexDirection: 'row',
            backgroundColor: '#D3D3D3',
            paddingHorizontal: 20
        },
        card: {
            height: 220,
            width: cardWidth,
            marginHorizontal: 10,
            marginBottom: 20,
            marginTop: 50,
            borderRadius: 15,
            // background: 'rgba( 255, 255, 255, 0.3)',
            //box shadow
            elevation: 12,
            backgroundColor: 'white'
        },
        addToCart: {
            height: 30,
            width: 30,
            borderRadius: 20,
            backgroundColor: 'gold',
            justifyContent: 'center',
            alignItems: 'center'
        }

})

export default Home