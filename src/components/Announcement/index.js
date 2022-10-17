import { StyleSheet, View, ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'


export default function Announcement() {
  return (
    <View style={styles.container}>
        <View>
            <ImageBackground style={styles.item1} source={require('../../Images/76ERS-BANK.png')} />
        
            <ImageBackground style={styles.item2} source={require('../../Images/76ERS-BANK.png')} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:24,
    },
    item1:{
        height: 170,
        width:330,
        marginTop:-120,
        marginLeft:30,
        marginRight: 30,
        marginBottom: 50,
    },
    item2:{
        height: 170,
        width:330,
        marginLeft:30,
        marginRight: 30,
        marginBottom: 50,
    }
})