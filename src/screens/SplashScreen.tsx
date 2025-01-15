import { View, Text, ImageBackground, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { appInfo } from '../contstants/appInfo'
import { SpaceComponent } from '../components'
import { appColor } from '../contstants/appColor'

const SplashScreen = () => {
    return (
        <ImageBackground source={require('../assets/images/splash-img.png')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            imageStyle={{ flex: 1 }}
        >
            <Image
                source={require('../assets/images/logo.png')}
                style={{
                    width: appInfo.sizes.WIDTH * 0.7,
                    resizeMode: 'contain'
                }} />
            <SpaceComponent height={16} />
            <ActivityIndicator color={appColor.gray} size={22} />
        </ImageBackground>

    )
}

export default SplashScreen