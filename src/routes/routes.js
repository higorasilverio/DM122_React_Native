import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '../components/Tab';
import ProductDetails from '../components/ProductDetails';
import CategoryDetails from '../components/CategoryDetails';
import { colors } from '../styles';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='HomeScreen'
                component={BottomTab}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name='ProductDetails'
                component={ProductDetails}
                options={
                    {
                        title: 'Detalhes',
                        headerStyle: {
                            backgroundColor: colors.base
                        },
                        headerTintColor: colors.white
                    }
                }
            />
            <Stack.Screen 
                name='CategoryDetails'
                component={CategoryDetails}
                options={
                    {
                        title: 'Lista de Produtos',
                        headerStyle: {
                            backgroundColor: colors.base
                        },
                        headerTintColor: colors.white
                    }
                }
            />

        </Stack.Navigator>
    )
}

export default HomeStack;