import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import Home from '../screens/Home';
import MapScreen from '../screens/MapScreen';
import AlertForm from '../screens/AlertForm';
import Profile from '../screens/Profile';
import Help from '../screens/Help';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'react-native';


const Drawer = createDrawerNavigator();

function LogoutScreen() {
  const navigation = useNavigation<any>();

  React.useEffect(() => {
    Alert.alert('Sair', 'Deseja realmente sair?', [
      {
        text: 'Cancelar',
        style: 'cancel',
        onPress: () => navigation.goBack(),
      },
      {
        text: 'Sair',
        style: 'destructive',
        onPress: async () => {
          await AsyncStorage.removeItem('usuarioLogado');
          Toast.show({
            type: 'success',
            text1: 'Você saiu do aplicativo',
          });
        },
      },
    ]);
  }, []);

  return null;
}

export default function AppRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        drawerPosition: 'right', 
        headerLeft: () => (
          <Image
            source={require('../../assets/logo.png')}
            style={{ width: 40, height: 40, marginLeft: 16, borderRadius:16 }}
            resizeMode="contain"
          />
        ),
      }}
    >
      <Drawer.Screen
        name="Início"
        component={Home}
        options={{
          drawerIcon: () => <Ionicons name="home" size={20} />,
        }}
      />
      <Drawer.Screen
        name="Ajuda"
        component={Help}
        options={{
          drawerIcon: () => <Ionicons name="help-circle" size={20} />,
        }}
      />
      <Drawer.Screen
        name="Alertas"
        component={AlertForm}
        options={{
          drawerIcon: () => <Ionicons name="alert" size={20} />,
        }}
      />
      <Drawer.Screen
        name="Mapa"
        component={MapScreen}
        options={{
          drawerIcon: () => <Ionicons name="map" size={20} />,
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={Profile}
        options={{
          drawerIcon: () => <Ionicons name="person" size={20} />,
        }}
      />
      <Drawer.Screen
        name="Sair"
        component={LogoutScreen}
        options={{
          drawerIcon: () => <Ionicons name="log-out-outline" size={20} />,
        }}
      />
    </Drawer.Navigator>
  );
}
