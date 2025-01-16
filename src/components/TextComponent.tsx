import {  Text, StyleProp, TextStyle, Platform } from 'react-native'
import React from 'react'
import { globalStyles } from '../style/globalStyles';
import { appColor } from '../contstants/appColor';
import { fontFamilies } from '../contstants/fontFamilies';


interface Props {
    text: string; color?:string,size?:number;flex?:number;
    font?: string;
    styles?:StyleProp<TextStyle>;
    title?:boolean;
    numberOfLines?:number;
}
const TextComponent = (props:Props) => {
    const {text,color,size,flex,font,styles,title,numberOfLines} = props;
    const fontSizeDefault = Platform.OS === 'ios' ? 16 : 14;
  return (
    <Text 
    numberOfLines={numberOfLines}
    style={[
        globalStyles.text,
        {
            color: color ?? appColor.text,
            flex: flex ?? 0,
            fontSize: size ? size : title ? 24 :fontSizeDefault,
            fontFamily: font
            ? font
            : title
            ? fontFamilies.medium
            : fontFamilies.regular,
        },styles
    ]}>
        {text}
    </Text>
  )
}

export default TextComponent