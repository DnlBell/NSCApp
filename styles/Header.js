import { StyleSheet } from 'react-native';
import { Colors, FontSizes, Margins } from'./Common';

export default StyleSheet.create({
    head: {
        flex: 1,
        paddingTop: Margins.DefaultMargin,
        paddingBottom: Margins.DefaultMargin,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: Colors.AccentColorDark
    },
    heroLine1: {
        color: Colors.PrimaryColor,
        fontSize: FontSizes.HeaderFontSize,
    },
    heroLine2: {
        color: Colors.PrimaryColor,
        fontSize: FontSizes.HeaderFontSize,
        fontWeight: 'bold'
    },
    heroTextFrame: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        marginTop: Margins.DefaultMargin,
        marginBottom: Margins.DefaultMargin
    }
});