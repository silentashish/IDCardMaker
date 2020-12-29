import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {AppHeader, Button, Divider, ResolutionGrid} from '../../Component';
import {formatDate, primaryColor} from '../../Utils';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-crop-picker';

const icons = [
  'red',
  'blue',
  'cadetblue',
  'aquamarine',
  'crimson',
  'darkslategrey',
  'firebrick',
  'maroon',
  'navy',
  'olivedrab',
  'purple',
  'teal',
];

const InputPart = ({
  title,
  style,
  onChangeText,
  value,
  placeholder,
  multiline,
  keyboardType,
}) => (
  <View style={styles.inputForm}>
    <Text style={styles.title}>{title}</Text>
    <Divider medium />
    <TextInput
      placeholder={placeholder}
      style={[styles.inputTxt, style]}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      placeholderTextColor={'gray'}
      multiline={multiline}
      keyboardType={keyboardType}
    />
  </View>
);

const InputForm = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setDOB(date);
    setError('');
  };

  const handleConfirmNxt = (date) => {
    hideDatePicker();
    setExpiryDate(date);
    setError('');
  };

  const [iconName, setIconName] = useState('red');

  const createResolution = async () => {
    props.navigation.navigate('IDCard', {
      teamId: '11',
      userId: '11',
      schoolLogo: schoolImage,
      name,
      schoolName,
      classroomEndDate: formatDate(expiryDate),
      schoolAddress,
      schoolEmail,
      profileImage: userImage,
      phone: contactNumber,
      classroom: '',
      grade,
      color: iconName,
    });
  };

  const [name, setName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [schoolEmail, setSchoolEmail] = useState('');
  const [schoolAddress, setSchoolAddress] = useState('');
  const [grade, setGrade] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [dob, setDOB] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState(new Date());

  const [details, setDetails] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [error, setError] = useState('');
  const [userImage, setUserImage] = useState(
    'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png',
  );
  const [schoolImage, setschoolImage] = useState(
    'https://i.pinimg.com/originals/70/34/1f/70341ff61825f30a9bf030c4d4458d2c.jpg',
  );

  const SelectUserImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then((image) => {
      setUserImage(image.path);
    });
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Enter Details" />

      <ScrollView>
        <View>
          <Divider medium />

          <TouchableOpacity style={styles.inputForm} onPress={SelectUserImage}>
            <Text style={styles.title}>User Image</Text>
            <Divider medium />
            {/* <View style={styles.inputTxt}> */}
            <Image
              style={{height: 150, width: 150, borderRadius: 5}}
              source={{uri: userImage}}
            />
            {/* </View> */}
          </TouchableOpacity>

          <Divider medium />

          <TouchableOpacity style={styles.inputForm} onPress={SelectUserImage}>
            <Text style={styles.title}>School Image</Text>
            <Divider medium />
            {/* <View style={styles.inputTxt}> */}
            <Image
              style={{height: 150, width: 150, borderRadius: 5}}
              source={{uri: schoolImage}}
            />
            {/* </View> */}
          </TouchableOpacity>

          <Divider medium />

          <View>
            <InputPart
              value={name}
              onChangeText={(text) => {
                setName(text);
                setError('');
              }}
              title="Name"
              placeholder="Enter Name"
              color="gray"
            />
          </View>

          <Divider medium />

          <View>
            <InputPart
              value={schoolName}
              onChangeText={(text) => {
                setSchoolName(text);
                setError('');
              }}
              title="School Name"
              placeholder="Enter School Name"
              color="gray"
              multiline
            />
          </View>

          <Divider medium />

          <View>
            <InputPart
              value={schoolEmail}
              onChangeText={(text) => {
                setSchoolEmail(text);
                setError('');
              }}
              title="School Email"
              placeholder="Enter School Email"
              color="gray"
              multiline
            />
          </View>

          <Divider medium />

          <View>
            <InputPart
              value={schoolAddress}
              onChangeText={(text) => {
                setSchoolAddress(text);
                setError('');
              }}
              title="School Address"
              placeholder="Enter School Address"
              color="gray"
              multiline
            />
          </View>

          <Divider medium />

          <View>
            <InputPart
              value={grade}
              onChangeText={(text) => {
                setGrade(grade);
                setError('');
              }}
              title="Grade"
              placeholder="Enter Grade"
              color="gray"
              multiline
            />
          </View>

          <Divider medium />

          <View>
            <InputPart
              value={contactNumber}
              onChangeText={(text) => {
                setContactNumber(text);
                setError('');
              }}
              title="Contact Number"
              placeholder="Enter Contact Number"
              color="gray"
              multiline
              keyboardType={'numeric'}
            />
          </View>

          <Divider medium />

          <TouchableOpacity style={styles.inputForm} onPress={showDatePicker}>
            <Text style={styles.title}>Date of Birth</Text>
            <Divider medium />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              date={deadline}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              minimumDate={new Date()}
            />
            <View style={styles.inputTxt}>
              <Text style={styles.date}>{formatDate(dob)}</Text>
            </View>
          </TouchableOpacity>

          <Divider medium />

          <TouchableOpacity style={styles.inputForm} onPress={showDatePicker}>
            <Text style={styles.title}>Expiry Date</Text>
            <Divider medium />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              date={deadline}
              onConfirm={handleConfirmNxt}
              onCancel={hideDatePicker}
              minimumDate={new Date()}
            />
            <View style={styles.inputTxt}>
              <Text style={styles.date}>{formatDate(expiryDate)}</Text>
            </View>
          </TouchableOpacity>

          <Divider medium />

          <TouchableOpacity style={styles.inputForm} onPress={showDatePicker}>
            <Text style={styles.title}>Color</Text>
            <Divider medium />
            <View style={styles.icons}>
              {icons.map((item) => (
                <TouchableOpacity
                  style={[
                    styles.iconWrap,
                    item === iconName
                      ? {borderWidth: 2, borderColor: '#fff'}
                      : null,
                  ]}
                  onPress={() => {
                    setIconName(item);
                    setError('');
                  }}>
                  <View
                    style={{backgroundColor: item, height: 50, width: 50}}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>

          <Divider medium />

          {error ? (
            <View style={styles.inputForm}>
              <Text style={styles.err}>* {error}</Text>
            </View>
          ) : null}

          <Button full width onPress={createResolution}>
            Create Resolution
          </Button>

          <Divider medium />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
  },
  inputForm: {
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#fcf8e8',
    fontSize: 18,
  },
  inputTxt: {
    height: 50,
    borderColor: '#fcf8e8',
    borderWidth: 2,
    borderTopLeftRadius: 0,
    borderRadius: 7,
    color: 'gray',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  date: {
    color: 'gray',
    fontSize: 14,
  },
  icons: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  iconWrap: {
    padding: 5,
  },
  err: {
    color: 'red',
  },
});

export {InputForm};
