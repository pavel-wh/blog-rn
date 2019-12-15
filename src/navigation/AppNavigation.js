import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { BookmarkedScreen } from '../screens/BookmarkedScreen'
import { THEME } from '../theme'

const PostNavigation = createStackNavigator(
    {
        Main: MainScreen,
        Post: {
            screen: PostScreen
        }
    },
    {
        InitialRouteName: 'Main',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR
        }
    }
)

const BookedNavigator = createStackNavigator(
    {
        Booked: BookmarkedScreen,
        Post: PostScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR
        }
    }
)

const bottomTabsConfig = {
    Post: {
        screen: PostNavigation,
        navigationOptions: {
            tabBarLabel: 'Посты',
            tabBarIcon: info => (
                <Ionicons 
                    name='ios-albums'
                    size={ 25 }
                    color={ info.tintColor }
                />
            )
        }
    },
    Booked: {
        screen: BookedNavigator,
        navigationOptions: {
            tabBarLabel: 'Избранное',
            tabBarIcon: info => (
                <Ionicons 
                    name='ios-star'
                    size={ 25 }
                    color={ info.tintColor }
                />
            )
        }
    }
}

const BottomNavigator = 
    Platform.OS === 'android' 
        ? createMaterialBottomTabNavigator(
            bottomTabsConfig, 
            {
                activeTintColor: 'white',
                activeColor: 'white',
                inactiveColor: 'rgba(255, 255, 255, 0.5)',
                shifting: true,
                barStyle: {
                    backgroundColor: THEME.MAIN_COLOR,
                }
            }
        ) 
        : createBottomTabNavigator(
            bottomTabsConfig,
            {
                tabBarOptions: {
                    activeTintColor: THEME.MAIN_COLOR
                }
            }
        )

export const AppNavigation = createAppContainer(BottomNavigator)