import React from 'react'
import {View, StyleSheet} from 'react-native'

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
        card: {
            
            //The Shadow property only works on iOS
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.5,
            backgroundColor: 'yellow',
            //For android add elevation
            elevation: 9,
            padding: 10,
            borderRadius: 10
        }
})
export default Card
