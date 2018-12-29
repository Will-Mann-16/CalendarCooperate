import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import FriendsScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Footer, FooterTab, Button, Text } from 'native-base';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

const FriendsStack = createStackNavigator({
  Friends: FriendScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});


export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => (
      <Footer>
        <FooterTab>
          <Button
            vertical
            active={props.navigationState.index === 0}
            onPress={() => props.navigation.navigate("HomeStack")}>
            <Icon theme={{iconFamily: 'FontAwesome'}} name="Home"/>
            <Text>Home</Text>
          </Button>
          <Button
            vertical
            active={props.navigationState.index === 0}
            onPress={() => props.navigation.navigate("FriendsStack")}>
            <Icon theme={{iconFamily: 'FontAwesome'}} name="user-friends"/>
            <Text>Friends</Text>
          </Button>
          <Button
            vertical
            active={props.navigationState.index === 0}
            onPress={() => props.navigation.navigate("SettingsStack")}>
            <Icon theme={{iconFamily: 'FontAwesome'}} name="cog"/>
            <Text>Settings</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
});
