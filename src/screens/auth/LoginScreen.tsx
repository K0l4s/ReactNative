import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import ContainerComponent from '../../components/ContainerComponent'
import { ButtonComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { Image } from 'react-native'
import { Lock, Sms } from 'iconsax-react-native'
import { appColor } from '../../contstants/appColor'
import { Switch } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRemember, setIsRemember] = useState(true);
  const [isDisable, setIsDisable] = useState(true);
  const navigation: any = useNavigation();
  return (
    <ContainerComponent isImageBackground={true} isScroll>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 75,
        }}>
        <Image
          source={require('../../assets/images/text-logo.png')}
          style={{ width: 162, height: 114, marginBottom: 30, }} />
      </SectionComponent>
      <SectionComponent>
        <TextComponent size={24} title text="Sign In" />
        <SpaceComponent height={21} />
        <InputComponent
          value={email}
          placeholder='Email'
          onChange={val => setEmail(val)}
          allowClear
          affix={<Sms size={22} color={appColor.gray} />} />
        <InputComponent
          value={password}
          placeholder='Password'
          onChange={val => setPassword(val)}
          isPassword
          allowClear
          affix={<Lock size={22} color={appColor.gray} />} />
        <RowComponent justify='space-between'>
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              trackColor={{ true: appColor.primary }}
              thumbColor={appColor.white}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
            />
            <SpaceComponent width={4} />
            <TextComponent text="Remember me" />
          </RowComponent>
          <ButtonComponent
            text="Forgot Password?"
            onPress={() => navigation.navigate('Forgot Password')}
            type='text'
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent
          disable={isDisable}
          text="SIGN IN"
          type='primary'
        />
      </SectionComponent>
      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent text="Don't have an account?" />
          <ButtonComponent
            type="link"
            text="Sign Up"
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </RowComponent>
      </SectionComponent>
     </ContainerComponent>
  )
}

export default LoginScreen