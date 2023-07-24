import  React, {useRef} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import PaystackWebView, {  paystackProps } from 'react-native-paystack-webview';




export default function Payment(){

    const paystackWebViewRef= useRef(paystackProps.PaystackRef)

  return (
    <View style={{flex: 1}}>
      <PaystackWebView
                    buttonText='Pay Now'
                    showPayButton={true}
                    paystackKey='pk_test_851e69d8d23beadc2305cf5faee560f9cab7f8e6'
                    paystackSecretKey='sk_test_35fe4eeb0aff4639546fc811b809bd0db89f29ea'
                    amount={100}
                    billingEmail='kekanaodirile@gmail.com'
                    billingMobile='0123456789'
                    billingName='Grocery-App'
                    currency="ZAR"
                    channels={JSON.stringify(["card","bank"])}
                    ActivityIndicatorColor='green'
                    SafeAreaViewContainer={{marginTop: 5}}
                    SafeAreaViewContainerModal={{marginTop: 5}}
                    handleWebViewMessage={(e) => {
                   
                    }}
                    
                    onCancel={(resp) => {
                      console.log(resp);
                    }}
                    onSuccess={(resp) => {
                        console.log(resp);
                       
                    }}
                    autoStart={true}
                />
                <TouchableOpacity onPress={() => paystackWebViewRef.current.startTransaction()
                
                }>
                    <Text>Pay now</Text>
                </TouchableOpacity>
    </View>
  );
}

