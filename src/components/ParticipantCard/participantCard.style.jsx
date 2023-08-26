import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    conteiner: {
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',

        width: '100%',

        paddingHorizontal: 8,
        paddingVertical: 16,
        gap: 8,

        borderRadius: 8,
        borderWidth: 1,

        borderColor: '#333333'
    },
    text: {
        flex: 1,
        color: '#F2F2F2',
        textAlign: 'center'
    },
    scratchedText: {
        color: '#808080',
        textDecorationLine: 'line-through'
    },

    iconBox: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },

});
