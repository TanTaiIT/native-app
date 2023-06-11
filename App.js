import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import ProductScreen from './src/screen/ProductScreen';
import ProductDetailPage from './src/screen/ProductDetailPage';
import { NavigationContainer } from '@react-navigation/native';
import ShoppingCard from './src/screen/ShoppingCard';

const Stack = createNativeStackNavigator()

export default function App() {

  const NumberItem = 8
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:'white'}}}>
        <Stack.Screen
          name="product"
          component={ProductScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <Pressable onPress={()=> navigation.navigate('shopping card')}>
                <MaterialCommunityIcons name="truck-delivery" size={18} color='gray'/>
                <Text style={{marginLeft:5, fontWeight: '500'}}>{NumberItem}</Text>
              </Pressable>
            ),
            headerLeft: () => (
              <MaterialCommunityIcons
                onPress={() => navigation.navigate('Track Order')}
                name="truck-delivery"
                size={22}
                color="gray"
              />
            )
          })}
        />
        <Stack.Screen
          name="product detail"
          component={ProductDetailPage}
        />
        <Stack.Screen
          name="shopping card"
          component={ShoppingCard}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
