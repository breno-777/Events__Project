import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './header.style';
import dayjs from "dayjs";
// import { format } from "date-fns";

export const Header = () => {

    const date = new Date(2022, 2, 19, 15, 57, 25);
    const withTime24hourFormat = dayjs(date).format("dddd, DD MMMM de YYYY.");

    return (
        <View style={styles.header}>
            <Text style={styles.title}>Nome do Evento</Text>
            <Text style={styles.date}>{withTime24hourFormat}</Text>
        </View>
    );
}