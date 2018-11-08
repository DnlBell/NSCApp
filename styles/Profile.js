import { StyleSheet } from 'react-native';
import { Colors, FontSizes, Margins, ButtonWidth, ScreenWidth } from'./Common';

export default StyleSheet.create({
    viewStyle: {
      flex:1,
    },
  
    imageStyle: {
      width: 100,
      height: 100,
      borderRadius: 100,
      alignSelf: 'center',
      marginTop: 20,
      marginBottom: 10
    },
  
    textStyle: {
      fontSize: FontSizes.ReadingFontSize,
      fontWeight: 'bold',
      alignSelf: 'center'
    },
  
    loginButton : {
      backgroundColor: Colors.AccentColorLight,
      alignItems: 'center',
      marginBottom: 30,
      width: ButtonWidth,
      padding: Margins.DefaultMargin,
      alignSelf: 'center'
    },

    loginButtonText: {
      color: Colors.PrimaryColor,
      fontSize: FontSizes.ButtonFontSize
    },

    inputFrame: {
      alignItems: 'center'
    }
  });