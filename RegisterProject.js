import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Image, FlatList, TextInput } from 'react-native';

const RegisterProjectPage = ({ navigation }) => {
    return(
        <>
            <ScrollView>
                <View style={styles.containerTitleProject}>
                    <Text style={styles.titleProjectt}>Registrar um projeto</Text>
                </View>
                <View style={styles.containerInfoProject}>
                    <Text style={styles.textInfoProject}> Titulo do projeto </Text>
                    <TextInput
                        style={styles.inputText}
                    ></TextInput>
                    <Text style={styles.textInfoProject}> Objetivo do projeto </Text>
                    <TextInput
                        style={styles.inputText}
                    ></TextInput>
                    <Text style={styles.textInfoProject}> Resumo do projeto </Text>
                    <TextInput
                        style={styles.inputText}
                    ></TextInput>
                    <Text style={styles.textInfoProject}> Área de conhecimento </Text>
                    <TextInput
                        style={styles.inputText}
                    ></TextInput>
                    <Text style={styles.textInfoProject}> Categoria </Text>
                    <TextInput
                        style={styles.inputText}
                    ></TextInput>
                    <Text style={styles.textInfoProject}> Palavras chaves </Text>
                    <TextInput
                        style={styles.inputText}
                    ></TextInput>
                    <TouchableOpacity style={styles.buttonRegister}>
                        <Text style={styles.buttonRegisterText}> 
                            Registrar
                        </Text>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    containerTitleProject: {
        backgroundColor: "#545F71",
        height: 50,
        alignItems: 'center'
    },
    titleProjectt: {
        fontSize: 28,
        color: 'white'
    },
    containerInfoProject: {
        marginTop: 50,
        alignItems: "center",
        backgroundColor: "#D2D7E0",
        borderRadius: 50
    },
    textInfoProject: {
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
        borderRadius: 50,
    },
    buttonRegister: {
        marginTop: 5,
        marginBottom: 10
    },
    buttonRegisterText: {
        backgroundColor: "#545F71",
        color: "white",
        fontSize: 18,
        padding: 10,
        borderRadius: 50
    }
})

export default RegisterProjectPage