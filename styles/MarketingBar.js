import {StyleSheet} from 'react-native';
import {Colors, Margins, FontSizes} from './Common'

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.AccentColorLight,
        alignItems: 'center'
    },
    marketingText:{
        color: Colors.PrimaryColor,
        fontSize: FontSizes.ReadingFontSize,
        margin: 8
    },
    marketingButton: {
        flex:1,
        alignItems: 'center',
        backgroundColor: Colors.PrimaryColor,
        marginBottom: Margins.DefaultMargin,
        padding: Margins.DefaultMargin,
        width:200
    }
});