import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

export default function Moviments({data}) {
const [showValue, setShowValue] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
      <Text style={styles.date}>{data.date}</Text>
      
      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        {showValue ? (
            <Text style={data.type === 1 ? styles.value : styles.expenses}>
            {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}    
        </Text>

        ) : (
            <View style={styles.skeleton}>

            </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:24,
        borderBottomWidth:0.7,
        borderBottomColor:'#DADADA'
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:5,
        marginBottom:10,
    },
    date:{
        color:'#DADADA',
        fontWeigth:'bold',

    },
    label:{
        fontWeigth:'bold',
        fontSize:16,

    },
    value:{
        fontSize:16,
        color:'#2ecc71',
        fontWeigth:'bold'
    },
    expenses:{
        fontSize:16,
        color:'#e74c3c',
        fontWeigth:'bold'
    },
    skeleton:{
        marginTop:6,
        width:80,
        backgroundColor:'#DADADA',
        borderRadius:8
    }
})