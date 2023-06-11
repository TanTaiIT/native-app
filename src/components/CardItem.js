import React, { useState } from 'react'
import {View, Text, Image} from 'react-native'
import {Feather} from '@expo/vector-icons'
const CardItem = ({card}) => {
    const [quantity, setQuantity] = useState(1)
    const descreaseQty = () => {
        if(quantity <= 1) {
            return
        }

        setQuantity(quantity - 1)
    }

    const increaseQty = () => {
        setQuantity(quantity + 1)
    }
  return (
    <View style={{padding: 10, paddingHorizontal: 20, flexDirection: 'row'}}>
        <Image source={{uri: card.image}} style={{width: '40%' , aspectRatio: 1}}/>
        
        <View style={{flex: 1, marginLeft: 10}}>
            <Text>{card.name}</Text>
            <Text>{card.size}</Text>

            <View style={{marginTop: 'auto', flexDirection:'row', alignItems:'center'}}>
                <Feather onPress={descreaseQty} name='minus-circle' size={24} color='gray'/>
                <Text style={{paddingHorizontal: 10}}>{quantity}</Text>
                <Feather onPress={increaseQty} name='plus-circle' size={24} color='gray'/>
                <Text style={{marginLeft: 10}}>
                    {card.price * quantity}
                </Text>
            </View>
        </View>
    </View>
  )
}

export default CardItem