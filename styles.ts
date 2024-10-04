<<<<<<< HEAD
import { StyleSheet } from 'react-native';

// Definindo os estilos da aplicação usando o StyleSheet do React Native
export const styles = StyleSheet.create({
  // Estilo principal do container, ocupa toda a tela com padding
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff', // Cor de fundo branca
  },
  // Estilo do texto do logo (título principal)
  logoText: {
    fontSize: 32, // Tamanho da fonte
    color: '#007bff', // Cor azul
    fontWeight: 'bold', // Negrito
    textAlign: 'center', // Centraliza o texto
    marginBottom: 10, // Espaço abaixo do texto
  },
  // Estilo da descrição abaixo do título
  descriptionText: {
    paddingTop: 90, // Espaço acima
    fontSize: 40, // Tamanho da fonte grande
    fontWeight: 'bold', // Negrito
    color: '#000066', // Cor azul escuro
    marginBottom: 20, // Espaço abaixo
  },
  // Estilo dos campos de entrada (input)
  input: {
    borderWidth: 1, // Espessura da borda
    borderColor: '#ccc', // Cor da borda cinza
    borderRadius: 8, // Bordas arredondadas
    padding: 10, // Espaçamento interno
    marginVertical: 10, // Margem vertical
    fontSize: 16, // Tamanho da fonte
  },
  // Estilo dos botões
  button: {
    backgroundColor: '#007bff', // Cor azul
    padding: 15, // Espaçamento interno
    borderRadius: 8, // Bordas arredondadas
    alignItems: 'center', // Centraliza o conteúdo
    marginVertical: 10, // Margem vertical
  },
  // Estilo do texto dentro do botão
  buttonTimer: {
    color: '#fff', // Cor do texto branco
    fontSize: 16, // Tamanho da fonte
  },
  // Estilo dos cartões de lembrete
  card: {
    backgroundColor: '#f9f9f9', // Cor de fundo cinza claro
    padding: 15, // Espaçamento interno
    marginVertical: 10, // Margem vertical
    borderRadius: 8, // Bordas arredondadas
    shadowColor: '#000', // Cor da sombra
    shadowOffset: {
      width: 0, // Deslocamento horizontal da sombra
      height: 2, // Deslocamento vertical da sombra
    },
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 8, // Raio da sombra
    elevation: 5, // Elevação para Android
  },
  // Estilo do título do cartão
  cardTitle: {
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
    marginBottom: 5, // Espaço abaixo
  },
  // Estilo da descrição do cartão
  cardDescription: {
    fontSize: 14, // Tamanho da fonte
    color: '#555', // Cor cinza
    marginBottom: 10, // Espaço abaixo
  },
  // Estilo da data do cartão
  cardDate: {
    fontSize: 12, // Tamanho da fonte
    color: '#999', // Cor cinza claro
    marginBottom: 10, // Espaço abaixo
  },
  // Estilo do botão de deletar
  deleteButton: {
    backgroundColor: '#ff4d4d', // Cor vermelha
    padding: 10, // Espaçamento interno
    borderRadius: 8, // Bordas arredondadas
    alignItems: 'center', // Centraliza o conteúdo
  },
  // Estilo do texto do botão de deletar
  deleteButtonText: {
    color: '#fff', // Cor do texto branco
    fontSize: 14, // Tamanho da fonte
  },
  // Estilo do título das seções
  sectionTitle: {
    fontSize: 22, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
    marginBottom: 20, // Espaço abaixo
    textAlign: 'center', // Centraliza o texto
    color: '#333', // Cor cinza escuro
  },
  // Estilo do container quadrado que envolve os campos de entrada e cartões
  squareContainer: {
    backgroundColor: '#f0f0f0', // Cor de fundo cinza claro
    padding: 20, // Espaçamento interno
    borderRadius: 10, // Bordas arredondadas
    marginBottom: 20, // Margem abaixo
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 8, // Raio da sombra
    elevation: 5, // Elevação para Android
  },
  // Estilo da mensagem quando não há lembretes agendados
  emptyMessage: {
    fontSize: 16, // Tamanho da fonte
    color: '#666', // Cor cinza
    textAlign: 'center', // Centraliza o texto
  },
  // Estilo do container para a seção de rolagem
  scrollContainer: {
    flex: 1, // Ocupar todo o espaço disponível
    marginTop: 20, // Margem acima
  },
});
=======
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button : {
      padding: 20,
      fontSize: 20,
      fontWeight: 'bold',
    },
    textInput :{
      backgroundColor: '#334213',
      borderColor: '#233233',
      fontSize: 20,
      fontWeight: 'bold',
    }
  });
  
>>>>>>> ed87a4716a99d3bd1013703706242d5197777518
