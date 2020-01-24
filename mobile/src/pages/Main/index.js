import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, KeyboardAvoidingView, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

function Main({ navigation }) {

  const [clients, setClients] = useState([]);
  const [cnpj, setCnpj] = useState('');

  async function loadClients() {

    const response = await api.get(`/clientes/${cnpj}`);

    setClients(response.data);
    setCnpj('');
  }

  return (
    <>
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={{ width: '100%' }} resizeMode="cover" source={require('../../assets/bg-header.png')} />
      </View>

      <View style={styles.boxCard}>
        <ScrollView>
          { clients.map((client) => (
            <TouchableOpacity key={client.cnpj} onPress={() => {
              navigation.navigate('DadosCnpj', { clients });
            }} style={styles.descCard}>
                <Text style={styles.textRazaSocial}>{client.razao_social}</Text>
                <Text style={styles.descCnpj}>Nome Fantasia: {client.nome_fantasia}</Text>
                <Text style={styles.descCnpj}>Situação Cadastral: {client.situacao_cadastral}</Text>
                <Text style={styles.descCnpj}>Data Início da Atividade: {client.data_inicio_atividade}</Text>
                <Text style={styles.textCnpj}>CNPJ: {client.cnpj}</Text>
                <Text style={styles.btnAbout}>Ver detalhes</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <KeyboardAvoidingView style={styles.containerSearch} behavior="padding">
        <View style={styles.boxSearchFarm}>
          <TextInput
              style={styles.searchForm}
              placeholder="Qual o CNPJ pretende consultar?"
              placeholderTextColor="#999"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid={'transparent'}
              autoFocus={true}
              value={cnpj}
              onChangeText={setCnpj}
              keyboardType="number-pad"
              // enablesReturnKeyAutomatically={true}
              // onKeyPress={loadClients}
            />

          <TouchableOpacity onPress={loadClients} style={styles.searchBtn}>
            <Text style={styles.searchBtnText}>Consultar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
    </>
  );

}

export default Main;
