import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Image, FlatList } from 'react-native';


const ProjectPage = ({ navigation }) => {
    return (
        <>
        <ScrollView>
            <View style={styles.containerTitleProjeto}>
                <Text style={styles.titleProject}>Nome do projeto</Text>
            </View>
            <View style={styles.containerInfoProject}>
                <Text style={styles.subjectInfoProject}>Informações sobre o projeto</Text>
                <Text style={styles.topicInfoProject}>Objetivo do projeto</Text>
                <Text style={styles.subjectInfoProject}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Ut non diam et lacus egestas laoreet. Suspendisse ullamcorper euismod tempor.</Text>
                <Text style={styles.topicInfoProject}>Resumo do projeto</Text>
                <Text style={styles.subjectInfoProject}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                <Text style={styles.topicInfoProject}>Area de Conhecimento</Text>
                <Text style={styles.subjectInfoProject}>placerat sed purus eget pharetra. Maecenas venenatis ex vitae lectus pulvinar</Text>
                <Text style={styles.subjectInfoProject}>Responsavel pelo projeto</Text>
                <Text style={styles.topicInfoProject}>Nome</Text>
                <Text style={styles.subjectInfoProject}>Raul Prado</Text>
                <Text style={styles.topicInfoProject}>Email</Text>
                <Text style={styles.subjectInfoProject}>raul.prado@gmail.com</Text>

            </View>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    containerTitleProjeto: {
        backgroundColor: "#545F71",
        height: 50,
        alignItems: 'center'
    },
    titleProject: {
        fontSize: 28,
        color: 'white'
    },
    containerInfoProject: {
        marginTop: 20,
        alignItems: "center",
        backgroundColor: "#D2D7E0",
        borderRadius: 50
    },
    subjectInfoProject: {
        backgroundColor: "#545F71",
        fontSize: 20,
        color: 'white',
        width: 350,
        borderRadius: 25,
        paddingLeft: 30,
        paddingBottom: 5,
        paddingRight: 30,
        marginBottom: 15,
        marginTop: 15
    },
    topicInfoProject: {
        fontSize: 18,
        alignSelf: "flex-start",
        marginLeft: 32,
    }
})

export default ProjectPage