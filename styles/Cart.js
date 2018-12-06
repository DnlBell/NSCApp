import { StyleSheet } from 'react-native';
import { Colors, FontSizes, Margins, ButtonWidth, ScreenWidth } from'./Common';

export default styles = StyleSheet.create({
    title:{
        fontSize: FontSizes.HeaderFontSize,
        margin: Margins.HalfMargin,
        color:Colors.AccentColorDark
    },
    text:{
        fontSize: FontSizes.ReadingFontSize,
        margin: Margins.HalfMargin,
        color:Colors.AccentColorDark
    },
    line:{
        height:1,
        margin: Margins.HalfMargin,
        backgroundColor:Colors.AccentColorDark
    },
    inputText: {
        backgroundColor: Colors.PrimaryColor,
        margin:Margins.HalfMargin,
        padding: Margins.DefaultMargin,
    },
    button : {
        backgroundColor: Colors.AccentColorLight,
        alignItems: 'center',
        width: ScreenWidth,
        height: 115,
        padding: Margins.DefaultMargin
    },
    buttonText:{
        color:Colors.PrimaryColor
    },
});