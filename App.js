import React from 'react';
import { 
  View, 
  Text, 
  StatusBar, 
} from 'react-native';

// import Tarefas from './src/screens/tarefas';
// import Login from './src/screens/login';
import Routes from './src/routes';

function App() {
  return (
    <View>
      <StatusBar />
      {/* <Tarefas /> */}
      {/* <Login /> */}
      <Routes />
    </View>
  )
}

export default App;

//  Instalacoes:
//  npm install @react-navigation/native
//  npm install @react-navigation/drawer
// npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
// $ npm install --save react-native-vector-icons
