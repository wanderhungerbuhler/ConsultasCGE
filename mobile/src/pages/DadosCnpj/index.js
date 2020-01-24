import React from 'react';

import { View, Text } from 'react-native';

function DadosCnpj({ navigation }) {

  const clients = navigation.getParam('clients');

  return(
    <View>
      { clients.map(result => (
        <View key={result.cnpj}>
          <Text>{result.razao_social}</Text>
          <Text>{result.cnpj}</Text>
        </View>
      ))}
    </View>
  );
}

export default DadosCnpj;
