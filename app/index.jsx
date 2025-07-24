import { useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
const { width } = Dimensions.get('window');
const pomodoro = [
  {
    id: 'pomodo',
    time: 25,
    img: require('./foco.png'),
    text: 'Foco'
  },
  {
    id: 'short',
    time: 5,
    img: require('./short.png'),
    text: 'Pausa curta'
  },
  {
    id: 'long',
    time: 15,
    img: require('./long.png'),
    text: 'Pausa longa'
  },
]

export default function Index() {

  const [timerType, setTimerTipe] = useState(pomodoro[0])

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={timerType.img} />
      <View style={styles.action}>
        <View style={styles.context}>
          { pomodoro.map(p => (
            <Pressable 
              key={p.id} 
              style={ timerType.id === p.id ? styles.contextButtonActive : null}
              onPress={() => setTimerTipe(p)}
              >
              <Text style={styles.contextButtonText}>
                {p.text}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.timer}>
          { new Date(timerType.time * 1000).toLocaleTimeString('pt-BR', {minute: '2-digit', second: '2-digit'}) }
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>Começar</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Alura.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  action: {
    padding: 20,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  contextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
  contextButtonText: {
    fontSize: 12.5,
    color: '#fff',
    padding: 8
  },
  timer: {
    fontSize: 54,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#B872FF",
    padding: 8,
    borderRadius: 32,
    alignItems: "center",
  },
  textButton: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18
  },
  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5
  },
  image: {
    width: width * 0.7, // 60% da largura da tela
    height: width * 0.7,
    resizeMode: 'contain'
  }
});
