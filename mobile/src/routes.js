import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import DadosCnpj from './pages/DadosCnpj';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        headerShown: false,
      },
    },
    DadosCnpj: {
      screen: DadosCnpj,
      navigationOptions: {
        title: '',
      },
    },
  },{
    defaultNavigationOptions: {
      headerTintColor: '#02A847',
      headerStyle: {
        backgroundColor: 'transparent',
        elevation: 0
      },
    },
  })
);

export default Routes;
