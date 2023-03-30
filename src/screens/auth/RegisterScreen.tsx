import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ActivityIndicator, Alert, Modal, Pressable } from 'react-native'
import React, { useCallback, useState } from 'react'
import { color } from '../../assets/color'
import AppInput from '../../components/AppInput'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { RegisterSchema } from '../../assets/validation'

const RegisterScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const [modalVisible, setModalVisible] = useState(false)
  const [titleModal, setTitleModal] = useState()

  const onHandleRegister = useCallback(
    async (firstName: string, lastName: string, email: string, password: string) => {
      setIsLoading(true)

      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          dispatch({
            type: 'LOGIN',
            payload: {
              email: userCredential.user.email,
              token: userCredential.user.uid
            }
          })
          navigation.replace('Drawer')
        })
        .catch((err) => {
          Alert.alert('Register fail', err.code)
          setIsLoading(false)
        })
    },
    [],
  )

  const onTogglePassword = useCallback(
    () => {
      setIsVisible(!isVisible)
    },
    [isVisible],
  )

  const onShowModal = useCallback(
    (title: string) => {
      setModalVisible(true)
      setTitleModal(title)
    },
    [modalVisible],
  )

  const onHideModal = useCallback(
    () => {
      setModalVisible(false)
    },
    [modalVisible],
  )


  const onPressLogin = useCallback(
    () => {
      navigation.goBack()
    },
    [],
  )

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <View style={style.headerLogo}>
          <Image source={require('../../assets/images/logo.png')} />
          <View style={style.dot} />
        </View>
        <View style={style.textWrapper}>
          <Text style={style.headerTitle}>UpNow</Text>
          <Text style={style.headerSlogan}>Digital Hypnotherapy</Text>
        </View>
      </View>

      <View style={style.body}>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: ''
          }}
          onSubmit={values => onHandleRegister(values.firstName, values.lastName, values.email, values.password)}
          validationSchema={RegisterSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <View>
                <Text style={style.bodyTitle}>Register</Text>

                <View style={style.bodyForm}>
                  <AppInput
                    value={values.firstName}
                    onChangeText={handleChange('firstName')}
                    placeholder={'First name'}
                    icon={<Ionicons name="person" size={20} color={color.icon} />} >
                    {errors.firstName && touched.lastName ? <Text style={style.txtConfirm}>{errors.firstName}</Text> : null}
                  </AppInput>
                  <AppInput
                    value={values.lastName}
                    onChangeText={handleChange('lastName')}
                    placeholder={'Last name'}
                    icon={<Ionicons name="person" size={20} color={color.icon} />} >

                    {errors.lastName && touched.lastName ? <Text style={style.txtConfirm}>{errors.lastName}</Text> : null}
                  </AppInput>
                  <AppInput
                    value={values.email}
                    onChangeText={handleChange('email')}
                    placeholder={'Email'}
                    icon={<Entypo name="mail" size={20} color={color.icon} />} >
                    {errors.email && touched.email ? <Text style={style.txtConfirm}>{errors.email}</Text> : null}
                  </AppInput>
                  <AppInput
                    secureTextEntry={!isVisible}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    placeholder={' Password'}
                    icon={<Fontisto name={'locked'} size={20} color={color.icon} />} >
                    <Ionicons name={isVisible ? "md-eye-outline" : "md-eye-off-outline"}
                      size={24} color={color.icon} onPress={onTogglePassword} />
                  </AppInput>
                  {errors.password && touched.password ? <Text style={style.txtConfirm}>{errors.password}</Text> : null}
                </View>

                <View style={style.confirmWrapper}>
                  <CheckBox
                    tintColors={{ true: color.primaryColor, false: color.icon }}
                    onTintColor={color.primaryColor}
                    onCheckColor={color.primaryColor}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                  />
                  <Text style={style.txtConfirm}>
                    by clicking on “Register” you agree to our {"\n"}
                    <Text
                      onPress={() => onShowModal('Terms & Conditions')}
                      style={{ color: color.primaryColor }}> Terms & Conditions </Text>and
                    <Text
                      onPress={() => onShowModal('Privacy Policy')}
                      style={{ color: color.primaryColor }}> Privacy Policy </Text>
                  </Text>
                </View>
              </View>

              <View style={style.bottom}>
                <TouchableOpacity
                  disabled={toggleCheckBox ? false : true}
                  onPress={handleSubmit}
                  style={[style.btnRegister,
                  { backgroundColor: toggleCheckBox ? color.primaryColor : color.inputBG, }]} >
                  {isLoading ? <ActivityIndicator size={'large'} color={color.whiteColor} />
                    : <Text style={style.btnLabel}>Register</Text>}
                </TouchableOpacity>

                <Text
                  style={style.txtAccount}>Already have an account?
                  <Text style={style.txtLogin} onPress={onPressLogin} > Log In</Text>
                </Text>
              </View>
            </>
          )}

        </Formik>
      </View>

      {/* Modal */}
      <Modal
        animationType='slide'
        visible={modalVisible}
        transparent={true}
        onRequestClose={onHideModal}>
        <View style={style.modalCentered}>
          <View style={style.modalView}>
            <View style={style.modalHeader}>
              <Text style={style.txtModalTitle}>{titleModal}</Text>
              <AntDesign name="closecircle" size={24} color={color.primaryColor}
                style={style.iconClose}
                onPress={onHideModal} />
            </View>

            <View style={style.modalBody}>

            </View>
          </View>
        </View>
      </Modal>

    </SafeAreaView >
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
    borderBottomColor: color.slogan,
  },
  headerLogo: {
    width: 50.35,
    height: 50.35,
    borderRadius: 79.14,
    backgroundColor: color.appLogoBG,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  dot: {
    width: 8.39,
    height: 8.39,
    backgroundColor: color.appDot,
    borderRadius: 5,
    position: 'absolute'
  },
  headerTitle: {
    // fontFamily: 'Outfit-Black',
    fontWeight: 900,
    fontSize: 24,
    color: color.whiteColor,
  },
  headerSlogan: {
    // fontFamily: 'Outfit-Black',
    fontWeight: 400,
    fontSize: 14.07,
    color: color.slogan,
  },
  textWrapper: {
    justifyContent: 'center'
  },
  bodyTitle: {
    // fontFamily: 'Outfit-Black',
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
    // fontFamily: 'Outfit-Black',
    fontWeight: 400,
    fontSize: 15,
    color: color.whiteColor,
    lineHeight: 22,
  },
  confirmWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bottom: {
    marginBottom: 40,
  },
  btnRegister: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    borderRadius: 30,
    marginBottom: 26,
  },
  btnLabel: {
    color: color.whiteColor,
    // fontFamily: 'Outfit-Black',
    fontWeight: 800,
    fontSize: 18,
  },
  txtLogin: {
    // fontFamily: 'Outfit-Black',
    fontWeight: 700,
    fontSize: 15,
    color: color.primaryColor,
  },
  // modal
  modalCentered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: color.whiteColor,
    borderRadius: 20,
    width: '90%',
    height: '75%'
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  txtAccount: {
    alignSelf: 'center',
    fontWeight: 400,
    fontSize: 15,
    color: color.whiteColor,
  },
  txtModalTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  iconClose: {
    position: 'absolute',
    right: 10
  }
})