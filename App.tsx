import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IonIcon from '@react-native-vector-icons/ionicons';
import {theme} from './src/themes/global.styles';
import {
  DashboardScreen,
  LoginScreen,
  ProductsScreen,
  OrdersScreen,
  AlertsScreen,
  ProfileScreen,
} from './src/screens';

export type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
  Products: undefined;
  Orders: undefined;
  Profile: undefined;
  Alerts: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const App = (): React.JSX.Element => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}
      theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Dashboard" component={DashboardScreen} />
              <Stack.Screen name="Products" component={ProductsScreen} />
              <Stack.Screen name="Orders" component={OrdersScreen} />
              <Stack.Screen name="Alerts" component={AlertsScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
};
