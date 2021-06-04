import {StyleSheet} from 'react-native';
import {Color, ThemeUtils} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 100,
  },
  buttonCircle: {
    marginTop: 4,
    width: 40,
    height: 40,
    backgroundColor: Color.ORANGE,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  introImageStyle: {
    resizeMode:'contain',
    width: ThemeUtils.relativeWidth(75),
    height: ThemeUtils.relativeHeight(30),
    marginTop: 40,
  },
  dotStyle: {  
    backgroundColor: Color.GREY,
  },
  activeDotStyle: {
    backgroundColor: Color.ORANGE,
  },
});

export default styles;
