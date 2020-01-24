import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ACE2C3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    width: '100%',
  },

  // CARD DE RESULTADO
  boxCard: {
    flex: 2,
    paddingHorizontal: 20,
  },

  descCard: {
    borderRadius: 7,
    marginTop: 100,
    padding: 20,
    backgroundColor: '#fff',
  },

  textRazaSocial: {
    fontWeight: 'bold',
    color: '#242424',
    fontSize: 12,
  },

  descCnpj: {
    fontSize: 10,
    color: '#999',
  },

  textCnpj:{
    marginTop: 20,
    color: '#02A847',
    padding: 20,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 7,
    borderStyle: 'dashed',
    borderColor: '#02A847',
    textAlign: 'center',
  },

  btnAbout: {
    marginTop: 10,
    padding: 20,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#02A847',
  },

  // BOX DE PESQUISA
  containerSearch: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  boxSearchFarm: {
    width: 350,
    height: 190,
    bottom: -30,
    justifyContent: 'space-around',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    backgroundColor: '#fff',
  },

  searchForm: {
    height: 50,
    fontSize: 13,
    color:'#c4c4c4',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderColor: '#f5f5f5',
    borderRadius: 50,
    borderWidth: 1,
  },

  searchBtn: {
    height: 50,
    borderRadius: 50,
    backgroundColor: '#02A847',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchBtnText: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'#fff',
  },

});

export default styles;
