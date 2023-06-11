import React, { useEffect, useState } from 'react'
import {FlatList, Text, View} from 'react-native'
import CardItem from '../components/CardItem'
import AsyncStorage from '@react-native-async-storage/async-storage';
const ShoppingCard = () => {
    // const cardData = [
    //     {
    //         id : 1,
    //         image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike3.png',
    //         name: 'Nikeky',
    //         size: 'SM',
    //         quantity: 6,
    //         price: 3000
    //     },
    //     {
    //         id : 2,
    //         image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike3.png',
    //         name: 'Nikeky',
    //         size: 'SM',
    //         quantity: 6,
    //         price: 3000
    //     },
    //     {
    //         id : 3,
    //         image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike4.png',
    //         name: 'Nikeky',
    //         size: 'SM',
    //         quantity: 6,
    //         price: 3000
    //     },
    //     {
    //         id : 4,
    //         image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike4.png',
    //         name: 'Nikeky',
    //         size: 'SM',
    //         quantity: 6,
    //         price: 3000
    //     },
    //     {
    //         id : 5,
    //         image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike4.png',
    //         name: 'Nikeky',
    //         size: 'SM',
    //         quantity: 6,
    //         price: 3000
    //     },
    //     {
    //         id : 6,
    //         image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike4.png',
    //         name: 'Nikeky',
    //         size: 'SM',
    //         quantity: 6,
    //         price: 3000
    //     }
    // ]
    const [cardDatas, setCardData] = useState([])
    useEffect(()=> {
        const cardData = async() => {
            const store = await AsyncStorage.getItem('card') ?? []

            const parseData = JSON.parse(store)
            setCardData(parseData)
        }
        cardData()
    },[])
    
 

   
  return (
    <View>
        <FlatList
            data={cardDatas}
            renderItem={({item})=><CardItem card={item}/>}
        />
    </View>
  )
}

export default ShoppingCard