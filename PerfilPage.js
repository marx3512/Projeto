import PerfilDemandasICT from './PerfilProjetosICT';

import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Image, FlatList } from 'react-native';
import { HStack } from '@react-native-material/core';
import { useState } from 'react';

const PerfilPage = ({ navigation }) => {

    const [tipoConta, setTipoConta] = useState("Empresarial");

    return(
        <>
            <ScrollView>
                <View style={styles.containerInfoUser}>
                    <Text style={styles.topicInfoUser}>Nome completo</Text>
                    <Text style={styles.subjectInfoUser}>Raul Prado</Text>
                    <Text style={styles.topicInfoUser}>Email</Text>
                    <Text style={styles.subjectInfoUser}>raul.prado@gmail.com</Text>
                    <Text style={styles.topicInfoUser}>Senha</Text>
                    <Text style={styles.subjectInfoUser}>ewd!BG680~|#</Text>

                    {tipoConta == "ICT" && (
                        <>
                        <HStack m={4} spacing={25}>
                            <TouchableOpacity style={styles.buttonEdit}>
                                <Text style={styles.buttonEditText}>
                                    Editar informações
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonEdit}>
                                <Text style={styles.buttonEditText}>
                                    Checar projetos
                                </Text>
                            </TouchableOpacity>
                        </HStack></>
                        
                    )}

                    {tipoConta == "Empresarial" && (
                        <>
                            <Text style={styles.topicInfoUser}>Departamento</Text>
                            <Text style={styles.subjectInfoUser}>Lorem ipsum dolor sit amet</Text>
                            <Text style={styles.topicInfoUser}>Área de atuação</Text>
                            <Text style={styles.subjectInfoUser}>Lorem ipsum dolor sit amet</Text>
                            <>
                            <HStack m={4} spacing={10}>
                                <TouchableOpacity style={styles.buttonEdit}>
                                    <Text style={styles.buttonEditText}>
                                        Editar informações
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonEdit}>
                                    <Text style={styles.buttonEditText}>
                                        Checar demandas
                                    </Text>
                                </TouchableOpacity>
                            </HStack></>
                        </>
                    )}

                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    containerInfoUser: {
        marginTop: 50,
        alignItems: "center",
        backgroundColor: "#D2D7E0",
        borderRadius: 50
    },
    subjectInfoUser: {
        backgroundColor: "#545F71",
        fontSize: 20,
        color: 'white',
        width: 350,
        borderRadius: 25,
        paddingLeft: 30,
        paddingBottom: 5,
        paddingRight: 30,
    },
    topicInfoUser: {
        fontSize: 18,
        alignSelf: "flex-start",
        marginLeft: 32,
        marginBottom: 10,
        marginTop: 10
    },
    buttonEdit: {
        marginTop: 12,
        marginBottom: 12
    },
    buttonEditText: {
        backgroundColor: "#545F71",
        color: "white",
        fontSize: 18,
        padding: 10,
        borderRadius: 50
    }
})

export default PerfilPage