import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const Splash = () => {
    return (
        <ImageBackground
            resizeMode="cover"
            source={require('../../assets/splashScreen/background.png')}
            style={{
                flex: 1,
                alignContent: 'center',
                justifyContent: 'center'
            }}>
            <View style={Style.logo}>
                <Image source={require('../../assets/splashScreen/Vector.png')} />
            </View>

        </ImageBackground>

    );
}
export default Splash;

const Style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1

    },
    logo: {
        alignItems: 'center',
        
    }
})
