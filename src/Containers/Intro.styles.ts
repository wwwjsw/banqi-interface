import styled from 'styled-components/native'
import { colors, sizes } from '../Constants';

export const IntroContainer = styled.View`
    flex: 1;
    background-color: ${colors.background};
    justify-content: center;
    align-items: center;
`;

export const IntroContainerGoTo = styled.TouchableOpacity`
    border-radius: 8px;
    border-width: 3px;
    padding: ${sizes.space.small}px;
    border-style: solid;
    border-color: ${colors.primary};

`;