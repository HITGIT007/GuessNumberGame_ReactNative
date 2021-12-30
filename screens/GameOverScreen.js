import React from 'react'
import {View, 
    Text, 
    StyleSheet, 
    Button, 
    TouchableWithoutFeedback,
    Keyboard,
    Alert} from 'react-native'
const GameOverScreen = (props) => {
    return (
        <View>
            <Text>The Game is over</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default GameOverScreen
