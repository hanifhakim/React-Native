import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const ButtonWithBG = props => (
    <TouchableOpacity onPress={props.onClick}>
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text>{props.children}</Text>
        </View>
    </TouchableOpacity>
)   

const styles = StyleSheet.create({
    button:{
        padding: 10,
        margin: 5
    }
})

export default ButtonWithBG