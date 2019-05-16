import React, { Component } from 'react'
import { View, Button, StyleSheet, ImageBackground } from 'react-native'

import startMainTabs from '../MainTabs/startMainTabs'

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import ButtonWithBG from '../../components/UI/ButtonWithBG/ButtonWithBG'
import imageBackground from '../../assets/react2.jpg'

class AuthScreen extends Component {
    loginHandler= () => {
        startMainTabs()
    }

    render () {
        return (
            
            <ImageBackground source={imageBackground} style={styles.imageBackground}>
                <View style={styles.container}>
                    <MainText><HeadingText>Login</HeadingText></MainText>
                    <ButtonWithBG color='grey'>
                        Switch to Login
                    </ButtonWithBG>
                    <View style={styles.inpuContainer}>
                        <DefaultInput placeholder='your email' style={styles.input} />
                        <DefaultInput placeholder='your password' style={styles.input} />
                        <DefaultInput placeholder='confirm password' style={styles.input} />
                    </View>
                    <ButtonWithBG color='grey' onClick={this.loginHandler} >
                        Login
                    </ButtonWithBG>
                    {/* <Button title='Login' onPress={this.loginHandler} /> */}
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inpuContainer:{
        width:'80%'
    },
    input:{
        width:'100%',
        // borderWidth:2,
        borderColor:'black'
    },
    imageBackground:{
        width: '100%',
        flex:1 //mengambil full layar
    }
})

export default AuthScreen