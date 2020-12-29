import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const ButtonCard = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export {ButtonCard};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    // backgroundColor: 'blue',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
