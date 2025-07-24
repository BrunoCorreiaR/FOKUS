import { Pressable, StyleSheet, Text } from "react-native";

export const ActionButton = ({ action, onPress, text }) => {
    return (
        <Pressable
            style={action ? styles.contextButtonActive : null}
            onPress={onPress}
        >
            <Text style={styles.contextButtonText}>
                {text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    contextButtonActive: {
        backgroundColor: "#144480",
        borderRadius: 8,
    },
    contextButtonText: {
        fontSize: 12.5,
        color: '#fff',
        padding: 8
    }
});