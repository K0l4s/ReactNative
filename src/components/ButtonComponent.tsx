import { View, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../style/globalStyles';
import { appColor } from '../contstants/appColor';
import TextComponent from './TextComponent';
import { fontFamilies } from '../contstants/fontFamilies';
interface Props {
    icon?: ReactNode;
    text: string;
    type?: 'primary' | 'text' | 'link';
    color?: string;
    styles?: StyleProp<ViewStyle>;
    textColor?: string;
    textStyles?: StyleProp<TextStyle>;
    textFont?: string;
    onPress?: () => void;
    iconFlex?: 'right' | 'left';
    disable?: boolean;
}
const ButtonComponent = (props: Props) => {
    const { icon, text, type, color, styles, textColor, textStyles, textFont, onPress, iconFlex, disable } = props;
    return text === 'primary' ? (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
                disabled={disable}
                onPress={onPress}
                style={[
                    globalStyles.button,
                    globalStyles.shadow,
                    {
                        backgroundColor: color ?
                            color : disable ? appColor.gray4 : appColor.primary,
                        marginBottom: 17,
                        width: '90%',
                    },
                    styles,
                ]}>
                {icon && iconFlex === 'left' && icon}
                <TextComponent
                    text={text}
                    color={textColor ?? appColor.white}
                    styles={[
                        textStyles,
                        {
                            marginLeft: icon ? 12 : 0,
                            fontSize: 16,
                            textAlign: 'center',
                        },
                    ]}
                    flex={icon && iconFlex === 'right' ? 1 : 0}
                    font={textFont ?? fontFamilies.medium}
                />
                {icon && iconFlex === 'right' && icon}
            </TouchableOpacity>
        </View>)
        :
        (
            <TouchableOpacity onPress={onPress}>
                <TextComponent
                    flex={0}
                    text={text}
                    color={type === 'link' ? appColor.primary : appColor.text}
                    font={textFont ?? fontFamilies.medium}
                />
            </TouchableOpacity>
        )

}

export default ButtonComponent