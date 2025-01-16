import React from 'react'
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import { appColor } from '../contstants/appColor';
import { ArrowRight2 } from 'iconsax-react-native';
interface Props {
    title: string;
    onPress: () => void;
}
const TagBarComponent = (props: Props) => {
    const { title, onPress } = props;
    return (
        <RowComponent onPress={onPress}
            styles={{ marginBottom: 12, paddingHorizontal: 16 }}>
            <TextComponent numberOfLines={1} size={18} title text={title} flex={1} />
            <RowComponent>
                <TextComponent text="See All" color={appColor.gray} />
                <ArrowRight2 variant="Bold" size={24} color={appColor.gray} />
            </RowComponent>
        </RowComponent>
    )
}

export default TagBarComponent