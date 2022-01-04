import React from 'react'
import {Text, StyleSheet} from 'react-native'

const TitleText = (props) => {
    return (
        <Text style = {{...styles.title, ...props.style}}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
        color: 'red'
    }
})

export default TitleText
