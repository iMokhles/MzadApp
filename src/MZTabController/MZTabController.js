import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import MZHomeScreen from "./MZScreens/MZHome/MZHomeScreen";
import MZNotificationsScreen from "./MZScreens/MZNotifications/MZNotificationsScreen";
import MZSearchScreen from "./MZScreens/MZSearch/MZSearchScreen";
import MZMessagesScreen from "./MZScreens/MZMessages/MZMessagesScreen";
import MZProfileScreen from "./MZScreens/MZProfile/MZProfileScreen";


const homeStack = StackNavigator({
    homeScreen: { screen: props => <MZHomeScreen {...props} /> },
}, {
    headerMode: 'none',
});

const notificationsStack = StackNavigator({
    notificationsScreen: { screen: props => <MZNotificationsScreen {...props} /> },
}, {
    headerMode: 'none',
});

const messagesStack = StackNavigator({
    messagesScreen: { screen: props => <MZMessagesScreen {...props} /> },
}, {
    headerMode: 'none',
});

const searchStack = StackNavigator({
    searchScreen: { screen: props => <MZSearchScreen {...props} /> },
}, {
    headerMode: 'none',
});

const profileStack = StackNavigator({
    profileScreen: { screen: props => <MZProfileScreen {...props} /> },
}, {
    headerMode: 'none',
});

export default (MZTabController = TabNavigator(
    {
        Home: { screen: homeStack },
        Notifications: { screen: notificationsStack },
        Messages: { screen: messagesStack },
        Search: { screen: searchStack },
        Profile: { screen: profileStack },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                } else if (routeName === 'Notifications') {
                    iconName = `ios-notifications${focused ? '' : '-outline'}`;
                } else if (routeName === 'Messages') {
                    iconName = `ios-chatbubbles${focused ? '' : '-outline'}`;
                } else if (routeName === 'Search') {
                    iconName = `ios-search${focused ? '' : '-outline'}`;
                } else if (routeName === 'Profile') {
                    iconName = `ios-contact${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Icon name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarPosition: "bottom",
        tabBarComponent: TabBarBottom,
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: true,
        swipeEnabled: false,
    }

));