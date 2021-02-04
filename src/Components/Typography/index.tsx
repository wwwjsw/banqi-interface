import * as React from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';
import { sizes } from '../../Constants';

interface ITypography {
    text: string;
    bold?: boolean;
    fontSize: number;
    color: string;
    marginRightMedium?: boolean;
}

const Typography = (props: ITypography) => {
    const { text, bold, fontSize, color, marginRightMedium } = props;
    const [fontsLoaded, setFontsLoaded] = React.useState(false)

    async function loadFonts() {
        await Font.loadAsync({
            Montserrat: require('../../../assets/Fonts/Montserrat-Medium.ttf'),
            'Montserrat-Bold': {
                uri: require('../../../assets/Fonts/Montserrat-Bold.ttf'),
            },
        });
        setFontsLoaded(true)
    }

    React.useEffect(() => {
        loadFonts();
    }, [])

    if (fontsLoaded) {
      return (
        <Text
            style={{
                fontFamily: bold ? 'Montserrat-Bold' : 'Montserrat',
                fontSize: fontSize,
                color: color,
                marginRight: marginRightMedium ? sizes.space.medium : 0,
            }}>
                {text}
        </Text>
      )
    } else {
      return null;
    }
}

export default Typography;
