import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { COLORS, images, icons } from "../constants";


export default function ProfileButton({onPress}) {
    return (
        <TouchableHighlight onPress={() => onPress()}>
            <Image
                source={icons.profile}
                resizeMode="contain"
                style={{
                    width: 30,
                    height: 30,
                    shadowColor: COLORS.gray,
                    shadowRadius: 3,
                    shadowOffset: {width: 1, height: 1,}
                }}></Image>
        </TouchableHighlight>
    );
}