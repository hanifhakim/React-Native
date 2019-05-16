import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import startMainTabs from '../MainTabs/startMainTabs'

class AuthScreen extends Component {
    loginHandler= () => {
        startMainTabs()
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>Please Login</Text>
                <Button title='Switch to login'/>
                <View style={styles.inpuContainer}>
                    <DefaultInput placeholder='your email'style={styles.input}/>
                    <DefaultInput placeholder='your password'style={styles.input}/>
                    <DefaultInput placeholder='confirm password' style={styles.input}/>
                </View>
                <Button title='Login' onPress={this.loginHandler}/>
            </View>
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
        borderColor:'blue'
    }
})

export default AuthScreen