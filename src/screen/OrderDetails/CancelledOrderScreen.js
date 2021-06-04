import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Header, Label} from '../../component';
import Routes from '../../routes/routes';
import {Color, CommonStyle, ThemeUtils} from '../../utils';

export class CancelledOrderScreen extends Component {
  render() {
    return (
      <View>
        {/* <Header
          Headertext="OrderDetails"
          name="chevron-back"
          iconName="notifications"
          onPress={() => this.props.navigation.push(Routes.Home)}
        /> */}

        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: Color.BOX_BG,
            paddingVertical: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.push(Routes.OderDetails);
            }}>
            <Label large>Deliverd</Label>
          </TouchableOpacity>
          <View style={CommonStyle.order_details_border}>
            <Label align="center" color={Color.PRIMARY} large>
              Canceled
            </Label>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.push(Routes.TotalOrderScreen)}>
            <Label large>Total</Label>
          </TouchableOpacity>
        </View> */}

        <View>
          <FlatList
            data={[
              {
                id: 1,
                OrderId: 'ORD12456789',
                image: require('../../assets/Img/profile_logo.png'),
                Time:"10am-1pm",
                icon:require('../../assets/Img/time_logo.png'),
                TotalItem: 'AC Services Split AC',
                Item: 'Item-1',
                Location: 'Rushika flat kiran park \nAhmedabad-380015',
                date:"jan 20,2020"

              },
              {
                id: 2,
                OrderId: 'ORD12456789',
                image: require('../../assets/Img/profile_logo.png'),
                Time:"10:30AM",
                icon:require('../../assets/Img/time_logo.png'),
                Item: 'Item-2',
                TotalItem: 'AC Serivcec Window AC',
                Location: '11/B , Vesu Ahmedabad-380012',
                date:"jan 20,2020"

              },
                        ]}
            renderItem={({item}) => (
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    borderRadius: 10,
                    marginBottom: 10,
                    marginHorizontal: 10,
                    marginVertical: 10,
                    shadowColor: Color.WHITE,
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    width: ThemeUtils.relativeWidth(95),
                    height: ThemeUtils.relativeHeight(25),
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={item.image}
                      style={{
                        height:ThemeUtils.relativeHeight(10),
                        width:ThemeUtils.relativeWidth(20),
                        marginTop: 20,
                        marginStart: 20,
                        resizeMode:'contain',
                      }}
                    />
                    <View style={{marginTop: 10}}>
                      <Label ms={20} mt={10} large color={Color.PRIMARY_DARK}>
                        {item.OrderId}
                      </Label>
                      <Label ms={20} mt={10} small color={Color.DARK_GRAY}>
                        {item.TotalItem}
                      </Label>
                      <Label ms={20} mt={10} small color={Color.DARK_GRAY}>
                        {item.Item}
                      </Label>
                      <Label ms={20} mt={10} small  color={Color.DARK_GRAY} >
                        {item.Location}
                      </Label>
                      <View style={{flexDirection:'row'}}>
                       <Label ms={20} mt={10} small  color={Color.PRIMARY_DARK}>{item.date}</Label> 
                      <Image source={item.icon} style={{
                        width: 50,
                        height: 50,
                        marginStart:10
                      }}/>
                     <Label  mt={10}>{item.Time}</Label>
                     {/* <Image source={item.icon} style={{
                       width: 50,
                       height: 50,
                       marginStart:100
                      }} /> */}
                     </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}

export default CancelledOrderScreen;
