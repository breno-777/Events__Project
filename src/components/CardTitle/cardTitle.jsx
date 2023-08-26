import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './cardTitle.style'

export const CardTitle = () => {
    return (
        <View>
            <Text style={styles.title}>Participantes</Text>
        </View>
    );
}