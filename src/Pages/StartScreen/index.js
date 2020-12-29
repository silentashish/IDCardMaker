import React from 'react';
import {View, Text} from 'react-native';
// import {Button} from 'native-base';
import {styles} from './styles';
import LottieView from 'lottie-react-native';
import {Button, Divider} from '../../Component';
import {secondaryColor} from '../../Utils';

export default (props) => {
  const {navigation} = props;
  return (
    <View style={styles.mainView}>
      <View style={styles.centerElement}>
        <View>
          <Text style={[styles.bigText, {color: secondaryColor}]}>
            ID Card Maker
          </Text>
          <Divider />
          <Text style={styles.instruction}>
            Create attractive ID card for your school and college quickly and
            easily
          </Text>
        </View>

        <View style={styles.animationBox}>
          <LottieView
            source={require('../../assets/Animations/astro.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        </View>

        <Button onPress={() => navigation.navigate('CardScreen')}>
          Start Creating
        </Button>
      </View>
    </View>
  );
};
