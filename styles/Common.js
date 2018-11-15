import { Dimensions } from "react-native";

//Default width of buttons
export const ButtonWidth = Dimensions.get('window').width - 18;
export const ScreenWidth = Dimensions.get('window').width;

//Color pallate
export const Colors = { 
    PrimaryColor : '#FFF',
    AccentColorLight : '#FF6622',
    AccentColorDark :'#5E5E5E',
    HiglightColor : '#259AA8'
}

//Font sizes
export const FontSizes = { 
    ButtonFontSize : 24,
    ReadingFontSize : 16,
    HeaderFontSize : 40
}

//Margins
export const Margins = {
    DefaultMargin : 18,
    HalfMargin: 9
}