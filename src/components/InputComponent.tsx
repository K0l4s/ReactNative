import React, { ReactNode, useState } from 'react';
import {
  KeyboardType,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { appColor } from '../contstants/appColor';
import { globalStyles } from '../style/globalStyles';
import { Eye, EyeSlash } from 'iconsax-react-native'
interface Props {
  value: string,
  onChange: (val: string) => void;
  affix?: ReactNode;
  placeholder?: string;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear?: boolean;
  type?: KeyboardType;
  onEnd?: () => void;
}

const InputComponent = (props: Props) => {
  const { value, onChange, affix, placeholder, suffix, isPassword, allowClear, type, onEnd } = props;

  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <View style={[styles.inputContainer]}>
      {affix ?? affix}
      <TextInput
        style={[styles.input, globalStyles.text]}
        value={value}
        placeholder={placeholder ?? ''}
        onChangeText={val => onChange(val)}
        secureTextEntry={isPassword && !isShowPassword}
        placeholderTextColor={'#747688'}
        keyboardType={type ?? 'default'}
        autoCapitalize="none"
        onEndEditing={onEnd}
      />
      {suffix ?? suffix}
      <TouchableOpacity
        onPress={
          // isPassword ? 
          // () => setIsShowPassword(!isShowPassword) 
          // :
          () => onChange('')
        }>
        {isPassword ? (
          // <FontAwesome 
          //   name={isShowPassword ? 'eye-slash':'eye'}
          //   size={22}
          //   color= {appColor.gray}
          // />

          isShowPassword ? (
            <EyeSlash size={22} color={appColor.gray} onPress={() => setIsShowPassword(false) 
            } />
          ) : (
            <Eye size={22} color={appColor.gray} onPress={() => setIsShowPassword(true)} />
          )
        ) : (
          value.length > 0 && allowClear && (
            <AntDesign
              name="close"
              size={22}
              color={appColor.text}
            />
          )
        )}
      </TouchableOpacity>
    </View>
  )
}

export default InputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColor.gray3,
    width: '100%',
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: appColor.white,
    marginBottom: 19,
  },
  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 14,
    color: appColor.text,
  }
});