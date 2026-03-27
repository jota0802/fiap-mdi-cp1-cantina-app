import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import FiapLogo from '../../components/FiapLogo';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <FiapLogo width={60} color="#ED145B" />
          </View>
          <Text style={styles.appNome}>CANTINA FIAP</Text>
          <Text style={styles.versao}>V 1.0.0</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>SOBRE O PROJETO</Text>
          <Text style={styles.cardTexto}>
            Aplicativo mobile para pedidos na cantina da FIAP. Faca seu pedido
            pelo celular e receba uma senha para retirar no balcao, eliminando
            filas e tempo de espera.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>PROBLEMA</Text>
          <Text style={styles.cardTexto}>
            Filas longas na cantina durante intervalos geram perda de tempo e
            incerteza sobre disponibilidade dos itens. Alunos frequentemente
            desistem de comprar por falta de tempo entre aulas.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>SOLUCAO</Text>
          <View style={styles.listaItem}>
            <View style={styles.bullet} />
            <Text style={styles.listaTexto}>
              Cardapio digital com precos atualizados
            </Text>
          </View>
          <View style={styles.listaItem}>
            <View style={styles.bullet} />
            <Text style={styles.listaTexto}>
              Pedidos pelo app sem enfrentar fila
            </Text>
          </View>
          <View style={styles.listaItem}>
            <View style={styles.bullet} />
            <Text style={styles.listaTexto}>
              Sistema de senha para retirada organizada
            </Text>
          </View>
          <View style={styles.listaItem}>
            <View style={styles.bullet} />
            <Text style={styles.listaTexto}>
              Resumo do pedido com valor total
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>INTEGRANTES</Text>
          <View style={styles.integranteRow}>
            <Image
              source={{ uri: 'https://picsum.photos/seed/jvf-dev/100/100' }}
              style={styles.integranteAvatar}
            />
            <View style={styles.integranteInfo}>
              <Text style={styles.integranteNome}>JOAO VICTOR FRANCO</Text>
              <Text style={styles.integranteRM}>RM 556790</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>TECNOLOGIAS</Text>
          <View style={styles.techGrid}>
            <View style={styles.techBadge}>
              <Text style={styles.techTexto}>REACT NATIVE</Text>
            </View>
            <View style={styles.techBadge}>
              <Text style={styles.techTexto}>EXPO</Text>
            </View>
            <View style={styles.techBadge}>
              <Text style={styles.techTexto}>EXPO ROUTER</Text>
            </View>
            <View style={styles.techBadge}>
              <Text style={styles.techTexto}>JAVASCRIPT</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>DECISOES TECNICAS</Text>
          <View style={styles.listaItem}>
            <View style={styles.bullet} />
            <Text style={styles.listaTexto}>
              Expo Router com Tabs + Stack para navegacao hibrida
            </Text>
          </View>
          <View style={styles.listaItem}>
            <View style={styles.bullet} />
            <Text style={styles.listaTexto}>
              useState para gerenciar o carrinho de pedidos
            </Text>
          </View>
          <View style={styles.listaItem}>
            <View style={styles.bullet} />
            <Text style={styles.listaTexto}>
              useEffect para gerar a senha na confirmacao
            </Text>
          </View>
          <View style={styles.listaItem}>
            <View style={styles.bullet} />
            <Text style={styles.listaTexto}>
              Componentes reutilizaveis (ItemCardapio, FiapLogo)
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerTexto}>
            FIAP — ENGENHARIA DE SOFTWARE — 3o ANO
          </Text>
          <Text style={styles.footerTexto}>MOBILE DEVELOPMENT & IOT — 2026</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    paddingTop: 64,
    paddingBottom: 36,
    gap: 6,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  appNome: {
    fontFamily: 'Manrope_800ExtraBold',
    fontSize: 22,
    color: '#FFFFFF',
    letterSpacing: 5,
  },
  versao: {
    fontFamily: 'Manrope_500Medium',
    fontSize: 10,
    color: '#444444',
    letterSpacing: 3,
  },
  card: {
    backgroundColor: '#111111',
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 16,
    padding: 20,
  },
  cardTitulo: {
    fontFamily: 'Manrope_800ExtraBold',
    fontSize: 11,
    color: '#ED145B',
    letterSpacing: 3,
    marginBottom: 12,
  },
  cardTexto: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 14,
    color: '#666666',
    lineHeight: 22,
  },
  listaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 12,
  },
  bullet: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ED145B',
  },
  listaTexto: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 13,
    color: '#666666',
    flex: 1,
    lineHeight: 20,
  },
  integranteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  integranteAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  integranteInfo: {
    flex: 1,
  },
  integranteNome: {
    fontFamily: 'Manrope_700Bold',
    fontSize: 13,
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  integranteRM: {
    fontFamily: 'Manrope_500Medium',
    fontSize: 11,
    color: '#555555',
    letterSpacing: 1,
    marginTop: 2,
  },
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techBadge: {
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 100,
  },
  techTexto: {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 10,
    color: '#888888',
    letterSpacing: 1,
  },
  footer: {
    alignItems: 'center',
    paddingTop: 28,
    paddingBottom: 10,
    gap: 4,
  },
  footerTexto: {
    fontFamily: 'Manrope_500Medium',
    fontSize: 10,
    color: '#333333',
    letterSpacing: 2,
  },
});
