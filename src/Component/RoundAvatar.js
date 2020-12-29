import React from 'react';
import {Image} from 'react-native';

import {ScaledSheet} from 'react-native-size-matters';

/*
props
source (required): same as source of react native Image
size (required): size of image
*/

const RoundAvatar = (props) => {
  const styles = _styles(props);
  const {source} = props;
  return <Image source={source} style={styles.img} resizeMode="cover" />;
};

const _styles = ({size}) => {
  return ScaledSheet.create({
    img: {
      height: `${size}@vs`,
      width: `${size}@vs`,
      borderRadius: `${size / 2}@vs`,
    },
  });
};

export {RoundAvatar};
