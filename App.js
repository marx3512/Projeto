import ProjectPage from './Project';
import CreateAccountPage from './CreateAccount';
import RegisterProject from './RegisterProject';
import LoginPage from './LoginPage';
import PerfilPage from './PerfilPage';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Image, FlatList, TextInput } from 'react-native';
import { Button,  } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GestureHandlerScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

const HomePage = ({ navigation }) => {
  const [menuVisivelCreateProject, setMenuVisivelCreateProject] = useState(false);
  const [menuVisivelPerfil, setMenuVisivelPerfil] = useState(false);

  const [logado, setLogado] = useState(true);

    const ativarMenuProject = () => {
      setMenuVisivelCreateProject(!menuVisivelCreateProject);
    }

    const ativarMenuPerfil = () => {
      setMenuVisivelPerfil(!menuVisivelPerfil);
    }

    const menuItens = [
      { id: '2', label: 'Cadastrar proposta de ICT'},
    ]
    
    const menuItenPerfilsOff = [
      { id: '1', label: "Logar"},
      { id: '2', label: "Criar conta de usuário"}
    ]

    const menuItensPerilOn = [
      {id: '1', label: "Perfil"},
      {id: '2', label: "Logout"}
    ]

  return (
    <><View style={styles.container}>
        <TextInput
            style={styles.inputText}
        ></TextInput>
      <TouchableOpacity style={styles.button}>
        <Icon name='search' size={45} color={"black"} />
      </TouchableOpacity>
    </View>
    <ScrollView>
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
              <TouchableOpacity 
                style={styles.blocksProjectsButton}
                onPress={() => navigation.navigate('ProjectPage')}
              >
                <Icon name='keyboard-arrow-right' size={45} color={"white"} />
              </TouchableOpacity>
            </View>
            <View style={styles.blocksProjects}>
              <Text style={styles.blocksProjectsTittle}>Projeto 2</Text>
              <Text style={styles.blocksProjectsSubTittle}>ICT responsavel</Text>
              <Text style={styles.blocksProjectsTags}>keywords, blah blah</Text>
              <TouchableOpacity style={styles.blocksProjectsButton}>
                <Icon name='keyboard-arrow-right' size={45} color={"white"} />
              </TouchableOpacity>
            </View>
            <View style={styles.blocksProjects}>
              <Text style={styles.blocksProjectsTittle}>Projeto 3</Text>
              <Text style={styles.blocksProjectsSubTittle}>ICT responsavel</Text>
              <Text style={styles.blocksProjectsTags}>keywords, blah blah</Text>
              <TouchableOpacity style={styles.blocksProjectsButton}>
                <Icon name='keyboard-arrow-right' size={45} color={"white"} />
              </TouchableOpacity>
            </View>
            <View style={styles.blocksProjects}>
              <Text style={styles.blocksProjectsTittle}>Projeto 4</Text>
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
      </ScrollView>
      {logado && (
        <TouchableOpacity onPress={ativarMenuProject} style={styles.buttonRegister}>
          <Image source={require('./assets/mais(1).png')} style={styles.imagePlusButton} />
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={ativarMenuPerfil} style={styles.buttonPerfil}>
        <Image source={require('./assets/perfil.png')} style={styles.imagePlusButton} />
      </TouchableOpacity>
      
      {menuVisivelCreateProject && logado && (
        <View style={styles.menuCreateProject}>
        <FlatList
          data={menuItens}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              navigation.navigate("RegisterProjectPage")
            }}>
              <Text style={styles.textMenu}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
        </View>
      )}

      {menuVisivelPerfil && logado == false && (
        <View style={styles.menuOff}>
        <FlatList
          data={menuItenPerfilsOff}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              if(item.label == "Logar"){
                navigation.navigate('LoginPage')
              }
              else{
                navigation.navigate("CreateAccountPage")
              }
            }}>
              <Text style={styles.textMenu}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      )}

      {menuVisivelPerfil && logado == true && (
        <View style={styles.menuOff}>
        <FlatList
          data={menuItensPerilOn}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              if(item.label == "Perfil"){
                navigation.navigate('PerfilPage')
              }
              else{
                setLogado(false)
              }
            }}>
              <Text style={styles.textMenu}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      )}

      </>

  );
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="ProjectPage" component={ProjectPage}/>
        <Stack.Screen name="CreateAccountPage" component={CreateAccountPage}/>
        <Stack.Screen name="RegisterProjectPage" component={RegisterProject}/>
        <Stack.Screen name="LoginPage" component={LoginPage}/>
        <Stack.Screen name="PerfilPage" component={PerfilPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },
  containerFlexBox: {
    flex: 1,
    flexWrap: 'wrap', // Permite a quebra de linha quando os elementos atingem o limite
    flexDirection: 'row', // Organiza os filhos verticalmente
    justifyContent: 'center', // Alinha os filhos verticalmente no centro
    alignItems: 'center', // Alinha os filhos horizontalmente no centro
  },
  inputText: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50
  },
  button: {
    marginTop: 12,
    marginLeft: 20,
    height: 55,
    alignItems: 'center',
  },
  textTittle: {
    marginLeft: 10,
    marginTop: 8,
    fontSize: 24
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 5,
    marginLeft: 15
  },
  imageCategories: {
    width: 50,
    height: 50,
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
    fontSize: 24,
    marginLeft: 10,
    marginTop: 11,
    alignItems: 'center',
  },
  containerScrollView: {
    marginTop: 10,
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
  buttonPerfil: {
    position: 'absolute',
    top: 625,
    left: 25,
    width: 80,
    height: 80,
    backgroundColor: "#D2D7E0",
    borderRadius: 50,
    elevation: 5, 
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 4
  },
  buttonRegister: {
    position: 'absolute',
    top: 625,
    left: 300,
    width: 80,
    height: 80,
    backgroundColor: "#D2D7E0",
    borderRadius: 50,
    elevation: 5, 
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 4
  },
  menuCreateProject: {
    position: 'absolute',
    top: 543,
    right: 20,
    width: 220,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  menuOff: {
    position: 'absolute',
    top: 540,
    left: 25,
    width: 220,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  textMenu: {
    fontSize: 18
  }
})
