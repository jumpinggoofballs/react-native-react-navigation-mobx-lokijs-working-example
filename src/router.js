import React from 'react';
import { StackNavigator } from 'react-navigation';

import FriendsListPage from './Pages/FriendsListPage';
import ChatPage from './Pages/ChatPage';
import SettingsPage from './Pages/SettingsPage';
import AddNewFriendPage from './Pages/AddNewFriendPage';

export const AppRouter = StackNavigator({
    FriendsListPage: {
        screen: FriendsListPage
    },
    ChatPage: {
        screen: ChatPage
    },
    SettingsPage: {
        screen: SettingsPage
    },
    AddNewFriendPage: {
        screen: AddNewFriendPage
    }
},{
    initialRouteName: 'FriendsListPage',
    initialRouteParams: {
        appStore: this.appStore
    },
    headerMode: 'none',
});