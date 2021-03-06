import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './routes';
import {DrawerComponent, TopNav} from '../component';
import Profile from '../screen/Profile';
import DocumentScreen from '../screen/DocumentScreen';
import OderDetails, { OrderDetails } from '../screen/OrderDetails';
import CancelledOrderScreen from '../screen/OrderDetails/CancelledOrderScreen';
import TotalOrderScreen from '../screen/OrderDetails/TotalOrderScreen';
import RestaurantMapScreen from '../screen/RestaurantMapScreen';
import CustomerMapScreen from '../screen/CustomerMapScreen';
import DeliverScreen, { EarningScreen } from '../screen/EarningScreen';
import { Color } from '../utils';
import {TopNavEarning} from '../component';
import OrderCustomerDetails from '../screen/OrderCustomerDetails'
import Notifications from '../screen/Notifications';


const Stack = createStackNavigator();

const Authenticated = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Home}
        component={DrawerComponent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor:Color.ORANGE,
          },
          headerTintColor:Color.WHITE_SMOKE
        }}
        
      />
      <Stack.Screen
       name={Routes.DocumentScreen}
       component={DocumentScreen}
       options={{
         headerTitleAlign:'center',
         headerTitle:'Document',
         headerStyle: {
          backgroundColor:Color.ORANGE,
        },
        headerTintColor:Color.WHITE_SMOKE
       }}
       />
       <Stack.Screen
       name={Routes.OderDetails}
       component={TopNav}
       options={{
         headerTitleAlign:'center',
         headerStyle: {
          backgroundColor:Color.ORANGE,
        },
        headerTintColor:Color.WHITE_SMOKE
       }}/>
       
       <Stack.Screen 
       name={Routes.CancelledOrderScreen}
       component={CancelledOrderScreen}
       options={{headerShown:false}}/>
       <Stack.Screen
       name={Routes.TotalOrderScreen}
       component={TotalOrderScreen}
       options={{headerShown:false}}/>
       <Stack.Screen
        name={Routes.RestaurantMapScreen}
        component={RestaurantMapScreen}
        options={{
          title:"Live Track",
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor:Color.ORANGE,
          },
          headerTintColor:Color.WHITE_SMOKE
        }}
      />
        <Stack.Screen 
        name={Routes.CustomerMapScreen}
        component={CustomerMapScreen}
        options={{
          title:"Live Track",
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor:Color.ORANGE,
          },
          headerTintColor:Color.WHITE_SMOKE
        }}
       />
        <Stack.Screen
        name={Routes.EarningScreen}
        component={TopNavEarning}
        options={{
          headerTitleAlign:'center',
          headerTitle:'Earnings',
          headerStyle: {
            backgroundColor:Color.ORANGE,
          },
          headerTintColor:Color.WHITE_SMOKE
        }}
       />

       <Stack.Screen 
       name={Routes.OrderCustomerDetails}
       component={OrderCustomerDetails}
       options={
         {
           headerTitle:"Customer Order Details",
          headerStyle: {
            backgroundColor:Color.ORANGE,
          },
          headerTintColor:Color.WHITE_SMOKE,
          headerTitleAlign:'center'
         }
       } />

       <Stack.Screen 
        name={Routes.Notifications}
        component={Notifications}
        options={{
          headerTitle:"Notifications",
          headerStyle:{
            backgroundColor:Color.ORANGE,
          },
          headerTintColor:Color.WHITE_SMOKE,
          headerTitleAlign:'center'
        }}/>
    </Stack.Navigator>
  );
};

export default Authenticated;
