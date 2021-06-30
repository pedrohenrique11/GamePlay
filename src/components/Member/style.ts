import React from "react";
import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center', 
    },
    title: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        marginBottom: 2
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bulletStatus: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 8,
        marginBottom: 5
    },
    userStatus: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
        marginBottom: 5
    }
})