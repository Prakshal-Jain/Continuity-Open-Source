import { View, StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/*
    type = message | warning | error,   (optional)
    message = JSX element | string
*/

export default function AlertComponent ({ type = "message", message, colorScheme = 'light' }) {

    const iconMap = {
        message: { icon: "bell-badge-outline", color: (colorScheme === 'dark') ? 'rgba(10, 132, 255, 1)' : 'rgba(0, 122, 255, 1)' },
        warning: { icon: "alert-outline", color: (colorScheme === 'dark') ? 'rgba(255, 214, 10, 1)' : 'rgba(255, 149, 0, 1)' },
        error: { icon: "alert-circle", color: (colorScheme === 'dark') ? 'rgba(255, 69, 58, 1)' : 'rgba(255, 59, 48, 1)' },
    }

    const bgColors = {
        message: (colorScheme === 'dark') ? 'rgba(10, 132, 255, 0.3)' : 'rgba(0, 122, 255, 0.3)',
        warning: (colorScheme === 'dark') ? 'rgba(255, 214, 10, 0.3)' : 'rgba(255, 149, 0, 0.3)',
        error: (colorScheme === 'dark') ? 'rgba(255, 69, 58, 0.3)' : 'rgba(255, 59, 48, 0.3)',
    }

    const styles = StyleSheet.create({
        alertContainer: {
            marginVertical: 15,
            backgroundColor: bgColors[type],
            borderWidth: 1,
            borderColor: iconMap[type].color,
            borderRadius: 10,
            padding: 15,
            alignItems: "center",
            justifyContent: "center"
        },

        iconStyle: {
            color: iconMap[type].color,
            marginRight: 10,
            fontSize: 25
        },

        textStyle: {
            color: (colorScheme === 'dark') ? '#fff' : '#000',
            fontWeight: (type === "message" ? undefined : "bold")
        }
    })


    return (
        <View style={styles.alertContainer}>
            <View style={{ flexDirection: "row", marginHorizontal: 15, alignItems: "center" }}>
                <MaterialCommunityIcons name={iconMap[type].icon} style={styles.iconStyle} color={iconMap[type].color} />
                <Text style={styles.textStyle}>{message}</Text>
            </View>
        </View>
    )
}