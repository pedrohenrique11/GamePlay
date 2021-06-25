import React from "react";
import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 104,
        paddingTop: getStatusBarHeight() + 10,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        color: theme.colors.heading
    }
})