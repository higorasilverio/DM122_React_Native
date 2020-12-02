import { StyleSheet } from 'react-native';
import { measures, colors, fonts} from '../../styles';

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: measures.padding,
        justifyContent: 'space-between',
    },
    item: {
        fontSize: fonts.bigger,
        margin: measures.padding,
        color: colors.base,
        borderBottomColor: colors.dark,
        borderBottomWidth: 1,
        padding: measures.padding,
        fontWeight: 'bold'
    },
})

export default style;