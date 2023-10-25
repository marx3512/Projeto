import { StyleSheet, TouchableOpacity, View, Text, ScrollView, TextInput, Image, FlatList } from 'react-native';


const LoginPage = ({ navigation }) => {
    return(
        <>
            <View style={styles.containerTitleLogin}>
                <Text style={styles.titleLogin}>Login</Text>
            </View>
            <View style={styles.containerInfoAccount}>
                <Text style={styles.textInfoAccount}>Email</Text>
                <TextInput
                    style={styles.inputText}
                ></TextInput>
                <Text style={styles.textInfoAccount}>Senha</Text>
                <TextInput
                    style={styles.inputText}
                ></TextInput>
                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.buttonRegisterText}> 
                        Logar
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    containerTitleLogin: {
        backgroundColor: "#545F71",
        height: 50,
        alignItems: 'center'
    },
    titleLogin: {
        fontSize: 28,
        color: 'white'
    },
    containerInfoAccount: {
        marginTop: 100,
        alignItems: "center",
        backgroundColor: "#D2D7E0",
        borderRadius: 50
    },
    textInfoAccount: {
        marginTop: 10,
        fontSize: 25,
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
    buttonRegister: {
        marginTop: 12,
        alignItems: "center",
        backgroundColor: "#545F71",
        padding: 10,
        borderRadius: 50,
        width: 100,
        marginBottom: 10
    },
    buttonRegisterText: {
        color: "white",
        fontSize: 18,
    }
})

export default LoginPage