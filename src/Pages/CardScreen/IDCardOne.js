import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {TextField, Divider, GlobalTheme, RoundAvatar} from '../../Component';
import {primaryColor} from '../../Utils';

const IDCardOne = ({route, loading}) => {
  const {
    userImage,
    teamId,
    userId,
    schoolLogo,
    name,
    schoolName,
    classroomEndDate,
    schoolAddress,
    schoolEmail,
    profileImage,
    phone,
    classroom,
    grade,
    color,
  } = route.params;
  const styles = _styles({color});
  const txt = `https://edigitalnepal.com/smsbeta/apis/v3/common/webview/student/profile?id=${userId}&teamId=${teamId}`;

  if (loading)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={35} color={GlobalTheme.darkBlueColor} />
      </View>
    );

  return (
    <View style={{flex: 1, backgroundColor: primaryColor}}>
      <View style={{backgroundColor: 'blue', width: '100%', flex: 1}}>
        <View style={styles.mainView}>
          <View style={styles.card}>
            <View style={styles.head}>
              {/* <TextField>Digital Card</TextField> */}
              <Divider big />
              <View style={styles.line} />
              <Image
                source={{uri: schoolLogo}}
                style={styles.logo}
                resizeMode={'contain'}
              />
              <Divider small />
              <TextField bold center style={{maxWidth: '65%'}} title>
                {schoolName}
              </TextField>
              <TextField bold center style={{maxWidth: '65%'}} secondarybody>
                {schoolAddress}
              </TextField>
              <TextField center style={{maxWidth: '65%'}} secondarybody>
                {schoolEmail}
              </TextField>
            </View>
            <Divider medium />
            <View style={styles.imageContain}>
              <View style={styles.crossView} />
              <RoundAvatar size={90} source={{uri: profileImage}} />
            </View>
            <View style={styles.infoDetail}>
              <Divider medium />
              <TextField
                bold
                center
                style={{maxWidth: '65%'}}
                medium
                color={GlobalTheme.whiteColor}>
                {name.toUpperCase()}
              </TextField>
              <TextField
                center
                style={{maxWidth: '65%'}}
                color={GlobalTheme.whiteColor}>
                (Student)
              </TextField>
              <Divider big />
              <View style={styles.info}>
                <View style={styles.names}>
                  <TextField regular bold color={GlobalTheme.whiteColor}>
                    Class : {classroom} ({grade})
                  </TextField>
                  <TextField regular bold color={GlobalTheme.whiteColor}>
                    Contact : {phone}
                  </TextField>
                  <TextField regular bold color={GlobalTheme.whiteColor}>
                    Valid upto : {classroomEndDate}
                  </TextField>
                </View>
                {/* <QRCode
              value={txt}
              backgroundColor={'transparent'}
              color={'white'}
            /> */}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const _styles = ({color}) => {
  return StyleSheet.create({
    mainView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
      backgroundColor: primaryColor,
    },
    card: {
      // backgroundColor: GlobalTheme.darkBlueColor,
      width: '90%',
      height: 550,
      alignItems: 'center',
      backgroundColor: '#fff',
      overflow: 'hidden',
      borderRadius: 6,
    },
    head: {width: '100%', alignItems: 'center'},
    line: {
      position: 'absolute',
      height: 80,
      width: 80,
      left: 0,
      top: 0,
      borderTopColor: color,
      borderLeftColor: color,
      borderRightColor: GlobalTheme.white,
      borderBottomColor: GlobalTheme.whiteColor,
      borderWidth: 8,
    },
    logo: {
      width: 200,
      height: 100,
    },
    imageContain: {
      height: 120,
      width: '100%',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
    crossView: {
      // width: '100%',
      position: 'absolute',
      // height: 100,
      // backgroundColor: color,
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderRightWidth: Dimensions.get('window').width * 0.9,
      borderTopWidth: 120,
      borderRightColor: 'transparent',
      borderTopColor: color,
      transform: [{rotate: '180deg'}],
    },
    infoDetail: {
      backgroundColor: color,
      // width: '100%',
      flex: 1,
      alignItems: 'center',
    },
    info: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
    },
    names: {
      flex: 1,
      justifyContent: 'center',
    },
  });
};

export {IDCardOne};
