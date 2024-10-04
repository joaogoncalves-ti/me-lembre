import React, { useState } from 'react';
import { Alert, TextInput, Text, View, FlatList, ScrollView } from 'react-native';
import { styles } from '../styles';
import * as Notifications from 'expo-notifications';
import { StatusBar } from 'expo-status-bar';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
});

type NotificationCard = {
  id: string;
  title: string;
  description: string;
  date: Date;
};

export default function Timer() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [notifications, setNotifications] = useState<NotificationCard[]>([]);

  const handleCallNotification = async () => {
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permissão negada!');
      return;
    }

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: titulo,
        body: descricao,
      },
      trigger: date,
    });

    const newNotification: NotificationCard = {
      id: notificationId,
      title: titulo,
      description: descricao,
      date: date,
    };

    setNotifications([...notifications, newNotification]);
    setTitulo('');
    setDescricao('');
  };

  const handleDeleteNotification = async (id: string) => {
    await Notifications.cancelScheduledNotificationAsync(id);
    setNotifications(notifications.filter(notification => notification.id !== id));
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
      {/* Campo fixo de criação de lembrete */}
      <Text style={styles.sectionTitle}>Crie seu lembrete aqui</Text>
      
      <View style={styles.squareContainer}>
        <TextInput
          style={styles.input}
          value={titulo}
          onChangeText={setTitulo}
          placeholder="Título da notificação"
        />

        <TextInput
          value={descricao}
          style={styles.input}
          onChangeText={setDescricao}
          placeholder="Descrição da notificação"
        />

        <TouchableOpacity style={styles.button} onPress={showDatePicker}>
          <Text style={styles.buttonTimer}>Selecionar data e hora</Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <TouchableOpacity style={styles.button} onPress={handleCallNotification}>
          <Text style={styles.buttonTimer}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* Seção de lembretes agendados com rolagem */}
      <Text style={styles.sectionTitle}>Lembretes Agendados</Text>
      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.squareContainer}>
            {notifications.length === 0 ? (
              <Text style={styles.emptyMessage}>Nenhum lembrete agendado :(</Text>
            ) : (
              notifications.map((item) => (
                <View key={item.id} style={styles.card}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardDescription}>{item.description}</Text>
                  <Text style={styles.cardDate}>{item.date.toLocaleString()}</Text>

                  {/* Botão de deletar cartão */}
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleDeleteNotification(item.id)}
                  >
                    <Text style={styles.deleteButtonText}>Deletar</Text>
                  </TouchableOpacity>
                </View>
              ))
            )}
          </View>
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
