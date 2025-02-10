import { View, TouchableOpacity, ImageBackground } from 'react-native'
import React, { ReactNode } from 'react'
import { useNavigation } from '@react-navigation/native';
import RowComponent from './RowComponent';
import { ArrowLeft } from 'iconsax-react-native';
import { appColor } from '../contstants/appColor';
import TextComponent from './TextComponent';
import { fontFamilies } from '../contstants/fontFamilies';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../style/globalStyles';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

interface Props {
    isImageBackground?: boolean;
    isScroll?: boolean;
    title?: string;
    children: ReactNode;
    back?: boolean;
}
const ContainerComponent = (props: Props) => {
    const { isImageBackground, isScroll, title, children, back } = props;
    const navigation: any = useNavigation();
    const headerComponent = () => {
        return (<View style={{ flex: 1, paddingTop: 30 }}>
            {(title || back) && (
                <RowComponent
                    styles={{
                        paddingHorizontal: 16,
                        paddingVertical: 10,
                        minWidth: 48,
                        minHeight: 48,
                        justifyContent: 'flex-start',
                    }}>
                    {back && (
                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{ marginRight: 12 }}>
                            <ArrowLeft size={24} color={appColor.text} />
                        </TouchableOpacity>
                    )}
                    {title ? (
                        <TextComponent
                            text={title}
                            size={16}
                            font={fontFamilies.medium}
                            flex={1} />
                    ) : (
                        <></>
                    )}
                </RowComponent>
            )}
        </View>)
    };
    const returnContainer = isScroll ? (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            {children}
        </ScrollView>) : (
        <View style={{ flex: 1 }}>
            {children}
        </View>
    );
    return isImageBackground ? (
        <ImageBackground
            source={require('../assets/images/onboarding-1.png')}
            style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}
            imageStyle={{ flex: 1 }}>
            <SafeAreaView style={[globalStyles.container, { flex: 1 }]}>
                <View>{headerComponent()}</View>
                {returnContainer}
            </SafeAreaView>
        </ImageBackground>
    ) : (
        <SafeAreaView style={[globalStyles.container]}>
            <View>{headerComponent()}</View>
            {returnContainer}
        </SafeAreaView>
    );
}

export default ContainerComponent