import {StyleSheet, Text, View, FlatList} from 'react-native'
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
    id:1,
    label: 'Boleto Casas Bahia',
    value: '250,00',
    date: '16/10/2022',
    type:0 //despesas
  },
  {
    id:2,
    label: 'Pix JOSOEL DA SILVA ALE',
    value: '1200,00',
    date: '15/10/2022',
    type:1 //Receita
  },
  {
    id:3,
    label: 'Salário',
    value: '3200,00',
    date: '07/10/2022',
    type:1 //Receita
  }
]

export default function App() {
  return (
    <View style={styles.container}>
        <Header name='Gabriel Cavalho'/>
        <Balance saldo="9.434,00" gastos="-274.32"/>

      <Actions/>
      
      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={(item) => String(item.id)}
      showsVerticallIndicator={false}
      renderItem={({item}) => <Moviments data={item}/>}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    margin:14
  },
  list:{
    marginStart:14,
    marginEnd:14,

  },
});