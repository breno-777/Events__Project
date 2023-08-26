import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './card.style';

export const Card = (props) => {
    return (
        <View style={styles.card__event}>
            <View>
                <Ionicons name="ios-file-tray-outline" size={70} color="#505050" />
            </View>
            <View style={styles.events__tipsBox}>
                <Text style={styles.events__title}>{props.title}</Text>
                <Text style={styles.events__subtitle}>{props.subtitle}</Text>
            </View>
        </View>
    );
}