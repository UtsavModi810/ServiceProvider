import { Item } from 'native-base'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { FlatList } from 'react-native'
import { Text, View ,Image} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import { Label } from '../../component'
import { Color, ThemeUtils } from '../../utils'

export class Notifications extends Component {
    render() {
        return (
          <SafeAreaView>
              <View>
                  {/* <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:20,marginBottom:20,marginHorizontal:20}}>
                      <Icons name="notifications" size={40} />
                      <Label color={Color.PRIMARY_DARK} ms={40} xlarge bolder>Notifications</Label>
                  </View> */}
 
                  <FlatList
                    data={
                       [
                           {
                               id:1,
                               img:require("../../assets/Img/acinstall1.jpg"),
                               orderid:"Booking #01 was assigned to you",
                               date:"20jan,2020 10am-1pm"
                           },
                           {
                            id:2,
                            img:require("../../assets/Img/acrepair.jpg"),
                            orderid:"Booking #02 was assigned to you",
                            date:"20jan,2020 1pm-3pm"
                        },
                        {
                            id:3,
                            img:require("../../assets/Img/acbackground1.jpg"),
                            orderid:"Booking #03 was assigned to you",
                            date:"20jan,2020 4pm-6pm"
                        },
                       ]
                    }
                    renderItem={({item})=>(
                        <View style={{ 
                        flexDirection: 'row',
                        justifyContent:'space-evenly',
                        padding:20,
                        borderRadius: 10,
                        marginBottom: 10,
                        marginHorizontal: 10,
                        marginVertical: 10,
                        shadowColor: Color.WHITE_SMOKE,
                        shadowOffset: {
                          width: 0,
                          height: 5,
                        },
                        // width: ThemeUtils.relativeWidth(95),
                        // height: ThemeUtils.relativeHeight(25),
                        shadowOpacity: 0.34,
                        shadowRadius: 6.27,
                        elevation: 10,}}>
                            <Image source={item.img} style={{width:ThemeUtils.relativeWidth(20),height:ThemeUtils.relativeHeight(10),resizeMode:'contain',borderRadius:20}}/>
                            <View style={{marginHorizontal:20,marginTop:15}}>
                            <Label small color={Color.PRIMARY_DARK}>{item.orderid}</Label>
                            <Label small color={Color.DARK_GRAY}>{item.date}</Label>
                            </View>
                        </View>
                    )}
                   
                  />

              </View>



              
          </SafeAreaView>
        )
    }
}

export default Notifications
