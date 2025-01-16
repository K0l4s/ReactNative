import { StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../style/globalStyles';
import { appColor } from '../contstants/appColor';
interface Props {
    children: ReactNode;
    bgColor?: string,
    styles?: StyleProp<ViewStyle>;
}
const CardComponent = (props:Props) => {
    const { children, bgColor, styles } = props;
  return (
    <TouchableOpacity 
    style={[
        globalStyles.shadow,
        globalStyles.card,
        {
            backgroundColor: bgColor ?? appColor.white,
        },
        styles,
    ]}>
        {children}
    </TouchableOpacity>
  )
}

export default CardComponent