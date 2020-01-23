import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import api from './services/api';

export default class App extends Component {

  state = {
    clients: [],
    clientsInfo: {},
  }

  componentDidMount() {
    this.loadClients();
  }

  loadClients = async () => {
    const response = await api.get('/clientes');

    this.setState({ clients: response.data });
  }

  render() {

    const { clients } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>
          { clients.map((client) => (
            <TouchableOpacity key={client.id} style={styles.card}>
              <Text style={styles.name}>{client.nome} {client.sobrenome}</Text>
              <Text style={styles.cpf}>{client.cpf}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17171b',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
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
  }
});
