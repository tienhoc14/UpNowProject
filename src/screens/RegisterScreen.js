import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { color } from '../assets/color'
import AppInput from '../components/AppInput'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
  const navigation = useNavigation()

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <View style={style.headerLogo}>
          <Image source={require('../assets/images/logo.png')} />
          <View style={style.dot} />
        </View>
        <View style={style.textWrapper}>
          <Text style={style.headerTitle}>UpNow</Text>
          <Text style={style.headerSlogan}>Digital Hypnotherapy</Text>
        </View>
      </View>

      <View style={style.body}>
        <View>
          <Text style={style.bodyTitle}>Register</Text>

          <View style={style.bodyForm}>
            <AppInput placeholder={'First name'}
              icon={<Ionicons name="person" size={20} color={color.icon} />} />
            <AppInput placeholder={'Last name'}
              icon={<Ionicons name="person" size={20} color={color.icon} />} />
            <AppInput placeholder={'Email'}
              icon={<Entypo name="mail" size={20} color={color.icon} />} />
            <AppInput placeholder={' Password'}
              icon={<Fontisto name={'locked'} size={20} color={color.icon} />} />
          </View>

          <View style={style.confirmWrapper}>
            <CheckBox
              tintColors={{ true: color.primaryColor, false: color.icon }}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={style.txtConfirm}>
              by clicking on “Register” you agree to our {"\n"}
              <Text style={{ color: color.primaryColor }}> Terms & Conditions </Text>and
              <Text style={{ color: color.primaryColor }}> Privacy Policy </Text>
            </Text>
          </View>
        </View>

        <View style={style.bottom}>
          <TouchableOpacity style={style.btnRegister} >
            <Text style={style.btnLabel}>Register</Text>
          </TouchableOpacity>

          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Outfit-Black',
              fontWeight: 400,
              fontSize: 15,
              color: color.whiteColor,
            }}>Already have an account?
            <Text style={style.txtLogin} onPress={() => navigation.goBack()} > Log In</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default RegisterScreen

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgound,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#2D8CFF',
  },
  headerLogo: {
    width: 50.35,
    height: 50.35,
    borderRadius: 79.14,
    backgroundColor: '#343542',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  dot: {
    width: 8.39,
    height: 8.39,
    backgroundColor: '#57C1EA',
    borderRadius: 5,
    position: 'absolute'
  },
  headerTitle: {
    fontFamily: 'Outfit-Black',
    fontWeight: 900,
    fontSize: 24,
    color: color.whiteColor,
  },
  headerSlogan: {
    fontFamily: 'Outfit-Black',
    fontWeight: 400,
    fontSize: 14.07,
    color: color.slogan,
  },
  textWrapper: {
    justifyContent: 'center'
  },
  bodyTitle: {
    fontFamily: 'Outfit-Black',
    fontWeight: 900,
    fontSize: 24,
    color: color.whiteColor,
    alignSelf: 'flex-start',
    marginLeft: 14,
    marginBottom: 28,
  },
  body: {
    marginHorizontal: 32,
    marginTop: 36,
    flex: 1,
    justifyContent: 'space-between'
  },
  txtConfirm: {
    fontFamily: 'Outfit-Black',
    fontWeight: 400,
    fontSize: 15,
    color: color.whiteColor,
    lineHeight: 22,
    marginLeft: 15,
  },
  confirmWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    marginBottom: 40,
  },
  btnRegister: {
    backgroundColor: color.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    borderRadius: 30,
    marginBottom: 26,
  },
  btnLabel: {
    color: color.whiteColor,
    fontFamily: 'Outfit-Black',
    fontWeight: 800,
    fontSize: 18,
  },
  txtLogin: {
    fontFamily: 'Outfit-Black',
    fontWeight: 700,
    fontSize: 15,
    color: color.primaryColor,
  }
})