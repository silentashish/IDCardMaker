import {ScaledSheet} from 'react-native-size-matters';
import {primaryColor, secondaryColor, whiteColor} from '../../Utils';

export const styles = ScaledSheet.create({
  appHeader: {
    alignItems: 'center',
    // height: '44@ms',
    width: '100%',
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '6@ms',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  title: {
    fontSize: '16@ms',
    fontWeight: 'bold',
    color: whiteColor,
  },
  subTitle: {
    fontSize: '12@ms',
    fontWeight: 'bold',
    color: whiteColor,
  },
  icon: {
    height: '18@ms',
    width: '18@ms',
  },
  leftButton: {
    paddingLeft: '20@ms',
  },
  rightView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  leftButton: {
    height: '35@ms',
    width: '35@ms',
    justifyContent: 'center',
    marginLeft: '10@ms',
  },
  rightButton: {
    height: '35@ms',
    width: '35@ms',
    marginRight: '10@ms',
    justifyContent: 'center',
  },
  rightButton2: {
    height: '35@ms',
    width: '35@ms',
    justifyContent: 'center',
  },
});
