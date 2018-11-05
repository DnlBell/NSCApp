import { StyleSheet } from 'react-native';
import { Colors, ScreenWidth} from'./Common';

export default StyleSheet.create({
    navBar:{
        alignSelf:'flex-end',
        justifyContent:'space-evenly',
        flexDirection: 'row',
        width:ScreenWidth,
        backgroundColor: Colors.AccentColorLight,
    },
    navButton:{
        padding:18,
    },
    navText: {
        color: Colors.PrimaryColor
    }
});