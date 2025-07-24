import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({ onPress, tile, icon }) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            {icon}
            <Text style={styles.textButton}>
                {tile}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#B872FF',
        padding: 8,
        borderRadius: 32,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        textAlign: 'center',
        color: '#021123',
        fontSize: 18
    },
});