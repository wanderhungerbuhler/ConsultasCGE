import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import api from './services/api';

export default class App extends Component {

  state = {
    clients: '',
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
    console.log(clients);

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.name}>A</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17171b',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  card: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,.7)',
    padding: 10,
  },

  name: {
    fontSize: 16,
    color:'red',
    fontWeight: 'bold',
  }
});
