import React, {useState} from 'react';
import {View, Image, TouchableOpacity, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import Routes from '../../routes/routes';
import {Label} from '../../component/index';
import {Color} from '../../utils/Color';
import styles from './style';

const Onboarding = ({navigation}) => {
  const slides = [
    {
      key: 's1',
      title: 'Advanced Cleaning',
      text: 'Experience a expertise Cleaning Services in different Category',
      image: require('../../assets/Img/slider1.png'),
    },
    {
      key: 's2',
      title: 'A Long-Lasting Work',
      text: 'We are not just building. We are create',
      image: require('../../assets/Img/slider2.png'),
    },
    {
      key: 's3',
      title: 'We want drain your checkbook',
      text: 'Experience a expertise Cleaning Services in different Category',
      image: require('../../assets/Img/slider3.png'),
    },
  ];

  const onDone = () => {
    props.onDone();
  };

  const RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-right" style={{fontSize: 25, color: Color.WHITE}} />
      </View>
    );
  };

  const RenderDoneButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(Routes.Login)}>
        <View style={styles.buttonCircle}>
          <Icon
            name="thumbs-up"
            style={{fontSize: 25, fontWeight: 'bold', color: Color.WHITE}}
          />
        </View>
      </TouchableOpacity>
    );
  };
  const RenderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image style={styles.introImageStyle} source={item.image} />
        <Label
          xlarge
          bolder
          color={Color.ONBOARDING_TEXT}
          align="center"
          letterSpacing={1}>
          {item.title}
        </Label>

        <View style={{marginHorizontal: 20}}>
          <Label align="center" large color={Color.ONBOARDING_TEXT} mb={10}>
            {item.text}
          </Label>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar hidden={true} />
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={onDone}
        renderDoneButton={RenderDoneButton}
        renderNextButton={RenderNextButton}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      />
    </View>
  );
};

export default Onboarding;
