import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
// import { SafeAreaView } from 'react-native-safe-area-context'

const ProductItem = (props) => {
    const productItems = props.product
  return (
    <View >
        <FlatList
            data={productItems}
            renderItem={({item}) => {
                return (
                    <View style={{width: '100%', height:'100%'}}>
                        <Image source={{uri: item.image}} style={{width: '100%', height:'100%', aspectRatio: 1}}/>
                    </View>

                )
                
            }}
            
        />
    </View>
  )
}

const style = StyleSheet.create({
    // container: {
    //     padding: 10,
    //     paddingHorizontal: 20,
    //     flexDirection: 'row'
    // },

    itemContainer: {
        width: '50%',
        padding:1
    },

    image: {
        width: '100%',
        height: '100%',
        aspectRatio: 1
    }
})
export default ProductItem