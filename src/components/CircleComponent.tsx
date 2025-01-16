import { View,  StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import { appColor } from '../contstants/appColor';
interface Props {
    size?:number;
    children: ReactNode;
    color?: string;
    onPress?: ()=>void;
    styles?: StyleProp<ViewStyle>;
}
const CircleComponent = (props:Props) => {
    const {size, children, color, onPress, styles} = props;
    const localStyle:any = {
        width: size ?? 40,
        height: size ?? 40,
        backgroundColor: color ?? appColor.primary,
        justifyContent: 'center',
        borderRadius: 100
    };
    return onPress ? (
        <TouchableOpacity onPress={onPress} style={[localStyle, styles]}>
            {children}
        </TouchableOpacity>
    ) : (
        <View style={[localStyle, styles]}>
            {children}
        </View>
    );
}

export default CircleComponent