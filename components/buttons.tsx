import { Button, Text } from "react-native-paper";
import { COLORS } from "../constants";

export const BasicButton = ({onPress, title}) => (
    <Button 
    style={{backgroundColor: COLORS.headerPink, 
        alignSelf:'center', 
        shadowColor: COLORS.gray, 
        shadowRadius: 15, 
        shadowOffset: {width: 1, height: 1,},
        shadowOpacity: 0.5,}}
        onPress={onPress()}>
        <Text style={{
            color: COLORS.white, 
            textShadowColor: COLORS.gray,
            textShadowRadius:3,}}>{title}
        </Text>
    </Button>
);



export const BigButton = ({onPress, title}) => (
    <Button 
    style={{backgroundColor: COLORS.headerPink, 
        padding: 20,
        borderRadius: 100, 
        shadowColor: COLORS.gray, 
        shadowRadius: 15, 
        shadowOffset: {width: 1, height: 1,},
        shadowOpacity: 0.5,
        alignSelf:'center',
        justifyContent:'center',
        }}
        
        onPress={onPress()}>
        <Text style={{
            fontSize: 20,
            includeFontPadding: false,
            color: COLORS.white, 
            textShadowColor: COLORS.gray,
            textShadowRadius:3,
            textAlign:'center',
           
            }}>{title}
        </Text>
    </Button>
);