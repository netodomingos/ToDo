import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Main from './Pages/Main/Main'
import Editor from './Pages/Editor/Editor'

const Stack = createStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName='main'
            >
                <Stack.Screen name='login' component={Login} />
                <Stack.Screen name='register' component={Register} />
                <Stack.Screen name='main' component={Main}  />
                <Stack.Screen name='editor' component={Editor}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}