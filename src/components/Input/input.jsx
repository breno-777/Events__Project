import React, { useState } from 'react';
import { styles } from './input.style'
import { TextInput } from 'react-native';

export const StyledInput = (props) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <TextInput
            style={[styles.input, {
                borderColor: isFocused ?
                    '#5E60CE' : '#0C0C0D'
            }]
            }
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
        />
    );
}