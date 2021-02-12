import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Alert, Plataform } from 'react-native';

import Fundo from '../../../assets/fundo.jpg';

import styles from './styles';

const apiUsuario = {
    id: 1,
    email: "ghost@streamer.com",
    senha: "123"
}

function Login({navigation}) {

    function autenticacao(){   
        if (apiUsuario.email === usuario) {
            Alert.alert("Usuario válido")
            navigation.navigate("tarefas");
        }else {
            Alert.alert("usuario inválido", "Este usuário não existe!")
        }
    }
             
// function autenticacao(){
//     if (Plataform.OS === "web"){
//         alert("foi")
//     }else {
//     Alert.alert("titulo da mensagem", "Mensagem...")
// }
// }
    const [usuario, setUsuario] = React.useState("")
    const [senha, setSenha] = React.useState("")

    return (
        <View style={styles.caixa}>
            <ImageBackground source={Fundo} style={styles.fundo}>

                <View>
                    <Text style={styles.titulo}>Login</Text>
                </View>

                <View style={styles.inputs}>

                    <TextInput placeholder="Digite o email..." style={styles.input}
                     value={usuario}
                         onChangeText={(text) => setUsuario(text)}
                     />
                    <TextInput placeholder="Digite o senha..." style={styles.input} secureTextEntry={true}
                         value={senha}
                         onChangeText={(text) => setSenha(text)}
                     />

                    <TouchableOpacity style={styles.btn} onPress={autenticacao}>
                        <Text style={styles.texto}>Entrar</Text>
                    </TouchableOpacity>

                </View>
                
            </ImageBackground>

        </View>
    )
    }


export default Login;


