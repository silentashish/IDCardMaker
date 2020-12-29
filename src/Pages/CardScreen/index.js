import React from 'react';
import {View, Text} from 'react-native';
import {primaryColor} from '../../Utils';
import {IDCardOne} from './IDCardOne';
import {InputForm} from './InputForm';

const CardScreen = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: primaryColor}}>
      <View style={{backgroundColor: 'blue', width: '100%', flex: 1}}>
        {/* <IDCardOne data={data} /> */}
        <InputForm {...props} />
      </View>
    </View>
  );
};

export {CardScreen};
