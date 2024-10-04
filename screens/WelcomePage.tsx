import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles'; // Importando estilos
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Tipos de navegação
import { RootStackParamList } from '../App'; // Importando lista de parâmetros de navegação
import Pills from '../assets/pills.svg'; // Importando imagem SVG

// Definindo as propriedades da página de boas-vindas
type WelcomePageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>; // Tipagem da navegação
}

// Componente da página de boas-vindas
export default function WelcomePage({ navigation }: WelcomePageProps) {
  return (
    <View style={styles.container}>
      {/* Título principal "Me Lembre" posicionado no centro e em azul */}
      <Text style={styles.logoText}>Me Lembre</Text>

      {/* Frase de descrição abaixo do título */}
      <Text style={styles.descriptionText}>
        Mantenha-se em dia com seus medicamentos, sem esforço.
      </Text>

      {/* Exibição da imagem SVG */}
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
        <Pills width={150} height={150} />
      </View>

      {/* Botão "Comece agora" para navegar para a página de Timer */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Timer')} // Navegando para a página Timer
      >
        <Text style={styles.buttonTimer}>Comece agora ➔</Text>
      </TouchableOpacity>

      {/* Footer com créditos centralizados */}
      <View style={{ marginTop: 30, alignItems: 'center' }}>
        <Text style={{ color: '#000', fontSize: 12, textAlign: 'center' }}>
          Feito por
        </Text>
        <Text style={{ color: '#000', fontSize: 12, textAlign: 'center' }}>
          João Gonçalves dos Santos RU: 4323958
        </Text>
        <Text style={{ color: '#000', fontSize: 12, textAlign: 'center' }}>
          Rafael Santana Oliveira RU: 4311767
        </Text>
      </View>
    </View>
  );
}
