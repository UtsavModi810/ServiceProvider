import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { Text, View ,Image } from 'react-native'
import { Button, Label } from '../../component'
import { Color, ThemeUtils } from '../../utils'
import Icon from 'react-native-vector-icons/Ionicons'
import Routes from '../../routes/routes'
export class OrderCustomerDetails extends Component {
    render() {
        return (
            <SafeAreaView>
                <View>
                    <View style={{ flexDirection: 'row',
                    justifyContent:'space-evenly',
                    marginTop:20,
                    marginLeft:-6,
                    borderRadius: 10,
                   marginHorizontal:30,
                    shadowColor: Color.WHITE,
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,}}>
                        <Image source={require("../../assets/Img/time_logo.png")} style={{width:ThemeUtils.relativeWidth(30),height:ThemeUtils.relativeHeight(20),resizeMode:'contain',marginTop:-35}}/>
                        <View>
                        <Label large color={Color.PRIMARY_DARK}>Order ID#54</Label>
                        <Label small color={Color.DARK_GRAY} >Online Payment</Label>
                        <Label small color={Color.DARK_GRAY}>20Jan,2020  10:27AM </Label>
                        </View>
                        <View style={{marginTop:10,marginStart:40}}>
                        <Label large color={Color.PRIMARY_DARK}>₹299.00</Label>
                        <Label small color={Color.DARK_GRAY}>Items:2</Label>
                        </View>
                    </View>


                    <View style={{flexDirection:'row',marginStart:30}}>
                        {/* <Image source={require("../../assets/Img/person_logo.png")} style={{width:ThemeUtils.relativeWidth(20),height:ThemeUtils.relativeHeight(10)}} /> */}
                        <Icon name="person-circle" style={{color:Color.ORANGE}} size={30} color={Color.PRIMARY_DARK}/>
                        <Label  ms={20}  color={Color.PRIMARY_DARK} bolder xlarge>Customer Detail</Label>
                    </View>
 

                   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5,marginStart:30,marginHorizontal:30}}>
                       <Label normal color={Color.PRIMARY_DARK} mt={5}>Utsav Modi</Label>
                       <Icon name="person-circle" style={{color:Color.ORANGE}} size={25}/>
                   </View>

                   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5,marginStart:30,marginHorizontal:30}}>
                       <Label normal color={Color.PRIMARY_DARK} mt={5}>Rushika flat kiran park</Label>
                       <Icon name="location-sharp" style={{color:Color.ORANGE}} size={25}/>
                   </View>

                   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5,marginStart:30,marginHorizontal:30}}>
                       <Label normal color={Color.PRIMARY_DARK} mt={5}>98765 56412</Label>
                       {/* <Icon name="location-sharp" size={40}/> */}
                      <Image source={require("../../assets/Img/call_logo.png")} style={{marginRight:-7,width:ThemeUtils.relativeWidth(11),height:ThemeUtils.relativeHeight(7),resizeMode:'contain'}} />

                   </View>


                   <View style={{flexDirection:'row',marginStart:30,marginTop:10}}>
                        {/* <Image source={require("../../assets/Img/person_logo.png")} style={{width:ThemeUtils.relativeWidth(20),height:ThemeUtils.relativeHeight(10)}} /> */}
                        <Icon name="fast-food-outline" size={30} color={Color.ORANGE}/>
                        <Label  ms={20} color={Color.PRIMARY_DARK} bolder large>Booking Items</Label>
                    </View>
                


                    <View style={{ 
                    flexDirection: 'row',
                    justifyContent:'space-evenly',
                    padding:15,
                    borderRadius: 10,
                    shadowColor: Color.WHITE,
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,}}>
                        <Image source={require("../../assets/Img/acinstall1.jpg")} style={{width:ThemeUtils.relativeWidth(25),height:ThemeUtils.relativeHeight(10),resizeMode:'contain',borderRadius:20}}/>
                        <View>
                        <Label large color={Color.PRIMARY_DARK}>Ac Services</Label>
                        <Label small color={Color.DARK_GRAY} >Split AC</Label>
                        <Label small color={Color.DARK_GRAY}>Quantity</Label>
                        </View>
                        <View style={{marginTop:5,marginStart:40}}>
                        <Label large color={Color.PRIMARY_DARK}>₹299.00</Label>
                        <Label small mt={18} color={Color.DARK_GRAY}>Items:2</Label>
                        </View>
                    </View>
                   
                <View style={{ 
                    justifyContent:'space-evenly',
                    padding:10,
                    borderRadius: 10,
                    shadowColor: Color.WHITE,
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    // width: ThemeUtils.relativeWidth(95),
                    // height: ThemeUtils.relativeHeight(25),
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:25,marginTop:10}}>
                        <Label normal>Subtotal</Label>
                        <Label >₹299</Label>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:25}}>
                        <Label normal>Tax(10.0%)</Label>
                        <Label>₹20.00</Label>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:25}}>
                        <Label normal>Total</Label>
                        <Label>₹319.00</Label>
                    </View>
                     <View style={{marginTop:20}}>
                     <Button name="Start" onPress={()=>this.props.navigation.navigate(Routes.CustomerMapScreen)}/>
                     </View>
                </View> 

                    



                </View>
            </SafeAreaView>
        )
    }
}

export default  OrderCustomerDetails
