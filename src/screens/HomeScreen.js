import React from 'react'
import { View, Text, StyleSheet,ScrollView } from 'react-native'


export default function HomeScreen(){

    return(
        <View style ={styles.container}>
            <Text>Hello HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{flex:1,alignItems:"center",justifyContent:"center"}
})