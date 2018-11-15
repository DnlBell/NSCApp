import { StyleSheet } from 'react-native';
import { Colors, Margins, ScreenWidth, FontSizes} from'./Common';

export default StyleSheet.create({

    title:{
        color:Colors.AccentColorLight,
        fontSize:FontSizes.ReadingFontSize,
        margin:Margins.HalfMargin
    },
    image:{
        width: ScreenWidth/3 ,
        height: ScreenWidth/3 ,
        margin: Margins.HalfMargin
    },
    starFrame:{
        width: ScreenWidth/4,
        margin:Margins.HalfMargin
    },
    price:{
        fontWeight:"bold",
        fontSize:FontSizes.ReadingFontSize,
        margin:Margins.HalfMargin
    },
    description:{
        margin: Margins.HalfMargin,
        fontSize:FontSizes.ReadingFontSize
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
    line:{
        height:1,
        backgroundColor:Colors.AccentColorDark
    }

});