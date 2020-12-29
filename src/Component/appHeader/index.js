import React, {memo} from 'react';
import {View, Image, Text} from 'react-native';
import ShadowView from 'react-native-simple-shadow-view';
import {styles} from './styles';

const AppHeader = (props) => {
  return (
    <ShadowView style={styles.appHeader}>
      {props.title && <Text style={styles.title}>{props.title}</Text>}
      {props.subTitle && <Text style={styles.subTitle}>{props.subTitle}</Text>}
    </ShadowView>
  );
};

export default memo(AppHeader);
