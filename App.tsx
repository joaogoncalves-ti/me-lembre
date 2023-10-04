import React, { useState } from 'react';
import { Alert, Button, View } from 'react-native';
import { styles } from './styles';
import * as Notifications from 'expo-notifications';
import { StatusBar } from 'expo-status-bar';
import DateTimePickerModal from "react-native-modal-datetime-picker";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
      trigger: date
    });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: React.SetStateAction<Date>) => {
    setDate(selectedDate);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Button title="Selecionar data e hora" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Button title="chamar notificação" onPress={handleCallNotification} />
      <StatusBar style='auto'/>
    </View>
  );
}
