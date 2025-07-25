import { useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../component/actionButton";
import { FokusButton } from "../component/fokusButton";
import { IconPause, IconPlay } from "../component/icons";
import { Timer } from "../component/timer";


const { width } = Dimensions.get('window');
const pomodoro = [
  {
    id: 'pomodo',
    initialValue: 25 * 60,
    img: require('../assets/images/foco.png'),
    text: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5 * 60,
    img: require('../assets/images/short.png'),
    text: 'Pausa curta'
  },
  {
    id: 'long',
    initialValue: 15 * 60,
    img: require('../assets/images/long.png'),
    text: 'Pausa longa'
  },
]

export default function Index() {

  const [timerType, setTimerTipe] = useState(pomodoro[0])
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue)
  const [timerRunning, setTimerRunning] = useState(null)

  const timerRef = useRef(null)

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current)
      timerRef.current = null
      setTimerRunning(false)
    }
  }

  const toggleTimerType = (newTimerType) => {
    setTimerTipe(newTimerType)
    setSeconds(newTimerType.initialValue)
    clear()
  }

  const toggleTimer = () => {
    if (timerRef.current) {
      clear()
      return
    }

    setTimerRunning(true)
    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clear()
          return timerType.initialValue
        }
        return oldState - 1
      })
    }, 1000);

    timerRef.current = id
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={timerType.img} />
      <View style={styles.action}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton
              key={p.id}
              action={timerType.id === p.id}
              onPress={() => toggleTimerType(p)}
              text={p.text}
            />
          ))}
        </View>
        <Timer totalSeconds={seconds} />
        <FokusButton
          tile={timerRunning ? 'Pausar' : 'Começar'}
          icon={timerRunning ? <IconPause/> : <IconPlay/>}
          onPress={toggleTimer}
        />
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
  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5
  },
  image: {
    width: width * 0.7,
    height: width * 0.7,
  }
});
