import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Image } from 'react-native';
import { Button, TextInput } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GestureHandlerScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomePage = ({ navigation }) => {
  return (
    <><View style={styles.container}>
      <TextInput
        variant='outlined'
        style={styles.inputText} />
      <TouchableOpacity style={styles.button}>
        <Icon name='search' size={45} color={"black"} />
      </TouchableOpacity>
    </View><Text style={styles.textTittle}>Página Inicial</Text><ScrollView>
        <View style={styles.containerScrollView}>
          <View style={styles.container}>
            <Image source={require('./assets/chapeu-de-graduacao.png')} style={styles.image} />
            <Text style={styles.textTittleScroll}>Melhores Matches</Text>
          </View>
          <ScrollView style={styles.scrollViewStyles} nestedScrollEnabled>
            <View style={styles.blocksProjects}>
              <Text style={styles.blocksProjectsTittle}>Projeto 1</Text>
              <Text style={styles.blocksProjectsSubTittle}>ICT responsavel</Text>
              <Text style={styles.blocksProjectsTags}>keywords, blah blah</Text>
              <TouchableOpacity style={styles.blocksProjectsButton}>
                <Icon name='keyboard-arrow-right' size={45} color={"white"} />
              </TouchableOpacity>
            </View>
            <View style={styles.blocksProjects}>
              <Text style={styles.blocksProjectsTittle}>Projeto 1</Text>
              <Text style={styles.blocksProjectsSubTittle}>ICT responsavel</Text>
              <Text style={styles.blocksProjectsTags}>keywords, blah blah</Text>
              <TouchableOpacity style={styles.blocksProjectsButton}>
                <Icon name='keyboard-arrow-right' size={45} color={"white"} />
              </TouchableOpacity>
            </View>
            <View style={styles.blocksProjects}>
              <Text style={styles.blocksProjectsTittle}>Projeto 1</Text>
              <Text style={styles.blocksProjectsSubTittle}>ICT responsavel</Text>
              <Text style={styles.blocksProjectsTags}>keywords, blah blah</Text>
              <TouchableOpacity style={styles.blocksProjectsButton}>
                <Icon name='keyboard-arrow-right' size={45} color={"white"} />
              </TouchableOpacity>
            </View>
            <View style={styles.blocksProjects}>
              <Text style={styles.blocksProjectsTittle}>Projeto 1</Text>
              <Text style={styles.blocksProjectsSubTittle}>ICT responsavel</Text>
              <Text style={styles.blocksProjectsTags}>keywords, blah blah</Text>
              <TouchableOpacity style={styles.blocksProjectsButton}>
                <Icon name='keyboard-arrow-right' size={45} color={"white"} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View style={styles.container}>
          <Image source={require('./assets/chapeu-de-graduacao.png')} style={styles.imageCategories} />
          <Text style={styles.textTittle}>Categorias</Text>
        </View>

        <View style={styles.containerFlexBox}>
          <View>
            <TouchableOpacity style={styles.blocksCategoriesButton}>
              <Image source={require('./assets/no-mundo-todo.png')} style={styles.imageIconsCategories} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.blocksCategoriesButton}>
              <Image source={require('./assets/computador-pessoal.png')} style={styles.imageIconsCategories} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.blocksCategoriesButton}>
              <Image source={require('./assets/grafico-de-barras.png')} style={styles.imageIconsCategories} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.blocksCategoriesButton}>
              <Image source={require('./assets/no-mundo-todo.png')} style={styles.imageIconsCategories} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.blocksCategoriesButton}>
              <Image source={require('./assets/computador-pessoal.png')} style={styles.imageIconsCategories} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.blocksCategoriesButton}>
              <Image source={require('./assets/grafico-de-barras.png')} style={styles.imageIconsCategories} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.blocksCategoriesButton}>
              <Image source={require('./assets/no-mundo-todo.png')} style={styles.imageIconsCategories} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.blocksCategoriesButton}>
              <Image source={require('./assets/computador-pessoal.png')} style={styles.imageIconsCategories} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.blocksCategoriesButton}>
              <Image source={require('./assets/grafico-de-barras.png')} style={styles.imageIconsCategories} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView><TouchableOpacity style={styles.buttonRegister}>
        <Image source={require('./assets/mais.png')} style={styles.imagePlusButton} />
      </TouchableOpacity></>

  );
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  containerFlexBox: {
    flex: 1,
    flexWrap: 'wrap', // Permite a quebra de linha quando os elementos atingem o limite
    flexDirection: 'row', // Organiza os filhos verticalmente
    justifyContent: 'center', // Alinha os filhos verticalmente no centro
    alignItems: 'center', // Alinha os filhos horizontalmente no centro
  },
  row: {
  },
  inputText: {
    marginTop: 40,
    marginLeft: 20,
    alignItems: 'center',
    width: '75%'
  },
  button: {
    marginTop: 45,
    marginLeft: 20,
    height: 55,
    alignItems: 'center',
  },
  textTittle: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 30
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 13,
    marginLeft: 15
  },
  imageCategories: {
    width: 50,
    height: 50,
    marginTop: 9,
    marginLeft: 15
  },
  imageIconsCategories: {
    width: 70,
    height: 70,
    marginTop: 5,
    marginLeft: 2
  },
  imagePlusButton: {
    width: 60,
    height: 60,
    marginTop: 10,
    marginLeft: 10
  },
  textTittleScroll: {
    fontSize: 25,
    marginLeft: 10,
    marginTop: 18,
    alignItems: 'center',
  },
  containerScrollView: {
    borderRadius: 50,
    backgroundColor: "#D2D7E0"
  },
  scrollViewStyles: {
    height: 300
  },
  blocksProjects: {
    backgroundColor: "#545F71",
    borderRadius: 50,
    width: 380,
    height: 105,
    marginLeft: 10,
    marginBottom: 20
  },
  blocksProjectsTittle: {
    color: "white",
    marginLeft: 35,
    marginTop:10,
    fontSize: 20
  },
  blocksProjectsSubTittle: {
    color: "#D3D3D3",
    marginLeft: 35,
    fontSize: 18,
    fontStyle: 'italic'
  },
  blocksProjectsTags: {
    color: "#999999",
    marginLeft: 35,
    fontSize: 18,
    fontStyle: 'italic'
  },
  blocksProjectsButton: {
    position: 'absolute',
    top: 30,
    left: 320
  },
  blocksCategoriesButton: {
    backgroundColor: "#545F71",
    borderRadius: 25,
    width: 125,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10
  },
  buttonRegister: {
    position: 'absolute',
    top: 625,
    left: 300,
    width: 80,
    height: 80,
    backgroundColor: "#545F71",
    borderRadius: 50,
    elevation: 5, 
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 4
  }
})
