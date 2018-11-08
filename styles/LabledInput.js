import { StyleSheet } from 'react-native';
import { Colors, FontSizes, Margins, ButtonWidth } from'./Common';

export default StyleSheet.create( {
  
    inputText: {
      height: 32, 
      fontSize: FontSizes.ReadingFontSize,
      backgroundColor: Colors.PrimaryColor,
      marginBottom: Margins.HalfMargin,
      flex: .9,
      padding: Margins.DefaultMargin,
      color: Colors.AccentColorDark, 
      borderBottomWidth: 1, 
      borderBottomColor: Colors.AccentColorDark
    },
  
    labelStyle: {
      position: 'absolute',
      left: 10,
      top: 0,
      fontSize: FontSizes.ReadingFontSize,
      color: Colors.AccentColorDark
    },
  
    frame: {
      paddingTop: Margins.DefaultMargin,
      marginTop: Margins.DefaultMargin,
      width: ButtonWidth,
    }
  
  });