import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Image, FlatList } from 'react-native';


const ProjectPage = ({ navigation }) => {
    return (
        <>
        <ScrollView>
            <View style={styles.containerTitleProjeto}>
                <Text style={styles.titleProject}>Título da demanda</Text>
            </View>
            <View style={styles.containerInfoProject}>
                <Text style={styles.subjectInfoProject}>Informações sobre a demanda</Text>
                <Text style={styles.topicInfoProject}>Departamento</Text>
                <Text style={styles.subjectInfoProject}>placerat sed purus eget pharetra.</Text>
                <Text style={styles.topicInfoProject}>Área de atuação</Text>
                <Text style={styles.subjectInfoProject}>placerat sed purus eget pharetra.</Text>
                <Text style={styles.topicInfoProject}>Resumo da demanda</Text>
                <Text style={styles.subjectInfoProject}>placerat sed purus eget pharetra.</Text>
                <Text style={styles.subjectInfoProject}>Responsavel pela demanda</Text>
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