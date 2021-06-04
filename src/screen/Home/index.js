import {CommonActions} from '@react-navigation/routers';
import React, {Component} from 'react';
import {Modal, View, Image, TouchableOpacity} from 'react-native';
import {
  Button,
  Card,
  Header,
  InputText,
  Label,
  Section,
  SocialButton,
  Status,
} from '../../component/index';
import Routes from '../../routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './style';
import {SafeAreaView} from 'react-native';
import {Color, ThemeUtils} from '../../utils';
import {Col, Switch} from 'native-base';
import color from 'color';
import {Marker} from 'react-native-maps';
import MapView from 'react-native-maps';
import { TextInput } from 'react-native';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      modelshow: false,
      toggle: false,
    };
  }

  resetStack = CommonActions.reset({
    index: 0,
    routes: [{name: Routes.SplashScreen}],
  });
  removeAuthentication = async () => {
    try {
      console.log('logout');
      await AsyncStorage.clear();
      this.props.navigation.dispatch(this.resetStack);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <SafeAreaView>
        <Status hidden={true} />
        <Header
          onPress={() => this.props.navigation.openDrawer()}
          Headertext="DashBoard"
          name="menu"
          iconName="notifications"
          onClick={() =>this.props.navigation.navigate(Routes.Notifications)}
        />
        {/* <Button name="Logout" onPress={() => this.removeAuthentication()} /> */}

        <View>

        <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        {/* <Header></Header> */}
        <Status hidden={true} />
        <MapView
          style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
          showsUserLocation={false}
          zoomEnabled={true}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: 28.57966,
            longitude: 77.32111,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker coordinate={{latitude: 28.57966, longitude: 77.32111}} />
        </MapView>
        </View>
        <View>  
            <View
              style={{
                height: ThemeUtils.relativeHeight(20),
                width: ThemeUtils.relativeWidth(90),
                borderRadius: 10,
                backgroundColor: '#fff',
                elevation: 15,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.5,
                shadowRadius: 2,
                shadowColor: '#000',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop:480,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={{flexDirection: 'row',marginRight:50}}>
                  <Image
                    source={require('../../assets/Img/profile_logo.png')}
                    style={{
                      width: ThemeUtils.relativeHeight(10),
                      height: ThemeUtils.relativeHeight(10),
                      // marginLeft: 20,
                      // marginRight:50,
                      // marginTop: 10,
                    }}
                  />
                  <View style={{flexDirection:'column'}}>
                  <Label ms={20} large color={Color.PRIMARY} >
                    JOHN DON
                  </Label>
                  <Label ms={20} small color={Color.PRIMARY_DARK}>11:30 AM</Label>
                  <Label ms={20} xsmall color={Color.DARK_GRAY}>Location</Label>
                  </View>
                </View>
                <Switch
                  trackColor={{false: 'gray', true: 'green'}}
                  thumbColor={this.state.toggle ? Color.PRIMARY : Color.BOX_BG}
                  onValueChange={value =>
                    this.setState({
                      toggle: value,show:true
                    })
                  }
                  value={this.state.toggle}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: 10,
                }}>
                <Label small color={Color.PRIMARY_DARK} me={55} >Earned From Last Booking</Label>
                <Label small color={Color.PRIMARY}>₹400.00</Label>
              </View>
            </View>
            {/* <View style={{marginHorizontal:20,marginTop:10}}>
              <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                  <Image source={require("../../assets/Img/right_logo.png")} style={{width:ThemeUtils.relativeWidth(15),height:ThemeUtils.relativeHeight(10)}} />
                  <Label>80%</Label>
                  <Label>Acceptance</Label>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                  <Image source={require("../../assets/Img/star_logo.png")} style={{width:ThemeUtils.relativeWidth(15),height:ThemeUtils.relativeHeight(10)}} />
                  <Label>4.5</Label>
                  <Label>Rating</Label>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                  <Image source={require("../../assets/Img/close_logo.png")} style={{width:ThemeUtils.relativeWidth(11),height:ThemeUtils.relativeHeight(6)}} />
                 
                  <Label>3</Label>
                  <Label>Cancelled</Label>
                 
                </View>
                
              </View>

            </View>   // safg */}

            {/* <TouchableOpacity></TouchableOpacity> */}
          </View>
        </View>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.show}>
          <View style={{backgroundColor: '#000000aa', flex: 1}}>
            <View
              style={{
                flex: 1,
                backgroundColor: Color.WHITE,
                borderRadius: 25,
                margin: 25,
              }}>
              <Image
                source={require('../../assets/Img/boy_logo.jpg')}
                style={{
                  width: 100,
                  height: 100,
                  alignSelf: 'center',
                  margin: 25,
                  marginTop: 30,
                }}
              />
              <Label align="center" xxlarge color={Color.PRIMARY}>
                New Booking
              </Label>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: 30,
                }}>
                <View>
                  <Label large color={Color.PRIMARY_DARK}>
                    Expected Earning
                  </Label>
                  <Label large color={Color.DARK_GRAY}>
                  ₹300.00
                  </Label>
                </View>
                <View>
                  <Label large color={Color.PRIMARY_DARK}>
                    Trip Distance
                  </Label>
                  <Label large color={Color.DARK_GRAY}>
                    2.25km
                  </Label>
                </View>
              </View>
              <View style={{marginTop: 30, justifyContent: 'center'}}>
                <Label ms={30} xlarge>
                  Customer Address
                </Label>
                {/* <Image source={require("../../assets/Img/mcD_logo.png")} style={{width:ThemeUtils.relativeWidth(30),height:ThemeUtils.responsiveHeight(50)}}/> */}
                <Label ms={30} mt={20} small color={Color.DARK_GRAY}>
                  404 XYZ ,Ahmedabad,Gujarat,India
                </Label>
                <Label ms={30} small color={Color.DARK_GRAY}>
                  {' '}
                  Phone Number : +91 98790 13454
                </Label>
              </View>

              <View style={{marginTop: 20, justifyContent: 'center'}}>
                <Label ms={30} xlarge>
                  Booking Detail
                </Label>
                {/* <Image source={require("../../assets/Img/mcD_logo.png")} style={{width:ThemeUtils.relativeWidth(30),height:ThemeUtils.responsiveHeight(50)}}/> */}
                <Label ms={30} mt={20} small color={Color.DARK_GRAY}>
                   AC Installtion & Uninstallation
                </Label>
                <Label ms={30} small color={Color.DARK_GRAY}>
                  Split AC
                </Label>
                <Label ms={30} small color={Color.DARK_GRAY}>
                  Quantity : Item-1
                </Label>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginHorizontal:5,
                  // paddingBottom: 15,
                  marginTop: 20,
                }}>
                <SocialButton
                  btntext="Accept"
                  onPress={() =>
                    this.props.navigation.navigate(Routes.OrderCustomerDetails)
                  }
                  source={require('../../assets/Img/right_logo.png')}
                />
                <SocialButton
                  btntext="Decline"
                  source={require('../../assets/Img/cancel_logo.png')}
                  onPress={() => this.setState({modelshow: true, show: false})}
                />
              </View>
            </View>
          </View>
        </Modal>

        <Modal  visible={this.state.modelshow} transparent={true}>
                   <View style={{backgroundColor:"#000000aa",flex:1,justifyContent:'center',alignItems:'center'}}>
                       <View style={{height:ThemeUtils.relativeHeight(50),width:ThemeUtils.relativeWidth(90),backgroundColor:"#ffffff",borderRadius:10}}>
                         <Label mt={75} large align="center" color={Color.PRIMARY_DARK} me={20}>
                           Write Specific Reason for not Booking
                         </Label>
                         <View style={{marginTop:25}}>
                         {/* <TextInput placeholder="Type Something Here"/> */}
                         <InputText placeholder="Type Something Here "/>
                         <View style={{marginTop:20}}>
                         <Button  name="Send" onPress={()=>this.props.navigation.push(Routes.Home)}/>
                         </View>
                         </View> 
                       </View>
                   </View>
               </Modal>
      </SafeAreaView>
    );
  }
}
export default Home;