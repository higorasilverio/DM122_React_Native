import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts, measures} from '../../styles';

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    },
    containerText: {
        padding: measures.padding
    },
    description: {
        fontSize: fonts.big,
        fontWeight: 'bold',
        color: colors.base
    },
    item: {
        fontSize: fonts.bigger,
        fontWeight: 'bold',
        color: colors.light
    },
    checkIcon:{
        position: 'absolute',
        color: colors.base,
        right: '27.5%',
        zIndex: 1
    },
})

export default style;