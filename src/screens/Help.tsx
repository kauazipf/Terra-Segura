import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../styles/ThemeContext';

export default function Help() {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      height: 1000,
      padding: 24,
      backgroundColor: theme.colors.card,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.primary,
      marginBottom: 20,
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.colors.secondary,
      marginTop: 16,
      marginBottom: 8,
    },
    text: {
      fontSize: 15,
      color: theme.colors.text,
      lineHeight: 22,
      textAlign: 'justify',
    },
    footer: {
      marginTop: 30,
      fontSize: 14,
      textAlign: 'center',
      color: theme.colors.text,
      opacity: 0.7,
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ajuda e Instruções</Text>

      <Text style={styles.sectionTitle}>📍 Mapa </Text>
      <Text style={styles.text}>
        Acesse a aba "Mapa" para visualizar os pontos de evacuação mais próximos.
        O aplicativo usará sua localização para mostrar esses pontos com precisão.
      </Text>

      <Text style={styles.sectionTitle}> 🚨 Alertas </Text>
      <Text style={styles.text}>
        Na aba "Alertas", você pode cadastrar regiões de risco que encontrar, como alagamentos,
        deslizamentos ou incêndios. Isso ajuda outras pessoas a evitarem essas áreas.
      </Text>

      <Text style={styles.sectionTitle}> 👤 Perfil </Text>
      <Text style={styles.text}>
        Em "Perfil", futuramente você poderá configurar preferências como acessibilidade, localização padrão
        ou modo noturno.
      </Text>

      <Text style={styles.sectionTitle}> 📱 Contato e Suporte </Text>
      <Text style={styles.text}>
        Para mais informações ou em caso de problemas com o aplicativo, entre em contato com a equipe do Terra Segura
        através do e-mail kauan123.zipf@gmail.com.
      </Text>

      <Text style={styles.footer}> Versão 1.0 – Projeto Global Solution 2025 </Text>
    </ScrollView>
  );
}
