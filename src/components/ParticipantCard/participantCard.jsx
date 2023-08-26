import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { styles } from './participantCard.style'


export const ParticipantCard = ({ participant, onParticipantRemoved }) => {
    return (
        <View style={styles.conteiner}>
            <Text style={styles.text}>
                {participant.name}
            </Text>

            <TouchableOpacity style={styles.iconBox}>
                <Feather style={styles.icons} name="trash-2" size={24} color="#808080"
                    onPress={onParticipantRemoved} />
            </TouchableOpacity>
        </View >
    );
}