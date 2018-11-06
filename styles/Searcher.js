import {StyleSheet} from 'react-native';
import {Colors, Margins, FontSizes, ButtonWidth, ScreenWidth } from './Common'

export default StyleSheet.create({
    inputText: {
        backgroundColor: Colors.PrimaryColor,
        marginBottom: 8,
        width: ButtonWidth,
        padding: Margins.DefaultMargin
    },
    searchButton : {
        backgroundColor: Colors.AccentColorLight,
        alignItems: 'center',
        marginBottom: Margins.DefaultMargin,
        width: ButtonWidth,
        padding: Margins.DefaultMargin
    },
    seachButtonText: {
        color: Colors.PrimaryColor,
        fontSize: FontSizes.ButtonFontSize
    },
    searcherBox: {
        width: ScreenWidth,
        alignItems: 'center',
        backgroundColor: '#5E5E5E'
    }
});