import React, { Component } from 'react';
import { TextInput, StyleSheet } from "react-native";

const defaultInput = props => (
    <TextInput 
        {...props}//akses placeholder
        style={[styles.input, props.style]}//akses style dari auth js, akan menimpa seperti [...x, y]
    />
)

const styles = StyleSheet.create({
    input:{
        width:'100%',
        borderWidth: 1,
        // borderColor: '#eee',
        padding:5,
        margin:8
    }
})

export default defaultInput