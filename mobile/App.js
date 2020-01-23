import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';

import api from './src/services/api';

export default function App() {

  const [clients, setClients] = useState([]);
  const [cnpj, setCnpj] = useState('');

  useEffect(() => {
    // loadClients();
  }, []);

  async function loadClients() {

    const response = await api.get(`/clientes/${cnpj}`);

    setClients(response.data);
    setCnpj('');
  }

  return (
    <View style={styles.container}>

      <TextInput
          style={styles.searchForm}
          keyboardType="number-pad"
          placeholder="Faça sua busca com CNPJ"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          value={cnpj}
          onChangeText={setCnpj}
        />

      <TouchableOpacity onPress={loadClients} style={{padding:20, backgroundColor:'red'}}>
        <Text>Clicar</Text>
      </TouchableOpacity>

      <ScrollView>
        { clients.map((client) => (
          <TouchableOpacity key={client.cnpj} style={styles.card}>
            <Text style={styles.name}>{client.razao_social}</Text>
            <Text style={styles.name}>{client.cnpj}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17171b',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 150,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: 'rgba(0,0,0,.2)',
  },

  name: {
    fontSize: 16,
    color:'#fff',
    fontWeight: 'bold',
  },

  cpf: {
    color: '#999',
  },

  searchForm: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
    height: 70,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    color:'#17171b',
  }
});
