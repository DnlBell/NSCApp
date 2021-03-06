import { StyleSheet } from 'react-native';
import { Colors, ScreenWidth, Margins, FontSizes} from'./Common';

export default StyleSheet.create({
    pageContainer: {
        flex:1
     },
     image: {
        width:ScreenWidth,
        height:ScreenWidth
     },
     marginFrame:{
        margin:Margins.HalfMargin
     },
     title:{
        fontSize:FontSizes.HeaderFontSize,
        color:Colors.AccentColorDark
     },
     vendor:{
        fontSize:FontSizes.ButtonFontSize,
        color:Colors.AccentColorDark
     },
     price:{
        color:Colors.AccentColorDark,
        fontWeight: 'bold',
        marginTop:Margins.HalfMargin
     },
     audience:{
        color:Colors.AccentColorDark,
        marginTop:Margins.HalfMargin
     },
     text:{
        color:Colors.AccentColorDark,
        marginTop:Margins.HalfMargin
     },
    button:{
        marginTop:Margins.HalfMargin,
        backgroundColor: Colors.AccentColorLight,
        padding: Margins.HalfMargin,
        width: ScreenWidth/4,
        alignItems:'center'
    },
    buttonText:{
        color:Colors.PrimaryColor
    },
    breakLine:{

    }
});