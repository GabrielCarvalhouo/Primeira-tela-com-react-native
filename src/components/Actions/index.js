import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import {AntDesign} from '@expo/vector-icons'

export default function Actions() {
  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.actionBottom}>
        <View style={styles.areaBottom}>
            <AntDesign name='addfolder' size={26} color='#000'/>
        </View>
        <Text style={styles.labelButtom}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionBottom}>
        <View style={styles.areaBottom}>
            <AntDesign name='tagso' size={26} color='#000'/>
        </View>
        <Text style={styles.labelButtom}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionBottom}>
        <View style={styles.areaBottom}>
            <AntDesign name='creditcard' size={26} color='#000'/>
        </View>
        <Text style={styles.labelButtom}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionBottom}>
        <View style={styles.areaBottom}>
            <AntDesign name='barcode' size={26} color='#000'/>
        </View>
        <Text style={styles.labelButtom}>Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionBottom}>
        <View style={styles.areaBottom}>
            <AntDesign name='setting' size={26} color='#000'/>
        </View>
        <Text style={styles.labelButtom}>Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionBottom}>
        <View style={styles.areaBottom}>
            <AntDesign name='question' size={26} color='#000'/>
        </View>
        <Text style={styles.labelButtom}>Dúvidas</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        maxHeight:84,
        marginBottom:14,
        marginTop:18,
        paddingStart:14,
        paddingEnd:14,
    },
    actionBottom:{
        alignItems:'center',
        marginRight:32,
    },
    areaBottom:{
        backgroundColor: '#ecf0f1',
        height:60,
        width:60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelButtom:{
        marginTop:4,
        textAlign: 'center',
        fontWeight: 'bold'
    }

})