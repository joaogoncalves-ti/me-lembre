/*import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as Notifications from 'expo-notifications';*/

//export default function App() {
  /* const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);*/

  const allowsNotificationsAsync = async () => {
    const settings = await Notifications.getPermissionsAsync();
    return (
      settings.granted ||
      settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
    );
  };

  const requestPermissionsAsync = async () => {
    return await Notifications.requestPermissionsAsync({
      ios: {
        allowAlert: true,
        allowBadge: true,
        allowSound: true,
        allowAnnouncements: true,
      },
    });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
const handleConfirm = (date) => {
    setDate(date.toString());
    hideDatePicker();
  };

  const handleButtonPress = async () => {
    const hasPermission = await allowsNotificationsAsync();
    if (!hasPermission) {
      await requestPermissionsAsync();
    }
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "minha notificação",
        body: "olá!",
      },
      trigger: null,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}

      />
      <TextInput
        style={styles.textInput}
        value={date}
        placeholder="Data..."
      />
      <Button onPress={showDatePicker} title="Selecionar Data" />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Button title="Mostrar Notificação" onPress={handleButtonPress} />
    </View>
  );
}

