import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Image, FlatList, TextInput } from 'react-native';
import { HStack } from '@react-native-material/core';
import { useState } from 'react';

import RegisterProjectPage from './RegisterProject';

const CreateAccountPage = ({ navigation }) => {
    const [menuVisivel, setMenuVisivel] = useState(false);
    const [tipoConta, setTipoConta] = useState("Escolha uma opção");

    const ativarMenu = () => {
        setMenuVisivel(!menuVisivel);
    }

    const menuItens = [
        { id: '1', label: "Empresarial"},
        { id: '2', label: "ICT"}
    ]

    return(
        <>
            <ScrollView>
                <View style={styles.containerTitleAccount}>
                    <Text style={styles.titleAccount}>Criar uma conta</Text>
                </View>
                <View style={styles.containerInfoAccount}>
                    <Text style={styles.textInfoAccount}>Nome Completo</Text>
                    <TextInput
                        style={styles.inputText}
                    ></TextInput>
                    <Text style={styles.textInfoAccount}>Email</Text>
                    <TextInput
                        style={styles.inputText}
                    ></TextInput>
                    <Text style={styles.textInfoAccount}>Senha</Text>
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry={true}
                    ></TextInput>
                    <Text style={styles.textInfoAccount}>Digite a senha novamente</Text>
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry={true}
                    ></TextInput>
                    <HStack m={2} spacing={25}>
                    <TouchableOpacity onPress={ativarMenu} style={styles.containerMenu}>
                        <Text>{tipoConta}</Text>
                    </TouchableOpacity>
                        {menuVisivel && (
                            <View style={styles.menu}>
                            <FlatList
                                data={menuItens}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => {
                                        setTipoConta(item.label)
                                        setMenuVisivel(false)         
                                    }}>
                                        <Text style={styles.textMenu}>{item.label}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                            </View>
                    )}
                    </HStack>
                    
                    {tipoConta == 'Empresarial' && (
                        <View>
                            <Text style={styles.textInfoAccount}>Departamento</Text>
                            <TextInput
                                style={styles.inputText}
                            ></TextInput>
                            <Text style={styles.textInfoAccount}>Área de atuação</Text>
                            <TextInput
                                style={styles.inputText}
                            ></TextInput>
                            <Text style={styles.textInfoAccount}>Titulo de demanda</Text>
                            <TextInput
                                style={styles.inputText}
                            ></TextInput>
                            <Text style={styles.textInfoAccount}>Resumo da demanda</Text>
                            <TextInput
                                style={styles.inputText}
                            ></TextInput>
                        </View>
                    )}
                    {tipoConta == 'ICT' && (
                        <TouchableOpacity style={styles.buttonRegister}>
                            <Text style={styles.buttonRegisterText}> 
                                Registrar
                            </Text>
                    </TouchableOpacity>
                    )}
                    {tipoConta == 'Empresarial' && (
                        <TouchableOpacity style={styles.buttonRegister} onPress={() => {
                            navigation.navigation("RegisterProjectPage")
                        }}>
                            <Text style={styles.buttonRegisterText}> 
                                Registrar
                            </Text>
                    </TouchableOpacity>
                    )}
                </View>
            </ScrollView>
            
        </>
    )
}

const styles = StyleSheet.create({
    containerTitleAccount: {
        backgroundColor: "#545F71",
        height: 50,
        alignItems: 'center'
    },
    titleAccount: {
        fontSize: 28,
        color: 'white'
    },
    containerInfoAccount: {
        marginTop: 30,
        alignItems: "center",
        backgroundColor: "#D2D7E0",
        borderRadius: 50
    },
    textInfoAccount: {
        fontSize: 18,
        alignSelf: "flex-start",
        marginLeft: 30
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
    containerMenu: {
        borderWidth: 1,
        padding: 8,
        borderRadius: 50,
        alignSelf: "flex-start",
    },
    menu: {
        height: 65,
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
    buttonRegister: {
        marginBottom: 10
    },
    buttonRegisterText: {
        backgroundColor: "#545F71",
        color: "white",
        fontSize: 18,
        padding: 10,
        borderRadius: 50,
        marginTop: 10
    }
})

export default CreateAccountPage