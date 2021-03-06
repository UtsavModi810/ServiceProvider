import {CommonActions} from '@react-navigation/routers';
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from '../../routes/routes';
import {Label, Status} from '../../component';
import {Color} from '../../utils/Color';

class SplashScreen extends React.Component {
  resetToAuth = CommonActions.reset({
    index: 0,
    routes: [
      {
        name: Routes.Authenticated,
      },
    ],
  });

  resetToNotAuth = CommonActions.reset({
    index: 0,
    routes: [
      {
        name: Routes.NotAuthenticated,
      },
    ],
  });

  componentDidMount() {
    this.checkAuthentication();
  }

  checkAuthentication = async () => {
    let isAuthenticated = await AsyncStorage.getItem('signup_data');
    if (isAuthenticated != null) this.goTo(true);
    else this.goTo(false);
  };
  goTo = value => {
    if (value) {
      setTimeout(() => {
        this.props.navigation.dispatch(this.resetToAuth);
      }, 2000);
    } else {
      setTimeout(() => {
        this.props.navigation.dispatch(this.resetToNotAuth);
      }, 2000);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Status hidden={true} />
        <Image
          source={require('../../assets/Img/logo.jpg')}
          style={styles.logo}
        />
        <View style={styles.footer}>
          <Label small color={Color.DARK_GRAYISH_BLUE} >
            By Team
          </Label>
          <Label small color={Color.DARK_GRAYISH_BLUE} mt={10}>
            24Seven Helper
          </Label>
        </View>
      </View>
    );
  }
}

export default SplashScreen;
