import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './button.style'
import Feather from '@expo/vector-icons/Feather';

export const StyledButton = ({ iconName, iconColor, iconSize, ...rest }) => {
    return (
        <TouchableOpacity style={styles.button} {...rest}>
            <Feather name={iconName} color={iconColor} size={iconSize} />
        </TouchableOpacity>
    );
}
