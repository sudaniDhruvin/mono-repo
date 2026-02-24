import { jsx as _jsx } from "react/jsx-runtime";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
export const Button = ({ title, onPress, style }) => (_jsx(TouchableOpacity, { style: [styles.button, style], onPress: onPress, activeOpacity: 0.8, children: _jsx(Text, { style: styles.text, children: title }) }));
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#007AFF",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        alignItems: "center",
        marginVertical: 8,
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
