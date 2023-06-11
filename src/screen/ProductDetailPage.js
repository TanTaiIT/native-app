import React, { useEffect, useState } from 'react'
import {FlatList, ScrollView, Text, View, Image, StyleSheet, useWindowDimensions, Pressable} from 'react-native'
import product from './../data/product.js'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage';
const ProductDetailPage = ({route}) => {
    const Id = route.params.id ?? 1
    const [productDetails, setProductDetail] = useState({})

    const {width} = useWindowDimensions()
    useEffect(()=> {
        const getProductDetail = () => {
            const productDetail = product.find((pro)=> {
                return pro.id === Id
            })
            
    
            setProductDetail(productDetail)
        }

        getProductDetail()
    },[])

    const addToCard = async() => {
        const store = JSON.parse(await AsyncStorage.getItem('card'))
        store.push(productDetails)
        await AsyncStorage.setItem('card', JSON.stringify(store));
        // AsyncStorage.removeItem('card')
        alert('success')
    }

    const renderItems = ({item}) => {
        return (
            <View>
                <Image source={{uri: item}} style={{width: width, aspectRatio: 1}} />
            </View>
        )
    }
    
  return (
    <View style={{width: '100%'}}>
        <ScrollView>
            <View style={{flexDirection:'row'}}>
            <FlatList
                data={productDetails.images}
                renderItem={renderItems}
                pagingEnabled
                showsHorizontalScrollIndicator={true}
                horizontal
            />
            </View>
 
        <View style={{padding: 20}}>
            <Text style={{fontSize: 25,fontWeight:'500', marginVertical: 10}}>{productDetails.name}</Text>
            <Text style={{marginVertical: 10,fontSize: 16, letterSpacing: 1.5, fontWeight: '300'}}>{productDetails.price}</Text>
            <Text style={{marginVertical: 10, fontSize: 15, lineHeight:25, }}>{productDetails.description}</Text>
        </View>
        </ScrollView>

        <Pressable onPress={addToCard} style={{position:'absolute', backgroundColor:'black', bottom: 20, width:'95%', alignSelf:'center', padding: 20, borderRadius: 100, alignItems:'center'}}>
            <Text style={{color:'white', fontSize: 15}}>Add To Card</Text>

        </Pressable>
    </View>
  )
}
export default ProductDetailPage