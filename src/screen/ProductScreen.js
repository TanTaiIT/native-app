import React, { useState } from 'react'
import Product from './../data/product.js'
import ProductItem from '../components/ProductItem'
import { FlatList, Image, Pressable, View, Text, ScrollView, SafeAreaView,StatusBar,StyleSheet } from 'react-native'

const ProductScreen = ({navigation}) => {
    const [product, setProduct] = useState(Product)

    const renderItems = ({item}) => {
        return (
            <Pressable onPress={()=> {
                navigation.navigate('product detail', {id: item.id})
            }} style={{width: '50%', padding: 10}}>
                <Image source={{uri: item.image}} style={{width: '100%', aspectRatio: 1}}/>
            </Pressable>
        )
    }
  return (
    <View style={{flex: 1,paddingTop: StatusBar.currentHeight,width: '100%',justifyContent:'space-between',flexDirection:'row'}}>
        <FlatList
            data={product}
            renderItem={renderItems}
            numColumns={2}
               
        />    
    </View>
  )
}

export default ProductScreen