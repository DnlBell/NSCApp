import { StyleSheet } from 'react-native';
import { Colors, FontSizes, Margins } from'./Common';

export default StyleSheet.create({
    container: {
      justifyContent: 'center',
      padding: Margins.HalfMargin,
      backgroundColor: Colors.PrimaryColor,
    },
    faceButton: {
      padding:Margins.DefaultMargin,
      backgroundColor: 'blue',
      alignItems: 'center'
    },
    googleButton: {
      marginTop: Margins.HalfMargin,
      marginBottom: Margins.HalfMargin,
      padding: Margins.DefaultMargin,
      backgroundColor: 'lightblue',
      alignItems: 'center'
    },
    buttonText: {
      color: Colors.PrimaryColor,
      fontSize: FontSizes.ButtonFontSize 
    }
  });