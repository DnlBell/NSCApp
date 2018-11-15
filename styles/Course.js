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
    details:{
        backgroundColor: Colors.AccentColorLight,
        padding: Margins.HalfMargin,
        margin: Margins.HalfMargin,
        width: ScreenWidth/4,
        alignItems:'center'
    },
    detailsText:{
        color:Colors.PrimaryColor
    },
     breakLine:{

     }


     
});