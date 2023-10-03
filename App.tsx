import { Alert, Button, Text, View } from 'react-native';
import { styles } from './styles';
import * as Notifications from 'expo-notifications';
import { StatusBar } from 'expo-status-bar';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});


export default function App() {
  const handleCallNotification = async () => {
    const {status} = await Notifications.getPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permissão negada!');
      return;
    }
    
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Olá!",
        body: "você tem uma nova mensagem!",
      },
      trigger: {
        seconds: 5,
      }
    });

  };

  return (
    <View style={styles.container}>
      <Text>joao</Text>
      <Button title="chamar notificação" onPress={handleCallNotification} />
      <StatusBar style='auto'/>
    </View>
  );
}

