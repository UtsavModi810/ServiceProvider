import {CommonActions} from '@react-navigation/routers';
import {DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {View} from 'react-native';
import {Avatar, Caption, Drawer, Title} from 'react-native-paper';
import Routes from '../../../routes/routes';
import styles from './style';
import {Color} from '../../../utils/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/FontAwesome5';
import User from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Ionicons'

 

export function DrawerContent(props) {

  const resetStack = CommonActions.reset({
    index: 0,
    routes: [{name: Routes.SplashScreen}],
  });
  const removeAuthentication = async () => {
    try {
      console.log('logout');
      await AsyncStorage.clear();
      props.navigation.dispatch(resetStack);
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <View style={{flex: 1, backgroundColor: Color.ORANGE}}>
      <View
        style={{flex: 1, flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Avatar.Image
          source={require('../../../assets/Img/profile_logo.png')}
          size={80}
          style={{marginTop:75}}
        />
        {/* <View style={{marginLeft: 10}}> */}
          <Title style={{fontSize:15, color: Color.WHITE}}>JOHN DOE</Title>
          <Caption style={{fontSize: 16, color: Color.WHITE}}>
            driverone@gmail.com
          </Caption>
        {/* </View> */}
      </View>

      <View
        style={{
          flex: 5,
          backgroundColor: Color.WHITE,
          padding: 15,
          borderTopStartRadius: 20,
          borderTopEndRadius: 12,
          marginTop:70
        }}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={() => (
              <Icon name="home-outline" color={Color.ORANGE} size={25} />
            )}
            label="Home"
            labelStyle={{fontSize:15, color: Color.PRIMARY_DARK}}
          />
          <DrawerItem
            icon={() => (
              <User name="user-o" color={Color.ORANGE} size={25} />
            )}
            label="My Profile"
            labelStyle={{fontSize:15, color: Color.PRIMARY_DARK}}
            onPress={() => props.navigation.navigate(Routes.Profile)}
          />
          <DrawerItem 
           icon = {()=>(
             <Icon name="book" color={Color.ORANGE} size={25}/>
           )} 
           label="Booking Detail"
           labelStyle = {{fontSize:15,color:Color.PRIMARY_DARK}}
           onPress={()=>props.navigation.navigate(Routes.OderDetails)}/>
          
          {/* <DrawerItem
            icon={() => (
              <Icon
                name="file-document-edit-outline"
                color={Color.ORANGE}
                size={25}
              />
            )}
            label="Documents"
            labelStyle={{fontSize:15, color: Color.ORANGE}}
            onPress={()=>props.navigation.navigate(Routes.DocumentScreen)}
          /> */}
          <DrawerItem
            icon={() => (
              <Icons name="coins" color={Color.ORANGE} size={25} />
            )}
            label="Earning"
            labelStyle={{fontSize:15, color: Color.PRIMARY_DARK}}
            onPress={()=>props.navigation.navigate(Routes.EarningScreen)}
          />
          <DrawerItem
            icon={() => (
              <Icon name="notifications-outline" color={Color.ORANGE} size={25} />
            )}
            label="Notifications"
            labelStyle={{fontSize:15, color: Color.PRIMARY_DARK}}
            onPress={()=>props.navigation.navigate(Routes.Notifications)}
          />
          <DrawerItem
            icon={() => (
              <Feather name="log-out" color={Color.ORANGE} size={25} />
            )}
            label="Log-Out"
            labelStyle={{fontSize:15, color: Color.PRIMARY_DARK}}
            onPress={()=>removeAuthentication()}
          />
        </Drawer.Section>
      </View>
    </View>
  );
}

export default DrawerContent;





